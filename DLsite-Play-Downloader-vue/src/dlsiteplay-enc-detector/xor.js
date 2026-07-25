import { origConsole } from "../origConsole";
import { registerRequestHook } from "../hookFetch";
import { extractDlsiteId } from "../utils";

import { fileTypeFromBuffer } from "file-type";
import { zip } from "fflate";
import { unsafeWindow } from "$";


export const hookXorEnc = () => {
  return new Promise((resolve, reject) => {
    Promise.all([hookXorKey(), hookEncBinUrl(), hookViewerMeta(), hookApiV2Work()]).then(([{ key: encDetectorKey }, { url: binUrl }, { json: viewerMeta }, { json: apiV2WorkMeta }]) => {
      origConsole.log("viewerMeta ", viewerMeta);
      origConsole.log("xor key ", encDetectorKey);
      origConsole.log("binUrl  ", binUrl);
      const encBinUrls = makeEncBinUrls(binUrl, viewerMeta)
      origConsole.log("encBinUrls  ", encBinUrls.length);
      const saveName = makeArtworkSaveName(viewerMeta, apiV2WorkMeta)
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

function makeArtworkSaveName(viewerMeta, apiV2WorkMeta) {
  console.log(apiV2WorkMeta);

  let creator = undefined
  if (viewerMeta.meta_data.creator?.length > 0) {
    creator = viewerMeta.meta_data.creator.join(" ")
  }

  let apiV2_maker = ""
  if (apiV2WorkMeta?.maker?.name?.ja_JP) {
    apiV2_maker = apiV2WorkMeta.maker?.name?.ja_JP
  }

  let apiV2_name = ""
  if (apiV2WorkMeta?.name?.ja_JP) {
    apiV2_name = apiV2WorkMeta?.name?.ja_JP
  }

  let publisher = ""
  if (viewerMeta.meta_data.publisher) {
    publisher = viewerMeta.meta_data.publisher
  }
  let title = undefined
  if (viewerMeta.meta_data.title) {
    title = viewerMeta.meta_data.title
  }
  let no = ""
  const NO = extractDlsiteId(window.location.href);
  if (NO) {
    no = NO
  }
  return `[${no}] (${publisher})(${creator ?? apiV2_maker}) ${title ?? apiV2_name}`
}

function extractNumberOrKeepOriginal(str) {
  const match = str.match(/\d+/);
  return match ? match[0] : str;
}

function makeEncBinUrls(binUrlExample, viewerMeta) {
  const binUrls = []

  const pattern = /\/((i-\d+)|cover|\d+)\.enc\b/;
  const matched = pattern.test(binUrlExample);

  viewerMeta.pages.forEach(({ src }, _i) => {
    let url;
    let name;

    if (matched) {
      url = binUrlExample.replace(pattern, `/${src}`);
      name = `${_i}-${extractNumberOrKeepOriginal(
        src.replace(".enc", "")
      )}`;
    } else {
      url = binUrlExample.replace(/\/[^\/]+.enc/, `/${src}`);
      name = src.replace(".enc", "")
    }

    binUrls.push({ url, name });
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


    const originalDecrypt = crypto.subtle.decrypt;

    crypto.subtle.decrypt = async function (algorithm, key, data) {
      const result = await originalDecrypt.call(this, algorithm, key, data);
      const utf8String = new TextDecoder('utf-8').decode(result);
      resolve({
        key: utf8String,
      })
      return result;
    };
  });
}

const hookEncBinUrl = () => {
  return new Promise((resolve, reject) => {
    registerRequestHook(/\/[^/?]+\.enc(?:\?|$)/, (json, response, url) => {
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

const hookApiV2Work = () => {
  return new Promise((resolve) => {
    let unregisterFns = [];

    const cleanUpAll = () => {
      unregisterFns.forEach(unhook => {
        if (typeof unhook === 'function') unhook();
      });
      unregisterFns.length = 0;
    };

    const patterns = [
      /\/api\/v2\/work\/.+$/,
      /\/api\/viewer\/work\/.+$/,
      /\/api\/comipo\/v2\/work\/.+$/
    ];

    patterns.forEach(pattern => {
      const unhook = registerRequestHook(pattern, (json) => {
        // 触发成功后，先清理所有 Hook
        cleanUpAll();
        resolve({ json });
      }, true);

      unregisterFns.push(unhook);
    });
  });
};


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
          setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
        },
        successCount,
        failCount,
        blobUrl
      });
    });
  });
};




/**
 * 
 *   , LC = async e => {
    const r = new TextEncoder().encode(e)
      , a = await crypto.subtle.digest("SHA-256", r);
    return Array.from(new Uint8Array(a)).map(l => l.toString(16).padStart(2, "0")).join("")
}
 */


// const DH = {
//   name: "RSA-OAEP",
//   modulusLength: 4096,
//   publicExponent: new Uint8Array([1, 0, 1]),
//   hash: "SHA-256"
// };


// const FIXED_KEYPAIR = await crypto.subtle.generateKey(DH, true, ["encrypt", "decrypt"]);

// /**
//  * 使用固定的 RSA 私钥解密 Base64 编码的密文
//  * @param {string} cipherBase64 - Base64 编码的密文
//  * @returns {Promise<string>} 解密后的字符串
//  */
// async function decryptRSA(cipherBase64) {
//   const subtle = crypto.subtle;
//   const algorithm = { name: "RSA-OAEP" };

//   const base64ToBytes = (base64) => {
//     const binary = atob(base64);
//     const bytes = new Uint8Array(binary.length);
//     for (let i = 0; i < binary.length; i++) {
//       bytes[i] = binary.charCodeAt(i);
//     }
//     return bytes;
//   };

//   const bytesToString = (buffer) => String.fromCharCode(...new Uint8Array(buffer));

//   const decrypted = await subtle.decrypt(algorithm, FIXED_KEYPAIR.privateKey, base64ToBytes(cipherBase64));
//   return bytesToString(decrypted);
// }



// decryptRSA(key).then(r => {
//   console.log(r);

// })

(function () {
  const orig = crypto.subtle.generateKey;
  crypto.subtle.generateKey = async function (algorithm, extractable, usages) {
    console.log("%c[HOOK] generateKey called", "color: lime;");
    console.log("algorithm:", algorithm);
    console.log("extractable:", extractable);
    console.log("usages:", usages);

    const keyPair = await orig.apply(this, arguments);

    console.log("%c[HOOK] generated keyPair:", "color: cyan;");
    console.log("publicKey:", keyPair.publicKey);
    console.log("privateKey:", keyPair.privateKey);

    debugger

    try {
      const spki = await crypto.subtle.exportKey("spki", keyPair.publicKey);
      const pkcs8 = await crypto.subtle.exportKey("pkcs8", keyPair.privateKey);
      const toBase64 = buf => btoa(String.fromCharCode(...new Uint8Array(buf)));
      console.log("publicKey (SPKI base64):", toBase64(spki));
      console.log("privateKey (PKCS8 base64):", toBase64(pkcs8));
    } catch (err) {
      console.warn("[HOOK] exportKey failed:", err);
    }

    return keyPair;
  };
})();


/**
 * 
 * "MII***
publicKey (SPKI base64): 
请求https://play.dlsite.com/api/v3/viewer/token/BJ****** 的载荷public_key参数
 */

