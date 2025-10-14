import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import monkey, { cdn } from "vite-plugin-monkey";
import ElementPlus from "unplugin-element-plus/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ElementPlus({}),
    monkey({
      entry: "src/main.ts",
      userscript: {
        icon: "https://www.google.com/s2/favicons?sz=64&domain=dlsite.com",
        namespace: "https://github.com/cpuopt/DLsite-Play-Downloader",
        match: ["https://play.dlsite.com/*"],
        "run-at": "document-start",
        grant: ["unsafeWindow"],
        description: "在浏览器完成DLsite Play漫画的下载、拼图或解密和保存",
        author: "cpufan",
        license: "MIT",
        supportURL: "https://github.com/cpuopt/DLsite-Play-Downloader/issues",
      },
      build: {
        externalGlobals: {
          vue: cdn.jsdelivr("Vue", "dist/vue.global.prod.js"),
        },
      },
    }),
  ],
  server: {
    port: 3001, // 修改端口号
    strictPort: true, // 如果端口被占用则直接报错，而不是自动换一个
  },
});
