# 深拷贝

使用 `structuredClone()` 方法进行结构化克隆，方法有 `2` 个参数：

1. value 要克隆的对象，可以是任何结构化可克隆类型。
2. transfer 可转移的对象，为一个数组，其中的值将被移动到新的对象，而不是克隆至新的对象。

```js
// Create an object with a value and a circular reference to itself.
const original = { name: "MDN" };
original.itself = original;

// Clone it
const clone = structuredClone(original);

console.assert(clone !== original); // the objects are not the same (not same identity)
console.assert(clone.name === "MDN"); // they do have the same values
console.assert(clone.itself === clone); // and the circular reference is preserved
```
