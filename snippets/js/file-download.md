# 文件下载

```javascript
function downloadFile(blob) {
  const a = document.createElement("a");
  const url = URL.createObjectURL(blob);
  a.href = url;
  a.download = new Date().getTime() + ".wav"; // filename
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
```
