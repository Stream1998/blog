# nth-child

## 奇偶匹配

```css
:nth-child(odd) {
}
:nth-child(even) {
}
```

## 根据规则给样式

```css
.className:nth-child(3n + 2) {
  margin: 0 16upx;
}
/* 选择第 1 项到第 7 项 */
.classname:nth-child(-n + 7) {
}
/* 选择第 7 项开始 */
.classname:nth-child(n + 7) {
}
```
