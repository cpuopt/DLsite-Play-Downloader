import { origConsole } from "../origConsole";
import { registerRequestHook } from "../hookFetch";
import { extractDlsiteId } from "../utils";

import { fileTypeFromBuffer } from "file-type";
import { zip } from "fflate";
import { unsafeWindow } from "$";


export const hookXorEnc = () => {
  return new Promise((resolve, reject) => {
    Promise.all([hookXorKey(), hookEncBinUrl(), hookViewerMeta()]).then(([{ key: encDetectorKey }, { url: binUrl }, { json: viewerMeta }]) => {
      origConsole.log("viewerMeta ", viewerMeta);
      origConsole.log("xor key ", encDetectorKey);
      origConsole.log("binUrl  ", binUrl);
      const encBinUrls = makeEncBinUrls(binUrl, viewerMeta)
      origConsole.log("encBinUrls  ", encBinUrls.length);
      const saveName = makeArtworkSaveName(viewerMeta)
      origConsole.log("makeArtworkSaveName ", saveName);
      resolve({
        method: "xor",
        data: {
          urls: encBinUrls,
          key: encDetectorKey,
          zipFileName: saveName,
          download: () => downloadAndDecryptToZip(encBinUrls, encDetectorKey, `${saveName}.zip`).catch(origConsole.error),
        },
      })
    })
  })
};

function makeArtworkSaveName(viewerMeta) {
  let creator = ""
  if (viewerMeta.meta_data.creator?.length > 0) {
    creator = viewerMeta.meta_data.creator.join(" ")
  }
  let publisher = ""
  if (viewerMeta.meta_data.publisher) {
    publisher = viewerMeta.meta_data.publisher
  }
  let title = ""
  if (viewerMeta.meta_data.title) {
    title = viewerMeta.meta_data.title
  }
  let no = ""
  const NO = extractDlsiteId(window.location.href);
  if (NO) {
    no = NO
  }
  return `[${no}] (${publisher})(${creator}) ${title}`
}

function extractNumberOrKeepOriginal(str) {
  const match = str.match(/\d+/);
  return match ? match[0] : str;
}

function makeEncBinUrls(binUrlExample, viewerMeta) {
  const binUrls = []
  viewerMeta.pages.forEach(({ src }, _i) => {
    const url = binUrlExample.replace(/\/((i-\d+)|cover)\.enc\b/, `/${src}`)
    binUrls.push({
      url: url,
      name: `${_i}-${extractNumberOrKeepOriginal(src.replace(".enc", ""))}`
    })
  });
  return binUrls
}
/**
 * hook Worker的postMessage方法，尝试截获xor key以判断是否为xor加密方式
 * @returns {Promise<encDetectorResult>}
 */
const hookXorKey = () => {
  return new Promise((resolve, reject) => {
    const origPostMessage = Worker.prototype.postMessage;

    Worker.prototype.postMessage = function (msg, ...rest) {
      if (msg && msg.param) {
        if (msg.param.key && msg.param.method === "xor") {
          Worker.prototype.postMessage = origPostMessage;
          resolve({
            key: msg.param.key,
          });
        }
      }

      return origPostMessage.call(this, msg, ...rest);
    };
  });
}

const hookEncBinUrl = () => {
  return new Promise((resolve, reject) => {
    registerRequestHook(/\/((i-\d+)|cover)\.enc\?Policy=/, (json, response, url) => {
      resolve({
        url: url,
      });
    }, true);
  })
}

const hookViewerMeta = () => {
  return new Promise((resolve, reject) => {
    registerRequestHook(/\/viewer\-meta\.json\b/, (json, response, url) => {
      resolve({
        json: json,
      });
    }, true);
  });
}



/**
 * XOR 解密
 */
function xorDecrypt(data, keyHex) {
  // keyHex -> Uint8Array
  const key = Uint8Array.from(keyHex.match(/.{1,2}/g).map(b => parseInt(b, 16)));
  const keyLen = key.length;
  const result = new Uint8Array(data.length);
  for (let i = 0; i < data.length; i++) {
    result[i] = data[i] ^ key[i % keyLen];
  }
  return result;
}

// 使用 XHR 下载 ArrayBuffer
function downloadArrayBuffer(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "arraybuffer";
    xhr.onload = () => {
      if (xhr.status === 200) resolve(xhr.response);
      else reject(new Error(`下载失败: ${xhr.status} ${xhr.statusText}`));
    };
    xhr.onerror = () => reject(new Error("XHR 请求失败"));
    xhr.send();
  });
}

/**
 * 异步下载+解密+自动识别文件类型+打包ZIP (支持多线程)
 * @param {Array<{url: string, name: string}>} files - 文件列表
 * @param {string} keyHex - XOR 密钥
 * @param {string} outputZip - 输出 ZIP 名称
 * @param {number} concurrency - 并发线程数（默认 5）
 */
const downloadAndDecryptToZip = async (files, keyHex, outputZip, concurrency = 3) => {
  const zipFiles = {};
  let successCount = 0;
  let failCount = 0;

  // 改进的并发控制器
  const runWithConcurrency = async (tasks, maxConcurrent) => {
    const results = [];
    const executing = new Set();

    for (const task of tasks) {
      // 等待有位置空出来
      if (executing.size >= maxConcurrent) {
        await Promise.race(executing);
      }

      const taskPromise = runTask(task).finally(() => {
        executing.delete(taskPromise);
      });

      executing.add(taskPromise);
      results.push(taskPromise);
    }

    return Promise.allSettled(results);
  };

  const runTask = async ({ url, name }) => {
    try {
      origConsole.log(`下载中: ${name}`);
      unsafeWindow.add_log?.(`下载中: ${name}`);

      const arrayBuffer = await downloadArrayBuffer(url);
      const encrypted = new Uint8Array(arrayBuffer);
      const decrypted = xorDecrypt(encrypted, keyHex);

      const type = await fileTypeFromBuffer(decrypted);
      const ext = type ? type.ext : "bin";
      const finalName = name.endsWith(`.${ext}`) ? name : `${name}.${ext}`;
      zipFiles[finalName] = decrypted;

      successCount++;
      origConsole.log(`✓ 已完成: ${finalName} (${type?.mime || "未知类型"})`);
      unsafeWindow.add_log?.(`✓ 已完成: ${finalName} (${type?.mime || "未知类型"})`);

      return { success: true, name: finalName };
    } catch (err) {
      failCount++;
      origConsole.error(`✗ 处理失败: ${name}`, err);
      unsafeWindow.add_log?.(`✗ 处理失败: ${name} (${err.message})`);
      return { success: false, name, error: err.message };
    }
  };

  // 执行所有任务
  await runWithConcurrency(files, concurrency);

  // 检查是否有成功文件
  if (Object.keys(zipFiles).length === 0) {
    const errorMsg = "所有文件处理失败，无法创建ZIP";
    origConsole.error(errorMsg);
    unsafeWindow.add_log?.(errorMsg);
    throw new Error(errorMsg);
  }

  // 压缩 ZIP
  return new Promise((resolve, reject) => {
    zip(zipFiles, (err, zipped) => {
      if (err) {
        origConsole.error("ZIP 压缩失败", err);
        unsafeWindow.add_log?.("ZIP 压缩失败", err);
        reject(err);
        return;
      }

      const blob = new Blob([zipped], { type: "application/zip" });
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = outputZip;

      const summary = `完成: ${successCount} 成功, ${failCount} 失败 -> ${outputZip}`;
      origConsole.log(summary);
      unsafeWindow.add_log?.(summary);

      resolve({
        save: () => {
          a.click();
          // 延迟释放 URL，确保下载开始
          setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
        },
        successCount,
        failCount,
        blobUrl // 暴露出来便于外部管理
      });
    });
  });
};

