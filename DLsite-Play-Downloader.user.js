// ==UserScript==
// @name         DLsite Play Downloader
// @namespace    https://github.com/cpuopt/DLsite-Play-Downloader
// @version      1.2
// @description  在浏览器完成DLsite Play漫画的下载、拼图和保存
// @author       cpufan
// @match        https://play.dlsite.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dlsite.com
// @license      MIT
// @grant        window.onurlchange
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        window.close
// @grant        GM_addValueChangeListener
// @grant        GM_removeValueChangeListener
// @updateURL    https://github.com/cpuopt/DLsite-Play-Downloader/raw/main/DLsite-Play-Downloader.user.js
// @downloadURL  https://github.com/cpuopt/DLsite-Play-Downloader/raw/main/DLsite-Play-Downloader.user.js
// @supportURL   https://github.com/cpuopt/DLsite-Play-Downloader/issues
// ==/UserScript==

(function () {
    "use strict";

    GM_addStyle(`
    .button-down{
        border: none;
        background-color: #007aff;
        color: white;
        padding-inline: 0.6rem;
        position: absolute;
        right: 0;
        height: 100%;
        z-index: 2;
        font-weight: bolder;
        transition: background-color .5s;
    }
    .button-down:hover{
        background-color: #000000;
    }
    `);
    var mutationob;
    var pluginPanel;
    var dlsiteMangaDownloader;
    class MutationOb {
        observer;

        constructor() {
            let self = this;
            this.observer = new MutationObserver(() => {
                let artwork = document.querySelector("li[class^='WorkTreeList_item']");
                console.debug("触发监视器", artwork);
                if (artwork != null && artwork.querySelector("button") == null) {
                    self.haveArtwork(artwork);
                }
            });
        }
        start() {
            const illustsDivNode = document.querySelector("body");
            console.debug(illustsDivNode);
            this.observer.observe(illustsDivNode, { attributes: false, childList: true, subtree: true });
            console.debug("监视器启动");
        }
        stop() {
            this.observer.disconnect();
            console.debug("监视器停止");
        }
        haveArtwork(artwork) {
            this.stop();
            let button = new DownloadButton("button-down", artwork);
            if (pluginPanel == undefined) {
                mutationob.start();
            }
        }
    }

    // fetch拦截器 用于截获xml文件url
    class FetchInterceptor {
        static originalFetch = unsafeWindow.fetch;

        static intercept() {
            unsafeWindow.fetch = async (...args) => {
                let [resource, config] = args;

                // request interceptor starts

                if (/https:\/\/play.dl.dlsite.com\/csr\/api\/diazepam_hybrid.php\?mode=7&file=face.xml&reqtype=0&vm=\d&param=.*&time=\d+/.test(resource)) {
                    FetchInterceptor.stop();
                    GM_setValue("URLStyle", resource);
                    console.debug(`成功获取到图片链接格式`, resource);
                    window.close();
                } else {
                    console.debug("图片链接格式不匹配");
                }

                // request interceptor ends

                const response = await this.originalFetch(resource, config);
                if (!response.ok && response.status === 404) {
                    // 404 error handling
                    return Promise.reject(response);
                }
                // response interceptor here
                return response;
            };
        }

        static stop() {
            unsafeWindow.fetch = this.originalFetch;
        }
    }
    class DLsiteMangaDownloader {
        preffix;
        suffix;
        pageNum;
        faceScramble;
        HorBlock;
        VerBlock;
        Width;
        Height;
        urls;
        filename;
        outputBlobs = new Array();

        constructor(URLStyle, filename) {
            this.filename = filename;
            // 解析url前缀和后缀
            let urlExample = URLStyle;
            let modeIndex = urlExample.search(/\?mode/);
            let reqtypeIndex = urlExample.search(/&reqtype/);
            this.preffix = urlExample.substring(0, modeIndex);
            this.suffix = urlExample.substring(reqtypeIndex);
            pluginPanel.addLog("解析链接完成");
        }

        buildUrls(page) {
            let urls = new Array();

            for (let i = 0; i < page; i++) {
                let xml = `${this.preffix}?mode=8&file=${i.toString().padStart(4, "0")}.xml${this.suffix}`;
                let bin = `${this.preffix}?mode=1&file=${i.toString().padStart(4, "0")}_0000.bin${this.suffix}`;
                urls.push({ xml, bin });
            }

            return urls;
        }

        async getFaceInfo() {
            const faceResponse = await fetch(`${this.preffix}?mode=7&file=face.xml${this.suffix}`, {
                method: "GET",
                headers: {
                    Accept: "*/*",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Accept-Language": "zh-CN,zh;q=0.9",
                },
                referrer: "https://play.dlsite.com/",
                credentials: "same-origin",
            });
            let doc = DLsiteMangaDownloader.parseText2Xml(await faceResponse.text());
            this.HorBlock = parseInt(doc.evaluate("//Scramble/Width", doc).iterateNext().textContent);
            this.VerBlock = parseInt(doc.evaluate("//Scramble/Height", doc).iterateNext().textContent);
            this.Width = parseInt(doc.evaluate("//ContentFrame/Width", doc).iterateNext().textContent);
            this.Height = parseInt(doc.evaluate("//ContentFrame/Height", doc).iterateNext().textContent);
            this.pageNum = parseInt(doc.evaluate("//TotalPage", doc).iterateNext().textContent);
        }

        // 解析xml响应为document
        static parseText2Xml(text) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(text, "application/xml");
            return doc;
        }

        async makeImages() {
            let self = this;
            await this.getFaceInfo();
            this.urls = this.buildUrls(this.pageNum);

            this.urls.forEach(async ({ xml, bin }, index) => {
                console.debug(`${index}\n${xml}\n${bin}`);
                let xmlResponse = await fetch(xml, {
                    method: "GET",
                    headers: {
                        Accept: "*/*",
                        "Accept-Encoding": "gzip, deflate, br",
                        "Accept-Language": "zh-CN,zh;q=0.9",
                    },
                    referrer: "https://play.dlsite.com/",
                    credentials: "same-origin",
                });

                let binResponse = await fetch(bin, {
                    method: "GET",
                    headers: {
                        Accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
                        "Accept-Encoding": "gzip, deflate, br",
                        "Accept-Language": "zh-CN,zh;q=0.9",
                        "Sec-Fetch-Dest": "image",
                    },
                    referrer: "https://play.dlsite.com/",
                    credentials: "same-origin",
                });

                if (xmlResponse.ok && binResponse.ok) {
                    let doc = DLsiteMangaDownloader.parseText2Xml(await xmlResponse.text());
                    let mateix = doc.evaluate("//Scramble", doc).iterateNext().textContent.split(",");

                    let vector = new Array(mateix.length);
                    mateix.forEach((num, index) => {
                        vector[parseInt(num)] = index;
                    });
                    console.debug(mateix, vector);
                    let image = await binResponse.blob();

                    self.imagePuzzle({ index: index, vector: vector, blob: image, TocTitle: null });
                }
            });
        }
        imagePuzzle({ index, vector, blob, TocTitle }) {
            let self = this;
            let canvas = document.createElement("canvas");
            canvas.width = this.Width;
            canvas.height = this.Height;
            let HorBlock = this.HorBlock;
            let VerBlock = this.VerBlock;
            let sourceW = Math.trunc(this.Width / (this.HorBlock * 8)) * 8;
            let sourceH = Math.trunc(this.Height / (this.VerBlock * 8)) * 8;
            let ctx = canvas.getContext("2d");
            const img = new Image();
            img.src = URL.createObjectURL(blob);
            img.onload = function () {
                ctx.drawImage(img, 0, 0);

                for (let [index, item] of vector.entries()) {
                    let sourceX = sourceW * (index % HorBlock);
                    let sourceY = sourceH * Math.trunc(index / VerBlock);
                    let x = sourceW * (item % HorBlock);
                    let y = sourceH * Math.trunc(item / VerBlock);

                    ctx.drawImage(img, sourceX, sourceY, sourceW, sourceH, x, y, sourceW, sourceH);
                }
                canvas.toBlob(
                    function (blob) {
                        self.outputBlobs.push({ index: index, blob: blob, TocTitle: null });
                        pluginPanel.addLog(`已处理完成：${self.outputBlobs.length}/${self.urls.length}`);

                        if (self.outputBlobs.length == self.urls.length) {
                            // 所有图片已经处理完成
                            self.save(self.filename);
                            pluginPanel.addLog("<b>下载已完成</b>");
                            pluginPanel.addLog("提示：<b>为最大限度保持画质，图片以PNG储存</b>");
                            pluginPanel.addLog("提示：<b>返回或切换页面即可关闭此窗口</b>");
                            mutationob.start();
                        }
                    }
                    // document.querySelector("#imgType").value,
                    // 1.0
                );
            };

            // document.body.appendChild(canvas);
        }
        save(mangaName) {
            let self = this;
            const fileStream = streamSaver.createWriteStream(`${mangaName}.zip`);

            const readableZipStream = new ZIP({
                start(ctrl) {
                    self.outputBlobs.forEach(({ index, blob, TocTitle }, _) => {
                        let file = {
                            // name: `${mangaName}/${(index + 1).toString().padStart(4, "0")}.jpg`,
                            name: `${(index + 1).toString().padStart(4, "0")}.png`,
                            stream: () => blob.stream(),
                        };
                        ctrl.enqueue(file);
                    });
                    ctrl.close();
                },
            });

            // more optimized
            if (window.WritableStream && readableZipStream.pipeTo) {
                return readableZipStream.pipeTo(fileStream).then(() => console.debug("done writing"));
            }

            // less optimized
            const writer = fileStream.getWriter();
            const reader = readableZipStream.getReader();
            const pump = () => reader.read().then((res) => (res.done ? writer.close() : writer.write(res.value).then(pump)));

            pump();
        }
    }
    class DownloadButton {
        button;
        constructor(className, father) {
            let button = document.createElement("button");
            button.className = className;
            button.innerText = "使用脚本下载";
            let Title = father.querySelector("div[class^='WorkTreeList_text'] > p[class^='WorkTreeList_filename']").innerText;
            let Author = document.querySelector("p[class^='WorkInfo_author']").innerText.replace("/", " ");
            let Maker = document.querySelector("p[class^='WorkInfo_maker'] > a").innerText.replace("/", " ");
            button.addEventListener("click", (e) => {
                // 显示插件面板
                pluginPanel = new PluginPanel();
                mutationob.stop();

                GM_setValue("download", true);
                GM_setValue("filename", `[${Author}] ${Title}`);
                console.debug("filename:\n", `[${Author}] ${Title}`);
                pluginPanel.addLog(`获取到标题：<b>${Title}</b>`);
                pluginPanel.addLog(`获取到作者：<b>${Author}</b>`);
                pluginPanel.addLog(`获取到出版商：<b>${Maker}</b>`);
                e.stopPropagation(); // 阻止冒泡
                GM_deleteValue("URLStyle");

                // 事件监听器获取URLStyle
                var URLStylelistener = GM_addValueChangeListener("URLStyle", function (key, oldValue, newValue, remote) {
                    console.debug(key + ":\n" + oldValue + "=>" + newValue);
                    pluginPanel.addLog(`获取到URL格式：` + newValue);
                    dlsiteMangaDownloader = new DLsiteMangaDownloader(newValue, `[${Maker}] [${Author}] ${Title}`);
                    GM_removeValueChangeListener(URLStylelistener);
                    dlsiteMangaDownloader.makeImages();
                });

                pluginPanel.addLog("准备前往阅读器获取URL...");
                // 延迟两秒开启阅读器界面
                setTimeout(() => {
                    father.click();
                }, 2000);
            });
            father.appendChild(button);
            this.button = button;
        }
    }
    class PluginPanel {
        element;
        title;
        hr;
        log;

        constructor() {
            GM_addStyle(`
                .plugin-panel{
                    border: solid #007aff 2px;
                    border-radius: 1rem;
                    display: block;
                    box-sizing: border-box;
                    width: 50rem;
                    height: 30rem;
                    margin: 0 auto;
                    position: fixed;
                    background-color: white;
                    z-index: 5000;
                    margin-left: 50%;
                    margin-top: 50%;
                    top: -15rem;
                    left: -25rem;
                    padding-block: 1rem;
                    font-size: 1.6rem;
                    box-shadow: 5px 5px 10px #ccc;
                }
                .plugin-panel-title{
                    margin: 0 auto;
                    text-align: center;
                }
                .plugin-panel-hr{
                    margin-block: 0.2rem;
                }
                .plugin-panel-log{
                    margin-inline: 2rem;
                    margin-block: 0.5rem;
                    height: 10rem;
                    border: solid #000000a6 1.5px;
                    box-sizing: border-box;
                    font-size: 1.2rem;
                    padding: 0.5rem;
                    border-radius: 0.5rem;
                    overflow: auto;
                }
                ::-webkit-scrollbar {
                    display: none;
                  }
            `);
            let element = document.createElement("div");
            element.className = "plugin-panel";
            document.body.appendChild(element);
            let title = document.createElement("div");
            title.className = "plugin-panel-title";
            title.innerText = "DLsite Play Downloader";
            element.appendChild(title);
            let hr = document.createElement("hr");
            hr.className = "plugin-panel-hr";
            element.appendChild(hr);
            let log = document.createElement("div");
            log.className = "plugin-panel-log";
            element.appendChild(log);

            this.log = log;
            this.element = element;
        }
        addLog(text) {
            let oldHTML = this.log.innerHTML;
            this.log.innerHTML = oldHTML + `<p>${text}<p>`;
            this.log.scrollTop = this.log.scrollHeight;
        }
    }

    if (!window.location.href.startsWith("https://play.dlsite.com/csr/")) {
        // 非漫画阅读器页面 再启动监视器
        mutationob = new MutationOb();
        mutationob.start();
        GM_deleteValue("URLStyle");
        // 加载StreamSaver和zip-stream
        let scripts = ["https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.6.1/cropper.min.js", "https://cdn.jsdelivr.net/npm/streamsaver@2.0.3/StreamSaver.min.js", "https://jimmywarting.github.io/StreamSaver.js/examples/zip-stream.js"];
        scripts.forEach((url) => {
            let script = document.createElement("script");
            script.setAttribute("type", "text/javascript");
            script.src = url;
            document.documentElement.appendChild(script);
        });
        if (window.onurlchange === null) {
            // feature is supported
            window.addEventListener("urlchange", () => {
                mutationob.stop();
                if (pluginPanel != undefined && pluginPanel.element != undefined) {
                    pluginPanel.element.remove();
                }
                mutationob.start();
            });
        }
    }
    if (window.location.href.startsWith("https://play.dlsite.com/csr/") && GM_getValue("download")) {
        // 当前位于漫画阅读器

        console.debug("当前位于漫画阅读器", "下载状态：", GM_getValue("download"));
        GM_setValue("download", false);
        // 加载StreamSaver和zip-stream
        let scripts = ["https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.6.1/cropper.min.js", "https://cdn.jsdelivr.net/npm/streamsaver@2.0.3/StreamSaver.min.js", "https://jimmywarting.github.io/StreamSaver.js/examples/zip-stream.js"];
        scripts.forEach((url) => {
            let script = document.createElement("script");
            script.setAttribute("type", "text/javascript");
            script.src = url;
            document.documentElement.appendChild(script);
        });
        FetchInterceptor.intercept();
    }
})();
