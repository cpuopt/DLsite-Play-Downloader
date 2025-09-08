
/**
 * 
 * @returns {Promise<encDetectorResult>}
 */
export const hookFetchPuzzle = () => {
    return new Promise((resolve, reject) => {
        const origPostMessage = Worker.prototype.postMessage;

        Worker.prototype.postMessage = function (msg, ...rest) {
            if (msg && msg.param) {
                if (msg.param.key && msg.param.method === "xor") {
                    Worker.prototype.postMessage = origPostMessage;
                    resolve({
                        method: "puzzle",
                        data: ,
                    });
                }
            }

            return origPostMessage.call(this, msg, ...rest);
        };
    });
};
