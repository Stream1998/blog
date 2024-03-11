# 自定义图形

## 箭头

```css
.className::before {
  content: "";
  position: absolute;
  border: 2px solid blue;
  border-left: 0;
  border-top: 0;
  width: 10px;
  height: 10px;
  transform: rotate(-45deg);
  left: 5px;
  top: 8px;
}
```

## 圆点

```css
.className::before {
  content: "";
  border: 5px solid red;
  border-radius: 50%;
  position: absolute;
  left: 8px;
  top: 13px;
}
```
