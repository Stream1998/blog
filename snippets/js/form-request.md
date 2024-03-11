# 表单请求

:::info
application/x-www-form-urlencoded
:::

```javascript
// 原生 URLSearchParams
const stringify = (data) => {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(data)) {
    params.append(key, value);
  }
  return params;
};

// 或者使用 Qs 模块
import qs from "Qs";
let data = { code: "1234", name: "yyyy" };
const formData = qs.stringify(data);
```
