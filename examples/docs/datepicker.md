# DatePicker 日期选择

#### 基础用法

<div class="demo-block">
  <DatePicker width="260" v-model="value1"></DatePicker>
  <em>value:  {{value1}}</em>
</div>


::: demo
```html
  <DatePicker width="260" v-model="value1"></DatePicker>
```
:::

#### 禁用状态

<div class="demo-block">
  <DatePicker width="260" disabled v-model="value2"></DatePicker>
</div>


::: demo
```html
  <DatePicker width="260" v-model="value2"></DatePicker>
```
:::

#### DatePicker Attributes

| 参数        | 说明                            | 类型          | 默认值 |
| ----------- | ------------------------------- | ------------- | ------ |
| value       | 使用 v-model 双向绑定数据       | String,Date | -      |
| placeholder | placeholder 占位提示            | String,Number | 选择日期      |
| disabled    | 禁用当前项                      | Boolean       | false  |
| width       | select的宽度 | String,Number | -      | 100%

#### DatePicker Events

| 事件名    | 说明                                       | 返回值 |
| --------- | ------------------------------------------ | ------ |
| on-change | 在选项状态发生改变时触发，返回当前选择的值 | 选择的日期 如：2017-12-12      |


<script>
export default {
  data(){
    return {
      value1: '',
      value2:  new Date(),
      value3: '',
    }
  },
  methods:{
    fn(){

    }
  }
}
</script>
