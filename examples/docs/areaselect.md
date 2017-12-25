# 级联选择

#### 基础用法

<div class="demo-block">
  <AreaSelect @on-change="fn" width="370"></AreaSelect>  
  <em>{{value1}}</em>
</div>

::: demo

```html
  <AreaSelect  @on-change="fn" width="370"></AreaSelect>  
```

:::

<script>
// import AREA from '../assets/area.json'
export default {
  data(){
    return {
      value1: '',
      value2: '',
      value3: '',
    }
  },
  mounted(){
    

  },
  methods:{
    fn(e){
      this.value1 = e.join(' / ')
    }
  }
}
</script>

#### Attributes

| 参数        | 说明                 | 类型          | 默认值 |
| ----------- | -------------------- | ------------- | ------ |
| width       | select 的宽度        | String,Number |  100% |
| disabled    | 禁用状态             | Boolean       |  false |
| placeholder | 占位提示 placeholder | String,Number |  请选择 |

#### Events

| 事件名    | 说明                                       | 返回值 |
| --------- | ------------------------------------------ | ------ |
| on-change | 在选项状态发生改变时触发，返回当前选择的值 | -      |
