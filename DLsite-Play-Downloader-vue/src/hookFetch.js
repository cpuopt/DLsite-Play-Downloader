import { unsafeWindow } from "$";
import { origConsole } from "./origConsole";

const origFetch = unsafeWindow.fetch;
const hooks = [];


/**
 * 注册请求捕获规则
 * @param {RegExp} pattern 匹配 URL 的正则
 * @param {Function} callback 捕获后执行的回调 (json, response, url, type)
 * @param {boolean} [once=false] 是否只捕获一次
 */
export const registerRequestHook = (pattern, callback, once = false) => {
    const hook = { pattern, callback, once };
    hooks.push(hook);
    origConsole.log("[hookRequest] 注册 hook:", pattern, once ? "(once)" : "");
    return () => removeHook(hook);
};


if (!unsafeWindow.__requestHooked__) {
    unsafeWindow.__requestHooked__ = true;

    // ---- Hook Fetch ----
    unsafeWindow.fetch = async (...args) => {
        const [resource] = args;
        const url =
            typeof resource === "string"
                ? resource
                : resource instanceof URL
                    ? resource.href
                    : resource?.url;
        const matchedHooks = hooks.filter((h) => h.pattern.test(url));

        if (matchedHooks.length === 0) return origFetch(...args);

        origConsole.log("[hookRequest] 捕获 fetch 请求：", url);

        const response = await origFetch(...args);
        matchedHooks.forEach((h) => {
            response
                .clone()
                .json()
                .catch(() => null)
                .then((json) => {
                    try {
                        h.callback(json, response, url, "fetch");
                    } catch (err) {
                        origConsole.error("[hookRequest] fetch 回调错误:", err);
                    }
                    if (h.once) removeHook(h);
                });
        });

        return response;
    };

    // ---- Hook XHR ----
    const OrigXHR = unsafeWindow.XMLHttpRequest;

    class HookedXHR extends OrigXHR {
        constructor() {
            super();
            this._url = null;

            const origOpen = this.open;
            this.open = function (method, url, ...rest) {
                this._url = url;
                return origOpen.call(this, method, url, ...rest);
            };

            const origSend = this.send;
            this.send = function (...args) {
                this.addEventListener("load", () => {
                    try {
                        const matchedHooks = hooks.filter((h) => h.pattern.test(this._url));
                        if (matchedHooks.length === 0) return;

                        origConsole.log("[hookRequest] 捕获 XHR 请求：", this._url);

                        let json = null;
                        try {
                            json = JSON.parse(this.responseText);
                        } catch {
                            // ignore non-JSON
                        }

                        matchedHooks.forEach((h) => {
                            try {
                                h.callback(json, this, this._url, "xhr");
                            } catch (err) {
                                origConsole.error("[hookRequest] xhr 回调错误:", err);
                            }
                            if (h.once) removeHook(h);
                        });
                    } catch (err) {
                        origConsole.error("[hookRequest] XHR 处理错误:", err);
                    }
                });

                return origSend.apply(this, args);
            };
        }
    }

    unsafeWindow.XMLHttpRequest = HookedXHR;
    origConsole.log("[hookRequest] 已挂载 fetch + XHR hook");
}


function removeHook(hookObj) {
    const index = hooks.indexOf(hookObj);
    if (index !== -1) {
        hooks.splice(index, 1);
        origConsole.log("[hookRequest] 已移除一次性 hook:", hookObj.pattern);
    }
}
