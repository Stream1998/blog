# 修改文件路径

```javascript
const filePath = "xxx.jpg";
const pos = filePath.lastIndexOf(".");
const res = filePath.substring(0, pos) + "-thumb" + filePath.slice(pos);
console.log(res);
```
