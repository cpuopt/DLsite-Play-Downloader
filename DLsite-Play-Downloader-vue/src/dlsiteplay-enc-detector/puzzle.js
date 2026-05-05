import { zip } from "fflate";
import { unsafeWindow } from "$";
import { origConsole } from "../origConsole";
import { extractDlsiteId } from "../utils";

const PUZZLE_BLOCK_SIZE = 128;
const DETECT_RETRY_DELAYS = [0, 1500, 4000];

/**
 * Detects DLsite Play's puzzle image distribution.
 *
 * The old userscript handled this through:
 *   api/download/sign/cookie -> ziptree.json -> optimized/<image>
 * and then rebuilt each image by unshuffling 128px tiles with an MT19937 seed
 * derived from optimized.name.substring(5, 12).
 */
export const hookFetchPuzzle = () => {
  return new Promise((resolve) => {
    detectPuzzleWithRetries(resolve);
  });
};

async function detectPuzzleWithRetries(resolve) {
  const workNo = extractDlsiteId(unsafeWindow.location.href);
  if (!workNo) return;

  for (const delay of DETECT_RETRY_DELAYS) {
    if (delay > 0) await sleep(delay);
    if (!isSameWork(workNo)) return;

    try {
      const credential = await getDownloadCredential(workNo);
      const downloadPrefix = normalizeDownloadPrefix(credential?.url);
      if (!downloadPrefix) continue;

      const zipTree = await getZipTree(downloadPrefix);
      const files = collectPuzzleFiles(zipTree);
      if (files.length === 0) continue;

      const workMeta = await getWorkMeta(workNo).catch((err) => {
        origConsole.warn("[puzzle] Failed to fetch work metadata", err);
        return null;
      });
      const zipFileName = makePuzzleSaveName(workNo, workMeta);

      if (!isSameWork(workNo)) return;

      resolve({
        method: "puzzle",
        data: {
          urls: files,
          zipFileName,
          download: () => downloadPuzzleImagesToZip(downloadPrefix, files, `${zipFileName}.zip`),
        },
      });
      return;
    } catch (err) {
      origConsole.debug("[puzzle] Detection attempt failed", err);
    }
  }
}

function isSameWork(workNo) {
  return extractDlsiteId(unsafeWindow.location.href) === workNo;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getDownloadCredential(workNo) {
  const url = new URL("https://play.dl.dlsite.com/api/download/sign/cookie");
  url.searchParams.set("workno", workNo);

  const response = await pageFetch(url.href, {
    method: "GET",
    credentials: "include",
    referrer: "https://play.dlsite.com/",
    headers: {
      Accept: "*/*",
    },
  });

  if (!response.ok) {
    throw new Error(`download credential failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

async function getZipTree(downloadPrefix) {
  const response = await pageFetch(`${downloadPrefix}ziptree.json`, {
    method: "GET",
    credentials: "include",
    referrer: "https://play.dlsite.com/",
    headers: {
      Accept: "application/json,*/*",
    },
  });

  if (!response.ok) {
    throw new Error(`ziptree download failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

async function getWorkMeta(workNo) {
  const origins = Array.from(
    new Set([unsafeWindow.location.origin, "https://play.dlsite.com"])
  );

  for (const origin of origins) {
    const response = await pageFetch(`${origin}/api/work/${workNo}`, {
      method: "GET",
      credentials: "include",
      referrer: `${origin}/`,
      headers: {
        Accept: "application/json,*/*",
      },
    }).catch(() => null);

    if (response?.ok) return response.json();
  }

  return null;
}

function pageFetch(...args) {
  return (unsafeWindow.fetch || fetch).apply(unsafeWindow, args);
}

function normalizeDownloadPrefix(url) {
  if (typeof url !== "string" || url.length === 0) return null;
  return url.endsWith("/") ? url : `${url}/`;
}

function collectPuzzleFiles(zipTree) {
  const result = [];
  const playfile = zipTree?.playfile || {};

  const travel = (fileObj, path = "") => {
    if (!fileObj || typeof fileObj !== "object") return;

    if (fileObj.type === "folder") {
      const folderPath = fileObj.path || joinPath(path, fileObj.name);
      (fileObj.children || []).forEach((child) => travel(child, folderPath));
      return;
    }

    if (fileObj.type !== "file" || fileObj.hashname?.toLowerCase().endsWith(".pdf")) {
      return;
    }

    const optimized = normalizeOptimized(playfile[fileObj.hashname]?.image?.optimized);
    if (!optimized) return;

    result.push({
      filename: normalizeZipPath(joinPath(path, fileObj.name)),
      optimized,
    });
  };

  (zipTree?.tree || []).forEach((fileObj) => travel(fileObj));
  return result;
}

function normalizeOptimized(optimized) {
  const width = Number(optimized?.width);
  const height = Number(optimized?.height);

  if (!optimized?.name || !Number.isFinite(width) || !Number.isFinite(height)) {
    return null;
  }

  return {
    ...optimized,
    width,
    height,
  };
}

function joinPath(path, name) {
  return [path, name].filter(Boolean).join("/");
}

function normalizeZipPath(path) {
  const safeParts = String(path || "image")
    .replace(/\\/g, "/")
    .split("/")
    .filter((part) => part && part !== "." && part !== "..")
    .map((part) => part.replace(/[<>:"|?*\x00-\x1f]/g, "_"));

  return safeParts.join("/") || "image";
}

function makePuzzleSaveName(workNo, workMeta) {
  const title = pickLocalized(workMeta?.name) || workNo;
  const maker = pickLocalized(workMeta?.maker?.name);
  const baseName = maker ? `[${workNo}] (${maker}) ${title}` : `[${workNo}] ${title}`;
  return sanitizeFileName(baseName);
}

function pickLocalized(value) {
  if (!value) return "";
  if (typeof value === "string") return value;

  return (
    value.ja_JP ||
    value.en_US ||
    value.zh_CN ||
    value.zh_TW ||
    Object.values(value).find((item) => typeof item === "string") ||
    ""
  );
}

function sanitizeFileName(name) {
  return String(name || "DLsite Play Download")
    .replace(/[\\/:*?"<>|]/g, "_")
    .replace(/\s+/g, " ")
    .trim();
}

function getDecryptedImageData(optimized) {
  const cropCount = {
    w: Math.ceil(optimized.width / PUZZLE_BLOCK_SIZE),
    h: Math.ceil(optimized.height / PUZZLE_BLOCK_SIZE),
  };
  const seed = parseInt(optimized.name.substring(5, 12), 16);

  if (!Number.isFinite(seed)) {
    throw new Error(`invalid puzzle seed: ${optimized.name}`);
  }

  const coordinates = shuffleWithMersenneTwister(
    seed,
    [...Array(cropCount.w * cropCount.h).keys()]
  ).map((value, index) => ({
    sx: PUZZLE_BLOCK_SIZE * modulo(index, cropCount.w),
    sy: PUZZLE_BLOCK_SIZE * divide(index, cropCount.w),
    dx: PUZZLE_BLOCK_SIZE * modulo(value, cropCount.w),
    dy: PUZZLE_BLOCK_SIZE * divide(value, cropCount.w),
  }));

  return {
    sourceCropSize: PUZZLE_BLOCK_SIZE,
    cropCount,
    coordinates,
  };
}

function shuffleWithMersenneTwister(seed, values) {
  const random = new MersenneTwister(seed);

  for (let index = values.length - 1; index > 0; index--) {
    const swapIndex = Math.floor(random.random() * (index + 1));
    [values[index], values[swapIndex]] = [values[swapIndex], values[index]];
  }

  return values;
}

function modulo(value, divisor) {
  return value >= divisor ? value % divisor : value;
}

function divide(value, divisor) {
  return value >= divisor ? Math.floor(value / divisor) : 0;
}

async function downloadPuzzleImagesToZip(downloadPrefix, files, outputZip, concurrency = 3) {
  const zipFiles = {};
  let successCount = 0;
  let failCount = 0;

  const runTask = async (file, index) => {
    try {
      const entryName = replaceExtension(file.filename, ".png");
      origConsole.log(`[puzzle] Downloading ${entryName}`);
      unsafeWindow.add_log?.(`Downloading: ${index + 1}/${files.length}`);

      const image = await restorePuzzleImage(downloadPrefix, file);
      addUniqueZipFile(zipFiles, entryName, image);

      successCount++;
      unsafeWindow.add_log?.(`Done: ${entryName}`);
      return { success: true, name: entryName };
    } catch (err) {
      failCount++;
      origConsole.error("[puzzle] Failed to process image", file, err);
      unsafeWindow.add_log?.(`Failed: ${file.filename} (${err.message})`);
      return { success: false, name: file.filename, error: err.message };
    }
  };

  await runWithConcurrency(files, concurrency, runTask);

  if (Object.keys(zipFiles).length === 0) {
    throw new Error("all puzzle images failed, cannot create ZIP");
  }

  return new Promise((resolve, reject) => {
    zip(zipFiles, (err, zipped) => {
      if (err) {
        origConsole.error("[puzzle] ZIP failed", err);
        reject(err);
        return;
      }

      const blob = new Blob([zipped], { type: "application/zip" });
      const blobUrl = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = blobUrl;
      anchor.download = outputZip;

      const summary = `Completed: ${successCount} success, ${failCount} failed -> ${outputZip}`;
      origConsole.log(`[puzzle] ${summary}`);
      unsafeWindow.add_log?.(summary);

      resolve({
        save: () => {
          anchor.click();
          setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
        },
        successCount,
        failCount,
        blobUrl,
      });
    });
  });
}

async function runWithConcurrency(items, maxConcurrent, runTask) {
  const results = [];
  const executing = new Set();

  for (let index = 0; index < items.length; index++) {
    if (executing.size >= maxConcurrent) {
      await Promise.race(executing);
    }

    const taskPromise = runTask(items[index], index).finally(() => {
      executing.delete(taskPromise);
    });

    executing.add(taskPromise);
    results.push(taskPromise);
  }

  return Promise.allSettled(results);
}

async function restorePuzzleImage(downloadPrefix, { optimized }) {
  const response = await pageFetch(`${downloadPrefix}optimized/${optimized.name}`, {
    method: "GET",
    credentials: "include",
    referrer: "https://play.dlsite.com/",
    headers: {
      Accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
    },
  });

  if (!response.ok) {
    throw new Error(`image download failed: ${response.status} ${response.statusText}`);
  }

  const blob = await response.blob();
  const img = await loadImage(blob);
  const canvas = document.createElement("canvas");
  canvas.width = optimized.width;
  canvas.height = optimized.height;

  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("failed to create canvas context");

  const { sourceCropSize, cropCount, coordinates } = getDecryptedImageData(optimized);
  const overflow = {
    w: Math.max(0, img.width - optimized.width),
    h: Math.max(0, img.height - optimized.height),
  };

  for (const coordinate of coordinates) {
    const width =
      coordinate.dx + sourceCropSize === sourceCropSize * cropCount.w
        ? sourceCropSize - overflow.w
        : sourceCropSize;
    const height =
      coordinate.dy + sourceCropSize === sourceCropSize * cropCount.h
        ? sourceCropSize - overflow.h
        : sourceCropSize;

    if (width <= 0 || height <= 0) continue;

    ctx.drawImage(
      img,
      coordinate.sx,
      coordinate.sy,
      width,
      height,
      coordinate.dx,
      coordinate.dy,
      width,
      height
    );
  }

  const pngBlob = await canvasToBlob(canvas);
  return new Uint8Array(await pngBlob.arrayBuffer());
}

function loadImage(blob) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const objectUrl = URL.createObjectURL(blob);

    img.onload = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("failed to decode puzzle image"));
    };
    img.src = objectUrl;
  });
}

function canvasToBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("failed to encode restored image"));
    }, "image/png");
  });
}

function replaceExtension(filename, ext) {
  const slashIndex = filename.lastIndexOf("/");
  const dotIndex = filename.lastIndexOf(".");

  if (dotIndex > slashIndex) {
    return `${filename.slice(0, dotIndex)}${ext}`;
  }

  return `${filename}${ext}`;
}

function addUniqueZipFile(zipFiles, filename, data) {
  let name = filename;
  let count = 2;

  while (zipFiles[name]) {
    name = appendSuffix(filename, `_${count}`);
    count++;
  }

  zipFiles[name] = data;
}

function appendSuffix(filename, suffix) {
  const slashIndex = filename.lastIndexOf("/");
  const dotIndex = filename.lastIndexOf(".");

  if (dotIndex > slashIndex) {
    return `${filename.slice(0, dotIndex)}${suffix}${filename.slice(dotIndex)}`;
  }

  return `${filename}${suffix}`;
}

class MersenneTwister {
  constructor(seed) {
    this.mt = new Array(624);
    this.index = 624;
    this.init(seed >>> 0);
  }

  init(seed) {
    this.mt[0] = seed >>> 0;

    for (let index = 1; index < 624; index++) {
      this.mt[index] =
        (Math.imul(1812433253, this.mt[index - 1] ^ (this.mt[index - 1] >>> 30)) +
          index) >>>
        0;
    }
  }

  randomInt() {
    if (this.index >= 624) {
      this.twist();
    }

    let value = this.mt[this.index++];
    value ^= value >>> 11;
    value ^= (value << 7) & 0x9d2c5680;
    value ^= (value << 15) & 0xefc60000;
    value ^= value >>> 18;

    return value >>> 0;
  }

  random() {
    return this.randomInt() * (1.0 / 4294967296.0);
  }

  twist() {
    for (let index = 0; index < 624; index++) {
      const value = (this.mt[index] & 0x80000000) + (this.mt[(index + 1) % 624] & 0x7fffffff);
      let next = value >>> 1;

      if (value % 2 !== 0) {
        next ^= 0x9908b0df;
      }

      this.mt[index] = this.mt[(index + 397) % 624] ^ next;
    }

    this.index = 0;
  }
}
