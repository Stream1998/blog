# Promise

## 判断值是否为 Promise 对象

1. `Promise.resolve()`

Promise 内部会判断该值是否为 Promise。

```js
const isPromise = (obj) => {
  if (Promise && Promise.resolve) {
    return Promise.resolve(obj) == obj;
  } else {
    throw new Error("当前环境不支持Promise");
  }
};
```

2. `Object.prototype.toString.call()`

判断类型万能方法

```js
const isPromise = (obj) => {
  return obj && Object.prototype.toString.call(obj) === "[object Promise]";
};
```

3. `instanceof`

可以判断内置 Promise，但无法判断实现 `Promise/A+` 的其他库。

```js
const isPromise = (obj) => obj instanceof Promise;
```

4. 判断是否包含 then 方法

无法准确判断是否为 Promise。

```js
const isPromise = (obj) => obj && obj.then && typeof obj.then === "function";
```
