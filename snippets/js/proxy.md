# 代理

## 基础类型和函数的代理

```javascript
const obj = {
  Position: {
    LEFT: 1,
    RIGHT: 2,
  },
  task: {
    create: function () {
      console.log("create");
    },
  },
  func: function () {
    console.log("func");
  },
};

const authorized = ["func", "Position"];

const res = Object.entries(obj).reduce((a, [k, v]) => {
  if (typeof v === "function") {
    const p = new Proxy(v, {
      apply(target, thisArg, argumentsList) {
        if (!authorized.includes(k)) {
          throw new Error(`${k}未授权，请联系管理员！`);
        }
        return target(...argumentsList);
      },
      construct(target, args, newTarget) {
        if (!authorized.includes(k)) {
          throw new Error(`${k}未授权，请联系管理员！`);
        }
        return new target(...args);
      },
    });
    a[k] = p;
  } else {
    const p = new Proxy(
      { [k]: v },
      {
        get(target, key, receiver) {
          if (authorized.includes(key)) {
            return Reflect.get(target, key, receiver);
          } else {
            throw new Error(`${key}未授权，请联系管理员！`);
          }
        },
      }
    );
    a[k] = p;
  }
  return a;
}, {});

// 将基本类型数据用对象包裹做代理，代理后的结果
// e.g. Position: {LEFT: 1, RIGHT: 2 } => { Position: {LEFT: 1, RIGHT: 2 } }
// 用对象存储 Proxy 对象
// e.g. res['Position'] = p
// 如果直接调用 res.Position.LEFT 是会报错的!
// 因为 res.Position 不是 {LEFT: 1, RIGHT: 2 }, 而是 { Position: {LEFT: 1, RIGHT: 2 }}
// 所以需要将 res 做一层代理，访问时将里面的数据取出来。
const p = new Proxy(res, {
  get(target, key, receiver) {
    if (typeof target[key] === "function") {
      return Reflect.get(target, key, receiver);
    }
    return Reflect.get(target[key], key, receiver);
  },
});
console.log(res.Position);
```
