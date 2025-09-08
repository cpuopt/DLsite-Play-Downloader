
/**
 * hook Worker的postMessage方法，尝试截获xor key以判断是否为xor加密方式
 * @returns {Promise<encDetectorResult>}
 */
export const hookXorEnc = () => {
  return new Promise((resolve, reject) => {
    const origPostMessage = Worker.prototype.postMessage;

    Worker.prototype.postMessage = function (msg, ...rest) {
      if (msg && msg.param) {
        if (msg.param.key && msg.param.method === "xor") {
          Worker.prototype.postMessage = origPostMessage;
          resolve({
            method: "xor",
            data: msg.param.key,
          });
        }
      }

      return origPostMessage.call(this, msg, ...rest);
    };
  });
};
