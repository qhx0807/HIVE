# Button 按钮

基础组件，触发业务逻辑时使用。

---

#### 基础用法

<div class="demo-block">
  <i-button>Default</i-button>
  <i-button type="primary">Primary</i-button>
  <i-button type="ghost">Ghost</i-button>
  <i-button type="dashed">Dashed</i-button>
  <i-button type="text">Text</i-button>
  <i-button type="info">Info</i-button>
  <i-button type="success">Success</i-button>
  <i-button type="warning">Warning</i-button>
  <i-button type="error">Error</i-button>
  
</div>

::: demo

```html
  <i-button>Default</i-button>
  <i-button type="primary">Primary</i-button>
  <i-button type="ghost">Ghost</i-button>
  <i-button type="dashed">Dashed</i-button>
  <i-button type="text">Text</i-button>
  <i-button type="info">Info</i-button>
  <i-button type="success">Success</i-button>
  <i-button type="warning">Warning</i-button>
  <i-button type="error">Error</i-button>
```

:::

#### 图标及形状
`icon` 设置按钮图标，从图标库中选择图标， `circle` 属性设置圆角按钮

<div class="demo-block">
  <i-button type="primary" shape="circle" icon="icon-user">Name</i-button>
  <i-button type="success" shape="circle" icon="icon-user"></i-button>
  <i-button type="success" shape="circle">Success</i-button>
  <i-button type="ghost" shape="circle" icon="icon-upload">Upload</i-button>
</div>

::: demo
```html
  <i-button type="primary" shape="circle" icon="icon-user">Name</i-button>
  <i-button type="success" shape="circle" icon="icon-user"></i-button>
  <i-button type="success" shape="circle">Success</i-button>
  <i-button type="ghost" shape="circle" icon="icon-upload">Upload</i-button>
```
:::

#### 按钮组

用 `ButtonGroup` 组件将按钮包含在一起组成按钮组

<div class="demo-block">
  <ButtonGroup>
    <i-button type="primary">S</i-button>
    <i-button type="primary">M</i-button>
    <i-button type="primary">L</i-button>
    <i-button type="primary">xL</i-button>
  </ButtonGroup>
</div>

::: demo
```html
  <ButtonGroup>
    <i-button type="primary">S</i-button>
    <i-button type="primary">M</i-button>
    <i-button type="primary">L</i-button>
    <i-button type="primary">xL</i-button>
  </ButtonGroup>
```
:::

#### 状态

禁用 `disabled` ，加载中 `loading`

<div class="demo-block">
  <i-button type="primary" loading>Submit</i-button>
  <i-button type="primary" icon="icon-user" disabled>Submit</i-button>
  <i-button type="primary" :loading="loading" @click="triger">click me</i-button>
</div>

::: demo
```html
  <i-button type="primary" loading>Submit</i-button>
  <i-button type="primary" icon="icon-user" disabled>Submit</i-button>
  <i-button type="primary" :loading="loading" @click="triger">click me</i-button>
```
:::



#### Button Attributes

| 参数     | 说明                         | 类型    | 可选值                                         | 默认值  |
| -------- | ---------------------------- | ------- | ---------------------------------------------- | ------- |
| size     | 尺寸                         | String  | default,small,large                            | - |
| type     | 类型                         | String  | primary,success,warning,danger,info,ghost,text | -      |
| shape    | 按钮形状                     | String  | circle                                         | -       |
| long     | 按钮的长度为 100%            | Boolean | true,false                                     | false   |
| icon     | 图标，已有的图标库中的图标名 | string  | —                                              | -      |
| disabled | 设置按钮为禁用状态           | Boolean | true,false                                     | false   |
| loading  | 加载中状态                   | Boolean | true,false                                     | false   |

#### ButtonGroup Attributes
| 参数     | 说明                         | 类型    | 可选值                                         | 默认值  |
| -------- | ---------------------------- | ------- | ---------------------------------------------- | ------- |
| size     | 尺寸                         | String  | small,large                            | - |
| shape     | 按钮组形状                         | String  | circle                            | - |
| vertical     | 纵向排列按钮组                         | Boolean  | true,false                            | false |



<script>
export default {
  data(){
    return {
      loading: false
    }
  },
  methods:{
    triger(){
      this.loading = true
    }
  }
}
</script>