# 模拟点击

```vue
<template>
  <button ref="initButton" @click="init"></button>
</template>
<script>
  export default {
    mounted() {
      this.$refs.initButton.$el.click();
    },
  };
</script>
```
