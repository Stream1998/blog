# 数组相关

## 生成数组

```javascript
const arr = Array.from({ length: 16 }, (v, i) => {
  return {};
});
```

## 打乱数组

```javascript
// 不完全乱序
const arr = [1, 2, 3, 4, 5];
const result = arr.sort((_) => Math.random() - 0.5);
console.log(result);
// Fisher-Yates shuffle
for (let i = 1; i < arr.length; i++) {
  const random = Math.floor(Math.random() * (i + 1));
  const temp = arr[i];
  arr[i] = arr[random];
  arr[random] = temp;
}
console.log(arr);
```

## 过滤假值

```javascript
const arr = [1, 2, 3];
arr.lenth = 100;
console.log(arr);
const ans = arr.filter((v) => Boolean);
console.log(ans);
```

## 数组填充

```javascript
const array = [1, 2, 3];
const zeroArray = new Array(3).fill(0);
const newArray = [...array, ...zeroArray];
console.log(newArray);
```

## 统计字母个数

```javascript
const data = ["a", "a", "b", "a", "c", "b", "d", "b", "c", "b", "c"];
const result = data.reduce((acc, v) => ((acc[v] = (acc[v] || 0) + 1), acc), {});
console.log(result);
```

## 对象数组多字段排序

```js
const personList = [
  { name: "Sandra Clark", age: 10, id: 2001 },
  { name: "George Williams", age: 10, id: 2010 },
  { name: "Jeffrey Williams", age: 24, id: 2008 },
  { name: "James Jones", age: 10, id: 2008 },
  { name: "Linda Martin", age: 10, id: 2001 },
  { name: "Linda Williams", age: 24, id: 2000 },
  { name: "Joseph Lee", age: 26, id: 20015 },
  { name: "Daniel Rodriguez", age: 10, id: 2001 },
  { name: "James Taylor", age: 10, id: 2000 },
];
// 先按 age 排序，age 相同再按 id 排序，id 相同则再按 name 排序
personList.sort((m, n) => {
  if (a.age !== b.age) return a.age - b.age;
  else if (a.id !== b.id) return a.id - b.id;
  else if (a.name !== b.name) return a.name.localeCompare(b.name);
});
console.log(personList);
```
