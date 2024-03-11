# HTML 字符串转换为 DOM

```javascript
// 1. innerHTML
node.innerHTML = template;
// 2. DOMParser
const node = let doc = new DOMParser().parseFromString(template, 'text/html');
// 3. DocumentFragment
const node = document.createRange().createContextualFragment(template);
```
