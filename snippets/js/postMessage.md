# 跨源数据传输

[postMessage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage)

```javascript
// 父窗口 http://domain1
window.addEventListener(
  "message",
  (e) => {
    console.log(e.data);
  },
  false
);
function send() {
  this.$refs["iframe"].contentWindow.postMessage(message, "http://domain1");
}
// 子窗口 http://domain2
window.addEventListener(
  "message",
  (e) => {
    console.log(e.data);
    // 注意 webpack 也有数据传输 筛选
  },
  false
);
function send() {
  // parent or top, but window don't work.
  top.postMessage(message, "http://domain1");
}
```
