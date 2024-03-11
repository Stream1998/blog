# 拖拽相关

## 拖拽元素

```html
<div draggable="true" ondragstart="dragElement(data)"></div>
<!-- define drop zone -->
<div ondragover="overElement()" ondrop="dropElement()"></div>
```

```javascript {.line-numbers}
// 开始拖动. 存储信息
function dragElement(data) {
  // define drag's data
  event.dataTransfer.setData("data", data);
}
// 悬浮到可放置区域
function overElement() {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
}
// 结束拖动，接收信息
function dropElement() {
  event.preventDefault();
  const data = event.dataTransfer.getData("data");
  const target = event.target;
  // do something
}
```

## 拖拽加载文件

```javascript
dropzone.addEventListener("dragover", (e) => {
  e.dataTransfer.dropEffect = "copy";
  e.preventDefault();
  e.stopPropagation();
});
dropzone.addEventListener("drop", (e) => {
  e.preventDefault();
  e.stopPropagation();
  const files = e.dataTransfer.files;
  const reader = new FileReader();
  reader.readAsText(files[0], "utf-8");
  reader.onload = async function (e) {
    const result = e.target.result;
    // do something
  };
});
```
