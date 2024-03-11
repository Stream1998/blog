# 全屏/退出全屏

## 全屏

```javascript
function fullScreen(el) {
  let rfs =
      el.requestFullScreen ||
      el.webkitRequestFullScreen ||
      el.mozRequestFullScreen ||
      el.msRequestFullScreen,
    wscript;
  if (typeof rfs != "undefined" && rfs) {
    rfs.call(el);
    return;
  }
  if (typeof window.ActiveXObject != "undefined") {
    wscript = new ActiveXObject("WScript.Shell");
    if (wscript) {
      wscript.SendKeys("{F11}");
    }
  }
}
```

## 退出全屏

```javascript
function exitFullScreen() {
  if (document.cancelFullScreen) {
    document.cancelFullScreen();
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  } else if (document.mozCacelFullScreen) {
    document.mozCacelFullScreen();
  } else if (document.msCanclFullScreen) {
    document.msCanclFullScreen();
  } else if (document.oCancelFullScreen) {
    document.oCancelFullScreen();
  }
  if (typeof window.ActiveXObject != "undefined") {
    let wscript = new ActiveXObject("WScript.Shell");
    if (wscript != null) {
      wscript.SendKeys("{F11}");
    }
  }
}
```

## 监听全屏、退出全屏

```javascript
function onfullscreenHandle() {
  const target = event.target;
  // do something
}
document.onfullscreenchange = (event) => {
  onfullscreenHandle(event);
};
document.onwebkitfullscreenchange = (event) => {
  onfullscreenHandle(event);
};
document.onmozfullscreenchange = (event) => {
  onfullscreenHandle(event);
};
document.onmsfullscreenchange = (event) => {
  onfullscreenHandle(event);
};
```
