# 迅雷下载

```js
function downloadByXunlei(url) {
  // 将链接转成 base64
  const newUrl = btoa(`AA${url}ZZ`);
  const a = document.createElement("a");
  a.href = newUrl;
  a.click();
  a.remove();
  URL.revokeObjectURL(newUrl);
}
```
