# 正则匹配

## 替换字符

```javascript
const reg = /[^\u4E00-\u9FA5A-Za-z]/g;
const text = "replace替换字符@@#";
console.log(text.replace(reg, ""));
```

## 检验字符

```javascript
const reg = /[^\u4E00-\u9FA5A-Za-z]/g;
const text = "replace替换字符@@#";
console.log(reg.test(e));
```

## 匹配 URL 的参数

```javascript
const url = "xxx";
const reg = /([?&][^?&]+)=([^?&]+)/g;
const params = (url.match(reg) || []).reduce((acc, cur) => {
  const [key, value] = cur.slice(1).split("=");
  acc[key] = value;
  return acc;
}, {});
console.log(params.appid);
```

## 转换成金额表示

```js
const num = "100000000";
// x(?!y) 仅仅当'x'后面不跟着'y'时匹配'x'，这被称为正向否定查找
// x(?=y) 匹配'x'仅仅当'x'后面跟着'y'.这种叫做先行断言。
const res = num.replace(/(?!^)(?=(\d{3})+$)/g, ",");
console.log(res);
```
