# 文件上传

:::info
`multipart/form-data;boundary=xxx`

`boundary` 会自动生成，所以不要手动添加 `Content-Type`, 保留 `headers` 参数。

:::

```javascript
const formData = new FormData();
formData.append("file", files[0]);
fetch(url, {
  method: "POST",
  headers: {},
  body: formData,
}).then((res) => {
  console.log(res);
});
```
