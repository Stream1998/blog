# 节流

```javascript
// 在一段时间内只执行一次
const throttle = (fn, delay) => {
  let timers = null;
  return () => {
    const context = this;
    const args = arguments;
    timers = setTimeout(() => {
      timers = null;
      fn.apply(context, args);
    });
  };
};
```
