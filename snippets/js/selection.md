# selection

## 清空文本选择范围

```javascript
// onmousemove
removeSelection(){
    window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
}
```

## 控制输入框输入，光标不移动

tags: [input] [setSelectionRange]

[setSelectionRange - mdn](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLInputElement/setSelectionRange)

```javascript {.line-numbers}
const input = document.querySelector("input");
input.addEventListener("input", (e) => {
  const value = e.target.value;
  const regex = /[^.1-9]/g;
  // 获取第一个不合法的输入位置
  const pos = value.search(regex);
  const res = value.replace(regex, "");
  e.target.value = res;
  // 如果 pos != -1 就将光标定位到该位置
  ~pos && e.target.setSelectionRange(pos, pos);
});
```
