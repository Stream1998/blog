# 两端对齐

```html
<div class="people-table">
  <p><span>野区刺客：</span><span>兰陵王</span></p>
  <p><span>真伤上单：</span><span>吕布</span></p>
  <p><span>1&ensp;0&ensp;0&ensp;8&ensp;6：</span><span>孙策</span></p>
  <p><span>督&ensp;战&ensp;队：</span><span>姜子牙</span></p>
</div>
```

```scss
.people-table {
  height: 100%;
  padding-top: 30px;

  p {
    line-height: 1;
  }

  span {
    height: 28px;
    line-height: 28px;
    text-align: justify;
    display: inline-block;
  }

  span::after {
    content: " ";
    display: inline-block;
    width: 100%;
  }

  span:nth-child(1) {
    width: 140px;
    margin-right: 20px;
  }

  span:nth-child(2) {
    font-size: 28px;
    width: 100px;
    font-weight: 500;
  }
}
```
