<template>
  <div
    class="plugin-area"
    :hide="panel_hide"
    @mouseover="panel_hide = false"
    @wheel.stop
  >
    <div class="title">DLsite-Play-Downloader-vue</div>
    <div class="button-area">
      <el-button
        v-if="!downloading && !download_fin"
        :loading="attaching"
        :disabled="!attached_seccess"
        :dark="false"
        color="var(--surface-on-surface-primary)"
        @click="start_download"
        style="color: white"
        >{{ attaching ? "检测加密方式中" : "开始下载" }}</el-button
      >
      <el-button
        v-else
        :loading="downloading"
        :disabled="!download_fin"
        :dark="false"
        color="var(--surface-on-surface-primary)"
        @click="save"
        style="color: white"
        >{{ downloading ? "下载中" : "保存压缩文件" }}</el-button
      >
    </div>

    <div class="log-area">
      <div class="log-line" v-for="log in log_list">
        {{ log }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ElButton } from "element-plus";
import { hookFetchPuzzle } from "./dlsiteplay-enc-detector/puzzle";
import { hookXorEnc } from "./dlsiteplay-enc-detector/xor";
import { origConsole } from "./origConsole";
import { extractDlsiteId } from "./utils";
import { onMounted, onUnmounted, ref } from "vue";
import { useLog } from "./log";

const attaching = ref(false);
const downloading = ref(false);
const download_fin = ref(false);

let past_pathname = null;
const panel_hide = ref(true);

const attached_seccess = ref(false);

const url_nums = ref(1);
const downloaded_nums = ref(0);

let download_func = null;
let save_func = null;

const { log_list, add_log } = useLog();

function start_download() {
  downloading.value = true;
  download_fin.value = false;

  download_func?.().then(({ save }) => {
    save_func = save;
    download_fin.value = true;
    downloading.value = false;
  });
}
function save() {
  save_func?.();
}
/***
 * 开始检测加密方式
 */
const attach_enc_method = () => {
  if (attaching.value) return;
  attaching.value = true;

  Promise.race([hookXorEnc()])
    .then(({ method, data }) => {
      add_log("检测到加密方式：" + method);
      origConsole.log("检测到加密方式：", method, data);
      if (method === "xor") {
        const { urls, key, zipFileName, download, onProgress } = data;
        add_log("检测作品页数：" + urls.length);
        url_nums.value = urls.length;
        downloaded_nums.value = 0;
        add_log("检测xor key：" + key);
        add_log("检测作品名称：" + zipFileName);
        attached_seccess.value = true;
        panel_hide.value = false;
        download_func = download;
      }
    })
    .catch((e) => {
      origConsole.error(e);
    })
    .finally(() => {
      attaching.value = false;
    });
};

const locationUpdated = () => {
  if (past_pathname != window.location.pathname) {
    pathnameUpdated();
  }
};

const pathnameUpdated = () => {
  add_log("页面已切换");
  origConsole.log("页面已切换");
  attaching.value = false;
  downloading.value = false;
  download_fin.value = false;
  panel_hide.value = true;
  attached_seccess.value = false;
  past_pathname = null;
  url_nums.value = 1;
  downloaded_nums.value = 0;
  download_func = null;
  save_func = null;

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

/**
 * @description 返回元素最接近body的父节点
 * @param {*} dom
 */
function findDeep2ndParentNode(dom) {
  if (dom && dom.parentNode && dom.parentNode.tagName != "BODY") {
    return findDeep2ndParentNode(dom.parentNode);
  } else {
    return dom;
  }
}

function bodyClickCallback(e) {
  const deep2ndParentNode = findDeep2ndParentNode(e.target);

  if (!deep2ndParentNode.getAttributeNames().includes("data-v-app")) {
    if (!panel_hide.value) {
      panel_hide.value = true;
    }
  }
}
onMounted(() => {
  document.body.addEventListener("click", bodyClickCallback, {
    capture: false,
    passive: false,
    once: false,
  });
});
onUnmounted(() => {
  document.body.removeEventListener("click", bodyClickCallback);
});
</script>

<style scoped>
.plugin-area {
  position: fixed;
  right: 0;
  top: 50%;
  padding: 1rem;
  transform: translateY(-50%);
  display: flex;
  row-gap: 1rem;
  flex-direction: column;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.6s ease-in-out;
}
.plugin-area[hide="true"] {
  transform: translateY(-50%) translateX(95%);
}
.title {
  width: 100%;
  text-align: center;
  color: var(--surface-on-surface-primary);
  font-weight: bold;
  user-select: none;
}
.button-area {
  display: flex;
  row-gap: 1rem;
  flex-direction: column;
}
.log-area {
  width: 200px;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  overflow: hidden;
  overflow-y: auto;
  flex-direction: column-reverse;
}
.log-line {
  line-break: anywhere;
}
</style>

<style></style>
