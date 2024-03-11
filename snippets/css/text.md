# 文本样式

## 单行文本省略

```css
.className {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

## 文本换行显示

```css
.className {
  word-break: break-all;
}
```

## 文本不换行

```css
.className {
  white-space: nowrap;
}
```

## 给文本添加下划线

```css
.className {
  text-decoration: underline;
}
```

## 修改表单元素的占位文本样式

```css
.className::placeholder {
  color: #b8cae6;
  font-size: 16px;
}
```

## 文本选中样式

```css
::selection,
::-moz-selection,
::-webkit-selection {
  color: #c80000;
}
```

## 文字排布方式

[layui 表格反转的一个简单实现方式](https://www.php.cn/layui/436365.html)

[mdn - writing-mode](https://developer.mozilla.org/zh-CN/docs/Web/CSS/writing-mode)

指定块流动方向，即块级容器堆叠的方向，以及行内内容在块级容器中的流动方向
