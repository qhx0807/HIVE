# Notification 通知消息

---

#### 基本使用

<div class="demo-block">
  <i-button type="primary" @click="fn">Notification</i-button>
</div>

::: demo
```javascript
fn () {
  this.$Notify("hehehehehehe~")
}
```
:::

#### 带有倾向性

带有 icon，常用来显示「成功、警告、消息、错误」类的系统消息

<div class="demo-block">
  <i-button type="ghost" @click="fn2('success')">成功</i-button>
  <i-button type="ghost" @click="fn2('warning')">警告</i-button>
  <i-button type="ghost" @click="fn2('info')">消息</i-button>
  <i-button type="ghost" @click="fn2('error')">错误</i-button>
</div>

::: demo
```html
<i-button type="ghost" @click="fn2('success')">成功</i-button>
<i-button type="ghost" @click="fn2('warning')">警告</i-button>
<i-button type="ghost" @click="fn2('info')">消息</i-button>
<i-button type="ghost" @click="fn2('error')">错误</i-button>
<script>
  fn2 (type) {
    this.$Notify({
      title: type,
      type,
      content: "hehehehehehehe",
    })
  }
</script>
```
:::


#### Options

| 参数    | 说明     | 类型                       | 默认值 |
| ------- | -------- | -------------------------- | ------ |
| title | Notification Title | String                     | -      |
| position | 弹出位置 |  top-right/top-left/bottom-right/bottom-left                     | top-right      |
| type    | 主题     | success/warning/info/error | -   |
| duration    | 显示时间, 毫秒。设为 0 则不会自动关闭     | Number | 4500   |
| showClose    | 显示关闭icon     | Boolean | true   |
| onClose    | 关闭的事件     | Function | 0   |

#### Events

调用 Notification 或 this.$Notify 会返回当前 Notification 的实例。如果需要手动关闭实例，可以调用它的 close 方法。

| 方法名    | 说明     |
| ------- | -------- |
| close | 关闭当前的 Notification |
| closeAll | 关闭全部 Notification |

<script>
export default {
  data(){
    return {
      modal1: false,
      modal2: false,
      val: null,
    }
  },
  methods:{
    fn(){
      this.$Notify("hehehehehehe~")
    },
    fn1(){
      this.$Notify.info("hehehehehehe~")
    },
    fn2(type){
      this.$Notify({
        title: type,
        type,
        content: "hehehehehehehe"
      })
    }
  }
}
</script>
