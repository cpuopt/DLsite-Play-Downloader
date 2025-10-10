<script setup>
import { hookFetchPuzzle } from "./dlsiteplay-enc-detector/puzzle";
import { hookXorEnc } from "./dlsiteplay-enc-detector/xor";
import { origConsole } from "./origConsole";

let attaching = false;
const attach_enc_method = () => {
  if (attaching) return;
  attaching = true;
  Promise.race([hookXorEnc(), hookFetchPuzzle()])
    .then(({ method, data }) => {
      origConsole.log(method, data);
    })
    .catch((e) => {
      origConsole.error(e);
    })
    .finally(() => {
      attaching = false;
    });
};

attach_enc_method();

let past_pathname = null;
const locationUpdated = () => {
  if (past_pathname != window.location.pathname) {
    pathnameUpdated();
  }
};

const pathnameUpdated = () => {
  console.log("页面已切换");
  attach_enc_method();
};

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
