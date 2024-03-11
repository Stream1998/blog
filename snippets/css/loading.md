# 加载动画

[content 换行符与打点 loading 效果实例页面](https://demo.cssworld.cn/4/1-9.php)

```html
<html>
  正在加载中<dot>...</dot>
</html>
<style>
  dot {
    display: inline-block;
    height: 1em;
    line-height: 1;
    text-align: left;
    vertical-align: -0.25em;
    overflow: hidden;
  }
  dot::before {
    display: block;
    content: "...\A..\A.";
    white-space: pre-wrap;
    animation: dot 3s infinite step-start both;
  }
  @keyframes dot {
    33% {
      transform: translateY(-2em);
    }
    66% {
      transform: translateY(-1em);
    }
  }
</style>
```
