<script setup>
import { hookFetchPuzzle } from "./dlsiteplay-enc-detector/puzzle";
import { hookXorEnc } from "./dlsiteplay-enc-detector/xor";
import { origConsole } from "./origConsole";

let attaching = false;
let past_pathname = null;

/***
 * 开始检测加密方式
 */
const attach_enc_method = () => {
  if (attaching) return;
  attaching = true;

  Promise.race([hookXorEnc()])
    .then(({ method, data }) => {
      origConsole.log("检测到加密方式：", method, data);
    })
    .catch((e) => {
      origConsole.error(e);
    })
    .finally(() => {
      attaching = false;
    });
};

const locationUpdated = () => {
  if (past_pathname != window.location.pathname) {
    pathnameUpdated();
  }
};

/**
 * 从形如
 * https://play.dlsite.com/work/BJ366185/viewer
 * 中提取BJ366185
 * @param url
 */
function extractDlsiteId(url) {
  return url.match(/work\/([A-Z\d]+)\//)?.[1] ?? null;
}

const pathnameUpdated = () => {
  console.log("页面已切换");
  const no = extractDlsiteId(window.location.href);
  if (no) {
    origConsole.log(no);
    attach_enc_method();
  }
};

pathnameUpdated();

const _wr = function (type) {
  const orig = history[type];
  return function () {
    const rv = orig.apply(this, arguments);
    const e = new Event(type);
    e.arguments = arguments;
    window.dispatchEvent(e);
    return rv;
  };
};
history.pushState = _wr("pushState");
window.addEventListener("pushState", function (e) {
  locationUpdated();
});
</script>

<template></template>

<style scoped></style>
