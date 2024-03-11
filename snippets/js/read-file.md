# 读取文件

```html
<script>
  const readFile = (path) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("get", path);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.responseText);
          }
          reject("Request bad!");
        }
      };
      xhr.onerror = () => {
        reject(new Error("An error occured during the transcation"));
      };
      xhr.send();
    });
  };
  readFile("./index.json")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
</script>
```
