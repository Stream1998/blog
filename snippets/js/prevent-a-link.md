# 阻止\<a\>默认跳转

## 1. 执行空语句

```html
<a href="javascript:;">jump</a>
```

## 2. onlink 返回 false

```js
const links = document.querySelectorAll("a");
Array.form(links).map((v) => {
  v.onlink = () => {
    return false;
  };
});
```
