# 防抖

```javascript
// 在一段时间结束后, 执行
const debounce = (fn, delay) => {
  let timers = null;
  return () => {
    const context = this;
    const args = arguments;
    if (timers) {
      clearTimeout(timers);
    }
    timers = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};
```
