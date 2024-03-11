# 右键菜单

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body,
      .context-menu ul {
        margin: 0;
        padding: 0;
      }
      .bg {
        width: 300px;
        height: 300px;
        background-color: rgb(95, 230, 220);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        user-select: none;
        cursor: default;
      }
      .context-menu {
        background: rgba(255, 255, 255);
        border: 1px solid gray;
      }
      .context-menu ul li {
        list-style: none;
        cursor: pointer;
        padding: 6px 10px;
        user-select: none;
      }
      .context-menu ul li + li {
        border-top: 1px solid gray;
      }
    </style>
  </head>
  <body>
    <div class="bg">
      <span>右键显示自定义菜单</span>
    </div>
    <div class="context-menu" style="display: none;">
      <ul>
        <li data-id="1">menu 1</li>
        <li data-id="2">menu 2</li>
        <li data-id="3">menu 3</li>
      </ul>
    </div>
    <script>
      const bg = document.querySelector(".bg");
      const menu = document.querySelector(".context-menu");
      // 监听右键菜单事件
      bg.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        menu.style = `
                display: block;
                position: fixed;
                left: ${e.pageX}px;
                top: ${e.pageY}px;
                z-index: 20220118;
            `;
        document.addEventListener("click", cancelMenu);
      });
      // 阻止菜单上的默认右键菜单事件
      menu.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        return;
      });
      // 菜单点击事件
      menu.addEventListener("click", (e) => {
        e.stopPropagation();
        console.log(e.target.dataset.id);
        hideMenu();
      });
      // 隐藏菜单
      const hideMenu = () => {
        menu.style = "display:none;";
      };
      // 取消菜单
      const cancelMenu = () => {
        hideMenu();
        document.removeEventListener("click", cancelMenu);
      };
    </script>
  </body>
</html>
```
