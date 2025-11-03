import { unsafeWindow } from "$";
import { origConsole } from "../origConsole";

/**
 * 监听 fetch 请求，检测是否为拼图加密加载方式
 * @returns {Promise<encDetectorResult>}
 */
export const hookFetchPuzzle = () => {
    return new Promise((resolve, reject) => {
        registerRequestHook(/\//, (json, response, url) => {
            origConsole.log(url)
        }, true);
    });
};
