# 接收媒体输入

```javascript
navigator.mediaDevices
  .getUserMedia(constraints)
  .then(function (stream) {
    /* 使用这个stream stream */
  })
  .catch(function (err) {
    /* 处理error */
  });
```
