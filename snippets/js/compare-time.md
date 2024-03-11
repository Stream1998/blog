# 比较时间

```javascript
const date1 = new Date("2021-10-21T07:39:21.176Z").toISOString();
console.log(date1);
const date2 = new Date("2021-10-21T07:39:21.170Z").toISOString();
console.log(date2);
// 字符串比较
const result = date1.localeCompare(date2);
console.log(result);
```
