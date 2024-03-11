# 动态加载\<script\>

```html
<script>
  const sdk = document.createElement("script");
  const handle = document.createElement("script");

  if (type === "world") {
    sdk.src = "world-sdk.js";
    handle.src = "world-handle.js";
  } else {
    sdk.src = "indoor-sdk.js";
    handle.src = "indoor-handle.js";
  }
  // console.log(document.currentScript);
  // document.body.appendChild(sdk)
  document.body.appendChild(sdk);
  // 等待 script 加载完成后，再加载下一个
  sdk.onload = () => {
    document.body.appendChild(handle);
  };
</script>
```
