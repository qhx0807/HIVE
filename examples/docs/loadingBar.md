# LoadingBar

全局创建了一个用于显示页面加载、异步请求的加载进度条。

#### 基础用法

通过调用 $LoadingBar 提供的三种方法来控制全局的加载进度条

`start()`、`end()`、`error()`

<div class="demo-block">
  <i-button type="ghost" @click="fn">开始</i-button>
  <i-button type="ghost">结束</i-button>
  <i-button type="ghost">错误</i-button>
</div>

::: demo
```html

```
:::

<script>
export default {
  data(){
    return {
      modal1: false,
    }
  },
  methods:{
    fn(){
      this.$LoadingBar()
    },
  }
}
</script>
