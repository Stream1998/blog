# 参数非空检测

```javascript
const isRequired = () => {
  throw new Error("param is required");
};

const hello = (name = isRequired()) => {
  console.log(`hello ${name}`);
};
// 抛出一个错误，因为参数没有传
hello();
// 没有问题
hello("hello");
```
