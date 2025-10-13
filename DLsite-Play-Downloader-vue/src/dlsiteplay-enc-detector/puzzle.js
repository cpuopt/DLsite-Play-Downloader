import { unsafeWindow } from "$";

/**
 * 监听 fetch 请求，检测是否为拼图加密加载方式
 * @returns {Promise<encDetectorResult>}
 */
export const hookFetchPuzzle = () => {
    return new Promise((resolve, reject) => {
        const originalFetch = unsafeWindow.fetch;

        unsafeWindow.fetch = (...args) => {
            const [resource, config] = args;

            // 匹配拼图模式请求 URL
            const puzzlePattern = /https:\/\/play\.dl\.dlsite\.com\/csr\/api\/diazepam_hybrid\.php\?mode=7&file=face\.xml&reqtype=0&vm=\d&param=.*&time=\d+/;

            if (puzzlePattern.test(resource)) {
                console.debug("[hookFetchPuzzle] 检测到拼图加密加载请求:", resource);

                // 恢复原始 fetch，防止重复 hook
                unsafeWindow.fetch = originalFetch;

                // 返回检测结果
                resolve({
                    method: "puzzle",
                    data: resource, // 可返回 URL 或空字符串
                });
            }

            // 继续执行原始 fetch
            return originalFetch(...args);
        };
    });
};
