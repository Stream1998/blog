# \<select\>

## 禁用

### 方法 1

```html
<select style="pointer-events:none;"></select>
```

### 方法 2

```html
<select
  onfocus="this.defaultIndex=this.selectedIndex"
  onchange="this.defaultIndex=this.selectedIndex"
></select>
```

### 方法 3

```html
<select disabled></select>
```

## 重置

```javascript
$("#select option:first").prop("selected", "selected");
```

## 获取被选中的选项

```javascript
const value = $("#select option:selected").val();
console.log(value);
```
