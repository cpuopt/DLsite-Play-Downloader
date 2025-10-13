import { origConsole } from "../origConsole";
import { unsafeWindow } from "$";

export const hookXorEnc = () => {
  return new Promise((resolve, reject) => {
    Promise.all([hookXorKey(), hookEncBinUrl(), hookZipTreePageNum()]).then(([encDetectorRe, encBinUrlMaker, ziptreePageNum]) => {

    })
  })
};

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
            method: "xor",
            data: msg.param.key,
            encBinMaker: () => { }
          });
        }
      }

      return origPostMessage.call(this, msg, ...rest);
    };
  });
}

const hookEncBinUrl = () => {
  return new Promise((resolve, reject) => {
    resolve()
  })
}

const hookZipTreePageNum = () => {
  return new Promise((resolve, reject) => {
    const originalFetch = unsafeWindow.fetch;

    unsafeWindow.fetch = (...args) => {
      const [resource, config] = args;


      const pattern = /\/ziptree\.json\b/;
      origConsole.log(resource, pattern.test(resource));
      if (pattern.test(resource)) {
        origConsole.log("[hookZiptreeFetch] 检测到 ziptree 请求:", resource);

        originalFetch(...args).then((response) => {
          const clone = response.clone();
          clone.json().then((json) => {
            origConsole.log(json)
            unsafeWindow.fetch = originalFetch;

            resolve({
              json: json,
            });
          });

        });
      }
      return originalFetch(...args);
    };
  });
}