import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

createApp(App).mount(
  (() => {
    const app = document.createElement("div");
    app.className = "dlsite-play-downloader-vue";
    document.body.append(app);
    return app;
  })()
);
