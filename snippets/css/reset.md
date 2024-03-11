# 重置

# 去除\<a\>默认样式

```css
a, 
/*正常的未被访问过的链接*/
a:link, 
/*已经访问过的链接*/
a:visited,
/*鼠标划过(停留)的链接*/
a:hover,
/* 正在点击的链接*/
a:active {
  text-decoration: none;
}
```

## 去除密码图标

```css
input[type="password" i]::-ms-reveal {
  display: none !important;
}
```

## 去除数字输入框默认按钮

```css
.input[type="number"]::-webkit-inner-spin-button {
  display: none;
}
```

## 修改\<li\>默认项目符号或数字

[MDN - ::marker](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::marker)

它作用在任何设置了 `display: list-item` 的元素或伪元素上

```css
ul li::marker {
  color: red;
  font-size: 1.5em;
}
```

## 自定义滚动条样式

[关于滚动条样式](https://juejin.cn/post/6997011443967066143)

- ::-webkit-scrollbar：
  - 用于设置滚动条的整体样式
  - 在这里设置宽高，以控制滚动条尺寸，且必须要设置宽高，否则不生效
  - 宽高分别对应 y 轴 和 x 轴 的滚动条尺寸
  - 若宽高为 0，则可隐藏滚动条，但仍可保持滚动
- ::-webkit-scrollbar-track：
  - 滚动条轨道
  - 不设置则不出现轨道
- ::-webkit-scrollbar-track-piece：
  - 没有滑块的滚动条轨道，或者说是内层轨道
  - 同滚动条轨道，
- ::-webkit-scrollbar-thumb：
  - 滚动条滑块，即滚动条滚动的部分
  - 必须要设置，否则不会出现滑块
- ::-webkit-scrollbar-button：
  - 滚动条两端的箭头按钮
  - 不设置则不出现
- ::-webkit-scrollbar-corner：
  - X 轴滚动条和 Y 轴滚动条的交接处
  - 不设置，默认为白色小方块，宽高随 X 轴和 Y 轴滚动条尺寸

```css
.container::-webkit-scrollbar {
  width: 10px;
  height: 100%;
  border-radius: 5px;
}
.container::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 5px;
}
.container::-webkit-scrollbar-thumb {
  background: #0e226a;
  border-radius: 5px;
}
```
