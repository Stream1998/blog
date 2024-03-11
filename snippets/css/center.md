# 居中

## position：fixed 如何水平垂直居中

```css
/* 宽度确定 */
.className {
  width: 8rem;
  height: 8rem;
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
}
/* 宽度不确定 */
.className {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}
```
