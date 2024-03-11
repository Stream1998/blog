# unicode

## 中文和 unicode 互转

tags: [unicode] [charCodeAt] [fromCharCode]

```javascript
const str = "你好";
const unicodes = str.split("").map((_, i) => str.charCodeAt(i).toString(16));
const chinese = unicodes.map((v) => String.fromCharCode(parseInt(v, 16)));
console.log(unicodes, chinese);
```
