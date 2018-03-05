# LoadingBar

全局创建了一个用于显示页面加载、异步请求的加载进度条。

#### 基础用法

通过调用 $LoadingBar 提供的三种方法来控制全局的加载进度条

`start()`、`end()`、`error()`

<div class="demo-block">
  <i-button type="ghost" @click="start">开始</i-button>
  <i-button type="ghost" @click="finish">结束</i-button>
  <i-button type="ghost" @click="error">错误</i-button>
</div>

::: demo

```html
  <div class="demo-block">
    <i-button type="ghost" @click="start">开始</i-button>
    <i-button type="ghost" @click="finish">结束</i-button>
    <i-button type="ghost" @click="error">错误</i-button>
  </div>
  <script>
    start(){
      this.$LoadingBar.start()
    },
    finish(){
      this.$LoadingBar.success()
    },
    error() {
      this.$LoadingBar.error()
    }
  </script>

```

:::

#### Function

| 方法    | 说明 |
| ------- | ---- |
| vm.$LoadingBar.start()   | 开始 |
| vm.$LoadingBar.success() | 成功 |
| vm.$LoadingBar.error()   | 出错 |

<script>
export default {
  data(){
    return {
      modal1: false,
    }
  },
  methods:{
    start(){
      this.$LoadingBar.start()
    },
    finish(){
      this.$LoadingBar.success()
    },
    error() {
      this.$LoadingBar.error()
    }
  }
}
</script>
