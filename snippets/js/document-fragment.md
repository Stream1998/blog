# 文档碎片

```javascript
const ul = document.getElementById("ul");
const fragment = document.createDocumentFragment();
for (let i = 0; i < 20; i++) {
  let li = document.createElement("li");
  li.innerHTML = "index: " + i;
  fragment.appendChild(li);
}
ul.appendChild(fragment);
```
