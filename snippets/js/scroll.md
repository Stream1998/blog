# scroll

## 实现页面刷新后不定位到之前的滚动位置

```javascript
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
}
```

## 将元素滚动到用户可见

[MDN - scrollIntoView](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView)

[张鑫旭 - CSS scroll-behavior 和 JS scrollIntoView 让页面滚动平滑](https://www.zhangxinxu.com/wordpress/2018/10/scroll-behavior-scrollintoview-%e5%b9%b3%e6%bb%91%e6%bb%9a%e5%8a%a8/)

:::info
`scrollIntoView()` 方法会滚动元素的父容器，使被调用 `scrollIntoView()` 的元素对用户可见。
:::

```html
<style>
    div{
        height: 2000px;
        overflow-y: auto;
    }
</style>
</head>
<body>
    <div>
        <button>点我</button>
    </div>
    <p>流汗黄豆 &#x1F605; </p>
    <script>
        const p = document.querySelector('p');
        const btn = document.querySelector('button');
        btn.addEventListener('click', () => {
            p.scrollIntoView({
                behavior: 'smooth'
            })
        })
        p.addEventListener('click', () => {
            btn.scrollIntoView({
                behavior: 'smooth'
            })
        })
    </script>
</body>
```
