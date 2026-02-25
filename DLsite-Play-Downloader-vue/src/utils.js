import { origConsole } from "./origConsole";

/**
 * 从形如
 * https://play.dlsite.com/work/BJ366185/viewer
 * 中提取BJ366185
 * @param url
 */
export function extractDlsiteId(url) {
    return url.match(/work\/([A-Z\d]+)\//)?.[1] ?? url.match(/\/viewer\/free\/([A-Z\d]+)/)?.[1] ?? null;
}