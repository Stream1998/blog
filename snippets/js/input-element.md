# \<input\>

## 清空选中的文件

```javascript
$("input[type=file]").val("");
```

## 动态添加\<input\>后自动聚焦

```javascript
const input = `<input type="text">`;
$("#btn").before(input);
$("#btn").prev().focus();
```

## 设置 checkbox 选中、取消选中、获取被选中的值、判断是否选中

```javascript
// 选中
$("input[type='checkbox']").prop("checked", true);
// 取消选中
$("input[type='checkbox']").prop("checked", false);
// 获取被选中的值
$("input:checkbox:checked").val();
// 判断是否选中
$("input[type='checkbox']").prop("checked");
```

## checkbox 三种状态切换

```js
const overall = document.querySelector("#enchantment");
const ingredients = document.querySelectorAll("ul input");

overall.addEventListener("click", (e) => {
  e.preventDefault();
});

for (const ingredient of ingredients) {
  ingredient.addEventListener("click", updateDisplay);
}

function updateDisplay() {
  let checkedCount = 0;
  for (const ingredient of ingredients) {
    if (ingredient.checked) {
      checkedCount++;
    }
  }

  if (checkedCount === 0) {
    overall.checked = false;
    overall.indeterminate = false;
  } else if (checkedCount === ingredients.length) {
    overall.checked = true;
    overall.indeterminate = false;
  } else {
    overall.checked = false;
    overall.indeterminate = true;
  }
}
```
