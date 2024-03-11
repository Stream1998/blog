# 全局注册组件

使用 `require.context()` 方法来创建自己的（模块）上下文, 有 `3` 个参数：

1. 要搜索的文件夹目录
2. 是否还应该搜索它的子目录，
3. 匹配文件的正则表达式。

[Vue 全局组件](https://juejin.cn/post/6844903583113019405#heading-2)

```js
const component = require.context("./components", false, /\.vue$/);
component
  .keys()
  .map(context)
  .forEach(({ default: item }) => {
    Vue.component(item.name, item);
  });
```
