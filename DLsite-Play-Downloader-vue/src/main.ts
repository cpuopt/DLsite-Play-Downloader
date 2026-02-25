import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";


function mountApp() {
  if (!document.body) {
    requestAnimationFrame(mountApp);
    return;
  }

  const container = document.createElement("div");
  container.className = "dlsite-play-downloader-vue";
  document.body.appendChild(container);

  createApp(App).mount(container);
}

mountApp();