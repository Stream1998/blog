# 视频截图

```html
<video src=""></video>
<!-- 如果视频跨域，导致canvas无法截图，使用crossorigin属性 -->
<video src="" crossorigin="anonymous"></video>
```

```javascript
function screenshot() {
  const video = document.querySelector("video");
  const ctx = document.createElement("canvas");
  ctx.width = video.videoWidth;
  ctx.height = video.videoHeight;
  ctx.getContext("2d").drawImage(video, 0, 0, ctx.width, ctx.height);
  ctx.toBlob((blob) => {
    const url = URL.createObjectURL(blob);
    // console.log(url);
    const link = document.createElement("a");
    link.href = url;
    link.download = `视频截图_${new Date().getTime()}`;
    link.click();
    link.remove();
  });
}
```
