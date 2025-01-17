// ==UserScript==
// @name         DLsite Play Downloader
// @namespace    https://github.com/cpuopt/DLsite-Play-Downloader
// @version      1.7.1
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
// @supportURL   https://github.com/cpuopt/DLsite-Play-Downloader/issues
// @downloadURL https://update.greasyfork.org/scripts/480281/DLsite%20Play%20Downloader.user.js
// @updateURL https://update.greasyfork.org/scripts/480281/DLsite%20Play%20Downloader.meta.js
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
    .jpeg-button-down{
    margin-left: auto;
    border: none;
    background-color: #007aff;
    color: white;
    padding-inline: 0.6rem;
    z-index: 2;
    font-weight: bolder;
    transition: background-color .5s;
        }
    .jpeg-button-down:hover{
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
                let artwork = document.querySelector("ol[class^='_tree_'] > li[class^='_item_']:has(svg)");
                let jpegs = document.querySelectorAll("ol[class^='_tree_'] > li[class^='_item_']:has(img)");
                console.debug("触发监视器", artwork, jpegs);
                if (artwork != null && artwork.querySelector("button") == null) {
                    self.haveArtwork(artwork);
                }
                if (jpegs.length > 0 && document.querySelector("div[class^='_worktree_'] ul").querySelector("button") == null) {
                    self.haveJpegs(jpegs);
                }
            });
        }
        start() {
            const illustsDivNode = document.querySelector("body");
            console.debug(illustsDivNode);
            this.observer.observe(illustsDivNode, {
                attributes: false,
                childList: true,
                subtree: true,
            });
            console.debug("监视器启动");
        }
        stop() {
            this.observer.disconnect();
            console.debug("监视器停止");
        }
        haveArtwork(artwork) {
            this.stop();
            let button = new ArtworkDownloadButton("button-down", artwork);
            if (pluginPanel == undefined) {
                mutationob.start();
            }
        }
        haveJpegs(jpegs) {
            this.stop();
            let button = new JpegsDownloadButton("jpeg-button-down", document.querySelector("div[class^='_worktree_'] ul"));
            if (pluginPanel == undefined) {
                mutationob.start();
            }
        }
    }

    // fetch拦截器 用于截获xml文件url
    class FetchInterceptor {
        static originalFetch = unsafeWindow.fetch;

        static intercept() {
            const o = unsafeWindow.fetch;
            unsafeWindow.fetch = (...args) => {
                return new Promise((resolve, reject) => {
                    let [resource, config] = args;
                    // request interceptor starts
                    console.log(resource, config);

                    if (/https:\/\/play.dl.dlsite.com\/csr\/api\/diazepam_hybrid.php\?mode=7&file=face.xml&reqtype=0&vm=\d&param=.*&time=\d+/.test(resource)) {
                        FetchInterceptor.stop();
                        GM_setValue("URLStyle", resource);
                        console.debug(`成功获取到图片链接格式`, resource);
                        GM_setValue("download", false);
                        window.close();
                    } else {
                        console.debug("图片链接格式不匹配");
                        GM_setValue("download", false);

                        // window.location.reload();
                    }

                    // request interceptor ends

                    o(...args).then((response) => {
                        console.log(response);

                        resolve(response);
                    });

                    // response interceptor here
                });
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
                    const width = parseInt(doc.evaluate("//StepRect/Width", doc).iterateNext().textContent);
                    const height = parseInt(doc.evaluate("//StepRect/Height", doc).iterateNext().textContent);
                    let vector = new Array(mateix.length);
                    mateix.forEach((num, index) => {
                        vector[parseInt(num)] = index;
                    });
                    console.debug(index, mateix, vector);
                    let image = await binResponse.blob();

                    self.imagePuzzle({
                        index: index,
                        vector: vector,
                        blob: image,
                        TocTitle: null,
                        size: { width: width, height: height },
                    });
                }
            });
        }
        imagePuzzle({ index, vector, blob, TocTitle, size }) {
            let self = this;
            let canvas = document.createElement("canvas");
            canvas.width = size.width;
            canvas.height = size.height;
            let HorBlock = this.HorBlock;
            let VerBlock = this.VerBlock;
            let sourceW = Math.trunc(size.width / (this.HorBlock * 8)) * 8;
            let sourceH = Math.trunc(size.height / (this.VerBlock * 8)) * 8;
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
                        self.outputBlobs.push({
                            index: index,
                            blob: blob,
                            TocTitle: null,
                        });
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
    class ArtworkDownloadButton {
        button;
        constructor(className, father) {
            let button = document.createElement("button");
            button.className = className;
            button.innerText = "使用脚本下载";
            let Title = father.querySelector("div[class^='_text_'] > p[class*='_titleMedium_']").innerText;
            let Author = document.querySelector("div[class^='_contentMain_'] > p[class^='_text_'][class*='_onSurface_']").innerText.replace("/", " ");
            let Maker = document.querySelector("div[class^='_contentMain_'] > p[class^='_text_'][class*='_onSurfacePrimary_'] > a[class^='_link_']").innerText.replace("/", " ");
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
    class JpegsDownloadButton {
        button;
        constructor(className, father) {
            let button = document.createElement("button");
            button.className = className;
            button.innerText = "使用脚本下载";
            let Title = document.querySelector("div[class^='_info_'] > div[class*='_contentMain_'] > :nth-child(1)").innerText;
            let Author = document.querySelector("div[class^='_info_'] > div[class*='_contentMain_'] > :nth-child(2)").innerText.replace("/", " ");
            let Maker = document.querySelector("div[class^='_info_'] > div[class*='_contentMain_'] > :nth-child(3)").innerText.replace("/", " ");
            button.addEventListener("click", async (e) => {
                // 显示插件面板
                pluginPanel = new PluginPanel();
                mutationob.stop();

                console.debug("filename:\n", `[${Author}] ${Title}`);
                pluginPanel.addLog(`获取到标题：<b>${Title}</b>`);
                pluginPanel.addLog(`获取到作者：<b>${Author}</b>`);
                pluginPanel.addLog(`获取到出版商：<b>${Maker}</b>`);
                e.stopPropagation(); // 阻止冒泡

                const { url: downloadPrefix, cookies } = await getDownloadCredential();
                const [mangaName, downloadUrls] = await Promise.all([getMangaName(), getDownloadUrls(downloadPrefix)]);
                const downloadResults = await Promise.all(downloadUrls.map((value) => imagePuzzle(downloadPrefix, value)));

                save(mangaName, downloadResults);
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
        destroy() {
            const element = document.querySelector("div.plugin-panel");
            if (element) {
                document.body.removeChild(element);
            }
        }
    }

    if (!window.location.href.startsWith("https://play.dlsite.com/csr/")) {
        // 非漫画阅读器页面 再启动监视器
        mutationob = new MutationOb();
        mutationob.start();
        GM_deleteValue("URLStyle");
        // 加载StreamSaver和zip-stream
        let scripts = ["https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.6.1/cropper.min.js", "https://cdn.jsdelivr.net/npm/streamsaver@2.0.3/StreamSaver.min.js", "https://jimmywarting.github.io/StreamSaver.js/examples/zip-stream.js", "https://unpkg.com/mersenne-twister@1.1.0/src/mersenne-twister.js"];
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
                    pluginPanel.destroy();
                }
                setTimeout(() => {
                    mutationob.start();
                }, 100);
            });
        }
    }
    if (window.location.href.startsWith("https://play.dlsite.com/csr/") && GM_getValue("download")) {
        // 当前位于漫画阅读器
        console.debug("当前位于漫画阅读器", "下载状态：", GM_getValue("download"));

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
    async function getDownloadCredential() {
        const response = await fetch(`https://play.dl.dlsite.com/api/download/sign/cookie?workno=${location.href.match(/\/work\/(\w+)\//)[1]}`, {
            method: "GET",
            headers: {
                Accept: "*/*",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "zh-CN,zh;q=0.9",
            },
            referrer: "https://play.dlsite.com/",
            credentials: "include",
        });
        return await response.json();
    }

    async function getDownloadUrls(prefix) {
        const response = await fetch(`${prefix}ziptree.json`, {
            referrer: "https://play.dlsite.com/",
            credentials: "include",
        });
        const zipTree = await response.json();

        const result = [];

        const travel = (fileObj, index, path) => {
            if (fileObj.type === "folder") {
                fileObj.children.forEach((child, index) => travel(child, index, fileObj.path));
            }
            if (fileObj.type === "file" && !fileObj.hashname.endsWith(".pdf")) {
                result.push({
                    filename: `${path ? `${path}/` : ""}${fileObj.name}`,
                    optimized: zipTree.playfile[fileObj.hashname].image.optimized,
                });
            }
        };
        zipTree.tree.forEach(travel);
        // console.log(result);
        return result;
    }

    function getDecryptedImageData(optimized) {
        const qv = (t, s) => {
                // const MersenneTwister = unsafeWindow.module.exports;
                // const MersenneTwister = window.module.exports;
                const n = new MersenneTwister(t);
                for (let r = s.length - 1; r > 0; r--) {
                    const o = Math.floor(n.random() * (r + 1));
                    [s[r], s[o]] = [s[o], s[r]];
                }
                return s;
            },
            Ir = (t, s) => (t >= s ? t % s : t),
            Lr = (t, s) => (t >= s ? Math.floor(t / s) : 0);
        const n = {
                w: Math.ceil(optimized.width / 128),
                h: Math.ceil(optimized.height / 128),
            },
            r = parseInt(optimized.name.substring(5, 12), 16),
            i = qv(r, [...Array(n.w * n.h).keys()]).map((value, index) => ({
                sx: 128 * Ir(index, n.w),
                sy: 128 * Lr(index, n.w),
                dx: 128 * Ir(value, n.w),
                dy: 128 * Lr(value, n.w),
            }));
        return { sourceCropSize: 128, cropCount: n, coordinates: i };
    }

    async function imagePuzzle(downloadPrefix, { filename, optimized }) {
        let canvas = document.createElement("canvas");
        canvas.width = optimized.width;
        canvas.height = optimized.height;
        let ctx = canvas.getContext("2d");
        let binResponse = await fetch(`${downloadPrefix}optimized/${optimized.name}`, {
            method: "GET",
            headers: {
                Accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "zh-CN,zh;q=0.9",
                "Sec-Fetch-Dest": "image",
            },
            referrer: "https://play.dlsite.com/",
            credentials: "include",
        });
        let blob = await binResponse.blob();
        const img = new Image();
        img.src = URL.createObjectURL(blob);
        return new Promise((resolve) => {
            img.onload = function () {
                const { sourceCropSize: sourceCropSize, cropCount: cropCount, coordinates: coordinates } = getDecryptedImageData(optimized),
                    // g = isSpread && m === 1 ? t[0].width : 0,
                    g = 0,
                    // y = t[isSpread && m === 0 ? 1 : 0].height,
                    // w = isSpread && optimized.height < y ? Math.round((y - optimized.height) / 2) : 0,
                    w = 0,
                    x = {
                        w: img.width - optimized.width,
                        h: img.height - optimized.height,
                    };
                for (const coordinate of coordinates) {
                    const k = coordinate.dx + sourceCropSize === sourceCropSize * cropCount.w ? sourceCropSize - x.w : sourceCropSize,
                        O = coordinate.dy + sourceCropSize === sourceCropSize * cropCount.h ? sourceCropSize - x.h : sourceCropSize;
                    ctx.drawImage(img, coordinate.sx, coordinate.sy, k, O, coordinate.dx + g, coordinate.dy + w, k, O);
                }

                canvas.toBlob(function (blob) {
                    resolve({ filename, blob });
                });
            };
        });
    }
    function save(mangaName, blobs) {
        const fileStream = streamSaver.createWriteStream(`${mangaName}.zip`);

        const readableZipStream = new ZIP({
            start(ctrl) {
                blobs.forEach(({ blob, filename }, arrayIndex) => {
                    let file = {
                        // name: `${mangaName}/${(index + 1).toString().padStart(4, "0")}.jpg`,
                        // name: `${(index + 1).toString().padStart(4, "0")}.png`,
                        name: `${filename.split(".")[0]}.png`,
                        stream: () => blob.stream(),
                    };
                    ctrl.enqueue(file);
                });
                ctrl.close();
            },
        });

        // more optimized
        if (window.WritableStream && readableZipStream.pipeTo) {
            return readableZipStream.pipeTo(fileStream).then(() => {
                console.debug("done writing");
                pluginPanel.addLog("<b>下载已完成</b>");
            });
        }

        // less optimized
        const writer = fileStream.getWriter();
        const reader = readableZipStream.getReader();
        const pump = () => reader.read().then((res) => (res.done ? writer.close() : writer.write(res.value).then(pump)));

        pump();
    }

    async function getMangaName() {
        const response = await fetch(`https://play.dlsite.com/api/work/${location.href.match(/\/work\/(\w+)\//)[1]}`, {
            referrer: "https://play.dlsite.com/",
            credentials: "include",
        });
        const result = await response.json();
        return result.name["ja_JP"];
    }
})();
