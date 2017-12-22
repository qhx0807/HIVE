# select 选择框

#### 基本用法

<div class="demo-block">
  <i-select v-model="value1">
    <i-option v-for="(item, index) in options" :key="index" :value="item.value">{{item.name}}<i-option>
  </i-select>
  <em>value:  {{value1}}</em>
</div>

::: demo

```html
  <i-select v-model="value1">
    <i-option v-for="(item, index) in options" :key="index" :value="item.value">{{item.name}}<i-option>
  </i-select>
```

:::

#### 分组

<div class="demo-block">
  <i-select v-model="value3">
    <OptionGroup label="水果">
      <i-option value="Apple">Apple</i-option>
      <i-option value="Orange">Orange</i-option>
    </OptionGroup>
    <OptionGroup label="装备">
      <i-option value="phone">iPhone</i-option>
      <i-option value="im">iMac</i-option>
      <i-option value="mbp">Macbook Pro</i-option>
    </OptionGroup>
    <OptionGroup label="装备">
      <i-option value="phone">iPhone</i-option>
      <i-option value="im">iMac</i-option>
      <i-option value="mbp">Macbook Pro</i-option>
    </OptionGroup>
  </i-select>
  
</div>

::: demo

```html
  <i-select v-model="value3">
    <OptionGroup label="水果">
      <i-option value="Apple">Apple</i-option>
      <i-option value="Orange">Orange</i-option>
    </OptionGroup>
    <OptionGroup label="装备">
      <i-option value="phone">iPhone</i-option>
      <i-option value="im">iMac</i-option>
      <i-option value="mbp">Macbook Pro</i-option>
    </OptionGroup>
    <OptionGroup label="装备">
      <i-option value="phone">iPhone</i-option>
      <i-option value="im">iMac</i-option>
      <i-option value="mbp">Macbook Pro</i-option>
    </OptionGroup>
  </i-select>
```

:::

<script>
export default {
  data(){
    return {
      value1: '',
      value2: true,
      value3: '',
      options: [
        {
          name:'Apple',
          value:'Apple',
        },
        {
          name:'Banana',
          value:'Banana',
        },
        {
          name:'Orange',
          value:'Orange',
        },
        {
          name:'Mango',
          value:'Mango',
        },
      ],
    }
  },
  methods:{
    fn(){
      alert(this.value)
    }
  }
}
</script>

#### Select Attributes

| 参数        | 说明                            | 类型          | 默认值 |
| ----------- | ------------------------------- | ------------- | ------ |
| value       | 使用 v-model 双向绑定数据       | String,Number | -      |
| placeholder | placeholder 占位提示            | String,Number | -      |
| disabled    | 禁用当前项                      | Boolean       | false  |
| label       | 在 OptionGroup 上使用，分组名称 | String,Number | -      |

#### Select Events

| 事件名    | 说明                                       | 返回值 |
| --------- | ------------------------------------------ | ------ |
| on-change | 在选项状态发生改变时触发，返回当前选择的值 | -      |
