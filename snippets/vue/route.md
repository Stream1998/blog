# 路由

## 监听路由变化

```vue
<script>
  export default {
    watch: {
      $route(to, from) {
        console.log(to, from);
      },
    },
  };
</script>
```

## 返回上一个页面

```vue
<script>
  export default {
    methods: {
      navigateBack() {
        this.$router.go(-1);
      },
    },
  };
</script>
```

## 路由导航

[来源](https://router.vuejs.org/zh/api/#router-link-props)

:::info
to - 目标路由
tag - 生成标签
active-class - 触发后的样式
exact - 精准模式，只有当前路由与目标路由完全一致才触发。
:::

```html
<ul>
  <router-link to="/realtime" tag="li" active-class="header-nav-active" exact
    >realtime</router-link
  >
  <router-link to="/review" tag="li" active-class="header-nav-active" exact
    >review</router-link
  >
  <router-link to="/call" tag="li" active-class="header-nav-active" exact
    >call</router-link
  >
</ul>
```

## 阻止路由进入页面

```javascript
router.beforeEach((route, redirect, next) => {
  if (route.path === "/login" || localStorage.accessToken) {
    next();
  } else {
    localStorage.clear();
    next("/login");
  }
});
```
