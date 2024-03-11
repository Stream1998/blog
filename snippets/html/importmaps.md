# import maps

[Javascript Import maps](https://www.jianshu.com/p/b23d823a183a)

[分享小技巧：实现在浏览器中 import 内联 JS 模块](https://juejin.cn/post/7070339012933713956)

```html
<!-- 使用 importmap 将 CDN 链接重命名 -->
<script type="importmap">
  {
    "imports": {
      "vue": "https://cdn.bootcdn.net/ajax/libs/vue/3.2.37/vue.esm-browser.js"
    }
  }
</script>
<script type="module">
  // 使用别名进行模块引入
  import { createApp } from "vue";
  // ...
</script>
```
