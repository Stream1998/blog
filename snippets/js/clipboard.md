# 复制

## 方法 1

```html
<input type="text" id="copy-text-store" class="copy-text-store" />
```

```css
.copy-text-store {
  /* 设置成 hidden 或者是 none 都不能使用 select 方法 */
  opacity: 0;
  height: 1px;
  cursor: default;
}
```

```javascript
function copyLink() {
  const input = document.querySelector("#copy-text-store");
  const copyText = `复制的内容`;
  input.value = copyText;
  input.select();
  document.execCommand("copy");
  input.value = "";
}
```

### 方法 2

[MDN - Clipboard](https://developer.mozilla.org/zh-CN/docs/Web/API/Clipboard)

```js
navigator.clipboard.writeText("some text").then(
  function () {
    /* clipboard successfully set */
  },
  function () {
    /* clipboard write failed */
  }
);
```
