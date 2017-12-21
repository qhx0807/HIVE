# Checkbox 多选框

基本组件-多选框。主要用于一组可选项多项选择。

#### 基本用法

<div class="demo-block">
  <Checkbox v-model="value1">checkbox</Checkbox> <em>// {{value1}}</em>
  <br>
  <br>
  <Checkbox v-model="value1" disabled>disabled</Checkbox> <em>// disabled</em>
</div>

::: demo

```html
  <Checkbox v-model="value1">checkbox</Checkbox>
  <Checkbox v-model="value1" disabled>disabled</Checkbox>
```

:::

#### 组合使用

<div class="demo-block">
  <CheckboxGroup v-model="groupValue">
    <Checkbox label="apple"></Checkbox>
    <Checkbox label="android"></Checkbox>
    <Checkbox label="windows"></Checkbox>
  </CheckboxGroup>
  <em>//  {{ groupValue }}</em>
</div>

::: demo

```html
<CheckboxGroup v-model="groupValue">
  <Checkbox label="apple"></Checkbox>
  <Checkbox label="android"></Checkbox>
  <Checkbox label="windows"></Checkbox>
</CheckboxGroup>
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

#### Checkbox Attributes

| 参数     | 说明                                              | 类型           | 默认值 |
| -------- | ------------------------------------------------- | -------------- | ------ |
| value    | 只在单独使用时有效。可以使用 v-model 双向绑定数据 | Boolean        | false  |
| label    | 指定当前选项的名称                                | String，Number | -      |
| disabled | 禁用当前项                                        | Boolean        | false  |

#### Checkbox Events

| 事件名    | 说明                                                                     | 返回值 |
| --------- | ------------------------------------------------------------------------ | ------ |
| on-change | 在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发 | -      |

#### CheckboxGroup Attributes

| 参数     | 说明                                              | 类型           | 默认值 |
| -------- | ------------------------------------------------- | -------------- | ------ |
| value    | 只在单独使用时有效。可以使用 v-model 双向绑定数据 | Boolean        | false  |
| vertical | 垂直排列                                        | Boolean        | false  |

#### CheckboxGroup Events

| 事件名    | 说明                                                                     | 返回值 |
| --------- | ------------------------------------------------------------------------ | ------ |
| on-change | 在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发 | -      |