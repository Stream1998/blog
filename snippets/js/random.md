# 随机生成

## 11 位字符串

```javascript
console.log(Math.random().toString(36).substring(2));
```

## 颜色

```javascript
const randomColor = `#${Math.floor(Math.random() * 0xffffff)
  .toString(16)
  .padEnd(6, "0")}`;
console.log(randomColor);
```

## UUID

```javascript
const createUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
const uuid = createUUID();
console.log(uuid);
```
