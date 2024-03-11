# 图片上传

```html
<div class="micro-image-list"></div>
<div class="micro-upload-image" onclick="uploadImage(this)">
  <input
    type="file"
    accept=".png,.jpg"
    style="display: none;"
    multiple
    onchange="changeImage(this)"
  />
  上传图片
</div>
```

```javascript
const uploadImage = (el) => {
  const uploader = el.querySelector("input[type='file']");
  return uploader.click();
};
function changeImage(el) {
  const files = el.files;
  // 图片列表
  const imageList = $(el).parent().prev();
  // 上传限制
  // const length = imageList.children().length;
  // if(length > 6){
  //     console.log('图片不能超过6张！');
  //     alert('图片不能超过6张！');
  //     return;
  // }
  // const types = ['image/png', 'image/jpeg'];
  // if(!types.includes(files[0].type)){
  //     console.log('文件类型错误！');
  //     alert('文件类型错误！');
  //     return;
  // }
  // if(files[0].size > 1024){
  //     console.log('图片大小不能超过1M！');
  //     alert('图片大小不能超过1M！');
  //     return;
  // }

  // 添加图片
  const src = window.URL.createObjectURL(files[0]);
  const template = `
        <div class="image-item">
            <img src="${src}" alt="">
        </div>
    `;
  // 提交表单
  const formData = new FormData();
  formData.append("files", files[0]);
  $.ajax({
    url: "/upload/",
    dataType: "json",
    type: "POST",
    async: false,
    data: formData,
    processData: false, // 使数据不做处理
    contentType: false, // 不要设置Content-Type请求头
    success: function (data) {
      console.log(data);
    },
    error: function (response) {
      console.log(response);
    },
  });
  imageList.append(template);
  // 清空当前选择的文件
  $(el).val("");
}
```
