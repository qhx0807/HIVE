# Switch 开关组件

#### 基本用法

<div class="demo-block">
  <i-Switch v-model="value1"></i-Switch>  <em>// {{value1}}</em>
  <br>
  <br>
  <i-Switch v-model="value1" disabled></i-Switch>  <em>// disabled</em>
  
</div>

::: demo

```html
<i-Switch v-model="value1"></i-Switch>
```

:::

#### 自定义显示内容

<div class="demo-block">
  <i-Switch v-model="value2">
    <span slot="open">ON</span>
    <span slot="close">OFF</span>
  </i-Switch>
  <em>
</div>

::: demo

```html
<i-Switch v-model="value1">
  <span slot="open">ON</span>
  <span slot="close">OFF</span>
</i-Switch>
```

:::

<script>
export default {
  data(){
    return {
      value1: false,
      value2: true,
      value3: '',
      groupValue: [],
    }
  },
  methods:{
    fn(){
      alert(this.value)
    }
  }
}
</script>

#### Switch Attributes

| 参数     | 说明                      | 类型    | 默认值 |
| -------- | ------------------------- | ------- | ------ |
| value    | 使用 v-model 双向绑定数据 | Boolean | false  |
| disabled | 禁用当前项                | Boolean | false  |

#### Switch Events

| 事件名    | 说明                           | 返回值     |
| --------- | ------------------------------ | ---------- |
| on-change | 开关变化时触发，返回当前的状态 | true,false |

#### Switch Slots

| 名称  | 说明                   |
| ----- | ---------------------- |
| open  | 自定义显示打开时的内容 |
| close | 自定义显示关闭时的内容 |
