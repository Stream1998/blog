# 图片异常处理

[前端小智-稀土掘金](https://juejin.cn/post/7062860159286149127)

```html
<img
  src="https://miro.medium.com/xxx.jpg"
  alt="fireworks picture"
  onerror="this.classList.add('error');"
/>
```

```css
img.error {
  content: "";
  display: inline-block;
  transform: scale(1);
  color: transparent;
}
img.error::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #f5f5f5
    url("https://cdn-images-1.medium.com/max/1600/1*we8wfyztsdo12e2Cww6oVA.jpeg")
    no-repeat center / 100% 100%;
}
/* 优化使用alt说明图片含义 */
img.error::after {
  content: attr(alt);
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  line-height: 2;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 12px;
  text-align: center;
  // 文本省略
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```
