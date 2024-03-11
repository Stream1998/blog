# 进度条

```html
<input type="range" min="0" max="100" value="50" oninput="changeVolume(this)" />
```

```css
input[type="range"] {
  -webkit-appearance: none; /*去除默认样式*/
  width: 100%;
  height: 2px;
  background: #bdbec7;
  border-radius: 4px;
  margin: 8px 0;
  cursor: pointer;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-top: -3px;
  background: #21aaff;
}
input[type="range"]::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  background: -webkit-linear-gradient(top, #21aaff, #21aaff) 0% 0% / var(
      --cur,
      0%
    )
    100% no-repeat;
  height: 2px;
}
```

```javascript
function changeVolume(el) {
  el.style.setProperty("--cur", el.value + "%");
}
```
