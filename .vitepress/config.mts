import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "良月玖的博客",
  description: "心有所向，日复一日，必有精进",
  lastUpdated: true,
  // markdown: {
  //   toc: {
  //     level: [1, 2, 3],
  //   }
  // },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Blog", link: "/blog/20240125" },
      { text: "Snippets", link: "/snippets/html/contextmenu" },
      { text: "Note", link: "/note/markdown-examples" },
    ],

    sidebar: {
      "/blog/": [
        {
          text: "文章",
          collapsed: false,
          items: [
            { text: "Hello, World!", link: "/blog/20240125" },
            { text: "JavaScript的原型与原型链", link: "/blog/20240126" },
            { text: "JavaScript的浅拷贝与深拷贝", link: "/blog/20240129" },
            { text: "React中常用的Hook", link: "/blog/20240201" },
            { text: "从零实现pinia", link: "/blog/20240215" },
            { text: "Windows安装Docker Desktop并迁移", link: "/blog/20240216" },
          ],
        },
      ],
      "/snippets/": [
        {
          text: "代码",
          collapsed: false,
          items: [
            {
              text: "HTML",
              collapsed: true,
              items: [
                { text: "右键菜单", link: "/snippets/html/contextmenu" },
                { text: "iframe", link: "/snippets/html/iframe" },
                { text: "转义字符", link: "/snippets/html/escape" },
                { text: "增加焦点", link: "/snippets/html/tabindex" },
                { text: "网页自动刷新", link: "/snippets/html/refresh" },
                { text: "显示pdf文件", link: "/snippets/html/object" },
                { text: "两端对齐", link: "/snippets/html/justify" },
                { text: "import maps", link: "/snippets/html/importmaps" },
                { text: "import assert", link: "/snippets/html/import-assert" },
                { text: "动态加载script", link: "/snippets/html/load-script" },
                {
                  text: "允许input加载目录",
                  link: "/snippets/html/input-directory",
                },
              ],
            },
            {
              text: "JS",
              collapsed: true,
              items: [
                {
                  text: "获取当前日期和时间",
                  link: "/snippets/js/date-and-time",
                },
                { text: "比较时间", link: "/snippets/js/compare-time" },
                { text: "获取文件后缀", link: "/snippets/js/file-suffix" },
                { text: "修改文件路径", link: "/snippets/js/change-path" },
                { text: "创建文件流", link: "/snippets/js/file-blob" },
                { text: "文件上传", link: "/snippets/js/file-upload" },
                { text: "图片上传", link: "/snippets/js/image-upload" },
                { text: "文件下载", link: "/snippets/js/file-download" },
                { text: "读取文件", link: "/snippets/js/read-file" },
                { text: "迅雷下载", link: "/snippets/js/xunlei-download" },
                { text: "复制", link: "/snippets/js/clipboard" },
                { text: "视频截图", link: "/snippets/js/video-screenshot" },
                { text: "全屏/退出全屏", link: "/snippets/js/fullscreen" },
                { text: "store", link: "/snippets/js/store" },
                {
                  text: "触底加载",
                  link: "/snippets/js/reach-bottom-load-data",
                },
                {
                  text: "避免小数丢失精度",
                  link: "/snippets/js/exact-calculate",
                },
                { text: "正则匹配", link: "/snippets/js/regexp" },
                { text: "数组相关", link: "/snippets/js/array" },
                { text: "随机生成", link: "/snippets/js/random" },
                { text: "拖拽相关", link: "/snippets/js/drag-and-drop" },
                { text: "文档碎片", link: "/snippets/js/document-fragment" },
                { text: "数字逗号分隔", link: "/snippets/js/number-comma" },
                {
                  text: "HTML字符串转换为DOM",
                  link: "/snippets/js/html-string-to-dom",
                },
                {
                  text: "屏幕共享/视频录制",
                  link: "/snippets/js/record-screen",
                },
                { text: "朗读文字", link: "/snippets/js/speak-words" },
                { text: "接收媒体输入", link: "/snippets/js/connect-media" },
                { text: "跨源数据传输", link: "/snippets/js/postMessage" },
                { text: "加载字体", link: "/snippets/js/load-font" },
                { text: "代理", link: "/snippets/js/proxy" },
                { text: "unicode", link: "/snippets/js/unicode" },
                { text: "阻止a默认跳转", link: "/snippets/js/prevent-a-link" },
                { text: "select", link: "/snippets/js/select-element" },
                { text: "selection", link: "/snippets/js/selection" },
                { text: "input", link: "/snippets/js/input-element" },
                { text: "防抖", link: "/snippets/js/debounce" },
                { text: "节流", link: "/snippets/js/throttle" },
                { text: "深拷贝", link: "/snippets/js/deep-clone" },
                { text: "参数非空检测", link: "/snippets/js/parameter-check" },
                { text: "表单请求", link: "/snippets/js/form-request" },
                { text: "scroll", link: "/snippets/js/scroll" },
              ],
            },
            {
              text: "CSS",
              collapsed: true,
              items: [
                {
                  text: "排除第一个元素",
                  link: "/snippets/css/exclude-first-element",
                },
                {
                  text: "圆角",
                  link: "/snippets/css/border-radius",
                },
                {
                  text: "自定义图形",
                  link: "/snippets/css/custom-shape",
                },
                {
                  text: "禁止用户选择",
                  link: "/snippets/css/prevent-select",
                },
                {
                  text: "重置",
                  link: "/snippets/css/reset",
                },
                {
                  text: "文本样式",
                  link: "/snippets/css/text",
                },
                {
                  text: "背景图片",
                  link: "/snippets/css/background-image",
                },
                {
                  text: "图片异常处理",
                  link: "/snippets/css/image-error",
                },
                {
                  text: "加载动画",
                  link: "/snippets/css/loading",
                },
                {
                  text: "设置表单组件颜色",
                  link: "/snippets/css/accent-color",
                },
                {
                  text: "设置光标颜色",
                  link: "/snippets/css/caret-color",
                },
                {
                  text: "匹配后代获得焦点",
                  link: "/snippets/css/focus-within",
                },
                {
                  text: "grid",
                  link: "/snippets/css/grid",
                },
                {
                  text: "全局变量",
                  link: "/snippets/css/variable",
                },
                {
                  text: "引入文件",
                  link: "/snippets/css/import",
                },
                {
                  text: "居中",
                  link: "/snippets/css/center",
                },
                {
                  text: "进度条",
                  link: "/snippets/css/process-bar",
                },
                {
                  text: "iconfont",
                  link: "/snippets/css/iconfont",
                },
                {
                  text: "nth-child",
                  link: "/snippets/css/nth-child",
                },
                {
                  text: "gap",
                  link: "/snippets/css/gap",
                },
                {
                  text: "box-shadow",
                  link: "/snippets/css/box-shadow",
                },
                {
                  text: "linear-gradient",
                  link: "/snippets/css/linear-gradient",
                },
                {
                  text: "SASS",
                  link: "/snippets/css/sass",
                },
              ],
            },
            {
              text: "Vue",
              collapsed: true,
              items: [
                {
                  text: "初始化data",
                  link: "/snippets/vue/init-data",
                },
                {
                  text: "模拟点击",
                  link: "/snippets/vue/auto-click",
                },
                {
                  text: "路由",
                  link: "/snippets/vue/route",
                },
                {
                  text: "全局注册组件",
                  link: "/snippets/vue/register-component",
                },
              ],
            },
          ],
        },
      ],
      "/note/": [
        {
          text: "笔记",
          collapsed: false,
          items: [
            { text: "Markdown Examples", link: "/note/markdown-examples" },
            { text: "Runtime API Examples", link: "/note/api-examples" },
          ],
        },
      ],
    },

    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    socialLinks: [{ icon: "github", link: "https://github.com/Stream1998" }],
  },
});
