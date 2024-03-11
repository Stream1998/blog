# 加载字体

```javascript
const family = "myfont";
const myFont = new FontFace(family, "url(./fonts/xxx.ttf)");
myFont
  .load()
  .then((font) => {
    document.fonts.add(font);
  })
  .then(() => {
    // use `family` ...
  });
```
