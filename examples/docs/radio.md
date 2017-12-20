# Radio 单选框

基本组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。

#### 基本用法

<div class="demo-block">
  <Radio v-model="value1" label="radio"></Radio> <em>// {{value1}}</em>
</div>

::: demo

```html
  <Radio v-model="value1" label="radio"></Radio>
```

:::

#### 组合使用

<div class="demo-block">
  <RadioGroup v-model="groupValue">
    <Radio label="apple"></Radio>
    <Radio label="android"></Radio>
    <Radio label="windows"></Radio>
  </RadioGroup>
  <em>//  {{ groupValue }}</em>
</div>

::: demo

```html
<RadioGroup v-model="groupValue">
  <Radio label="apple"></Radio>
  <Radio label="android"></Radio>
  <Radio label="windows"></Radio>
</RadioGroup>
```

:::

<script>
export default {
  data(){
    return {
      value1: false,
      value2: true,
      value3: '',
      groupValue:'android',
    }
  },
  methods:{
    fn(){
      alert(this.value)
    }
  }
}
</script>

#### Radio Attributes

| 参数     | 说明                                              | 类型           | 默认值 |
| -------- | ------------------------------------------------- | -------------- | ------ |
| value    | 只在单独使用时有效。可以使用 v-model 双向绑定数据 | Boolean        | false  |
| label    | 指定当前选项的名称                                | String，Number | -      |
| disabled | 禁用当前项                                        | Boolean        | false  |

#### Radio Events

| 事件名    | 说明                                                                     | 返回值 |
| --------- | ------------------------------------------------------------------------ | ------ |
| on-change | 在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发 | -      |

#### RadioGroup Attributes

| 参数     | 说明                                              | 类型           | 默认值 |
| -------- | ------------------------------------------------- | -------------- | ------ |
| value    | 只在单独使用时有效。可以使用 v-model 双向绑定数据 | Boolean        | false  |
| vertical | 垂直排列                                        | Boolean        | false  |

#### RadioGroup Events

| 事件名    | 说明                                                                     | 返回值 |
| --------- | ------------------------------------------------------------------------ | ------ |
| on-change | 在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发 | -      |