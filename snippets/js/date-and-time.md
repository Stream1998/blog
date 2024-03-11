# 获取当前日期和时间

```javascript
const date = new Date();
const cdate = date.toLocaleDateString("zh-CN").split("/").join("-");
const ctime = date.toLocaleTimeString("zh-CN", { hour12: false });
const cdate_ctime = date.toLocaleString("zh-CN", { hour12: false });
console.log(cdate, ctime, cdate_ctime);
```
