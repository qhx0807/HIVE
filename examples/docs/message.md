# Message 提示

常用于主动操作后的反馈提示

#### 按钮组

为 Vue.prototype 添加了全局方法 $Message。因此在 vue instance 中可以采用本页面中的方式调用 Message。

`vm.$Message(options)`

<div class="demo-block">
  <i-button type="ghost" @click="fn1">成功</i-button>
  <i-button type="ghost" @click="fn2">消息</i-button>
  <i-button type="ghost" @click="fn3">警告</i-button>
  <i-button type="ghost" @click="fn4">错误</i-button>
</div>

::: demo

```javascript
this.$Message.info('Info Message')
this.$Message.success('Success Message')
this.$Message.wraning('Warning Message')
this.$Message.error('Error Message')
```

:::

#### Options

| 参数    | 说明     | 类型                       | 默认值 |
| ------- | -------- | -------------------------- | ------ |
| message | 消息文字 | String                     | -      |
| type    | 主题     | success/warning/info/error | info   |
| duration    | 显示时间, 毫秒。设为 0 则不会自动关闭     | Number | 2500   |

<script>
export default {
  data(){
    return {
      value1: '',
      value2: '',
      value3: '',
    }
  },
  created(){

  },
  methods:{
    fn1(){
      this.$Message.success("Success Message")
    },
    fn2(){
      this.$Message.info("Info Message")
    },
    fn3(){
      this.$Message.warning("Warning Message")
    },
    fn4(){
      this.$Message.error("Error Message")
    }
  }
}
</script>
