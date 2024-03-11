# 增加焦点

由于 div 等元素无法接受键盘或其他用户事件，即不支持:focus 伪类，可通过增加 tabIndex 属性使其支持:focus

```html
<div tabindex="1"></div>
```

```css
div:focus {
  /* some code */
}
```
