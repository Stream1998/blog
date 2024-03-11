# store

## 监听 localStorage、sessionStorage 事件

:::info
`storage` 事件有一个很特别的地方，就是它不在导致数据变化的当前页面触发，而是在同一个域名的其他窗口触发。通过这种机制，实现多个窗口之间的通信。
:::

```javaScript
const count = ref(localStorage.getItem('count') || 0);
window.addEventListener('storage', (e) => {
    console.log(e);
    if(e.key === 'count'){
        count.value = Number(e.newValue);
    }
})
```
