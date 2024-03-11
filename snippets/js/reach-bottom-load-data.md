# 触底加载

```javascript
$("#id").on("scroll", (e) => {
  const scrollHeight = e.target.scrollHeight;
  const scrollTop = e.target.scrollTop;
  const clientHeight = e.target.clientHeight;
  // console.log(scrollHeight, scrollTop, clientHeight);
  const isBottom = scrollHeight - scrollTop <= clientHeight;
  isBottom && loadData();
});
function loadData() {
  alert("加载数据");
}
```
