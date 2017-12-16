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

<div class="demo-block">
  <i-button type="primary" shape="circle" icon="icon-user">1</i-button>
  <i-button type="success" shape="circle" icon="icon-user"></i-button>
  <i-button type="info">Info</i-button>
  <i-button type="success" shape="circle">Success</i-button>
  <i-button type="success" shape="circle">Success</i-button>
</div>












#### Button Attributes

| 参数     | 说明                         | 类型    | 可选值                                         | 默认值  |
| -------- | ---------------------------- | ------- | ---------------------------------------------- | ------- |
| size     | 尺寸                         | String  | default,small,large                            | default |
| type     | 类型                         | String  | primary,success,warning,danger,info,ghost,text | —       |
| shape    | 按钮形状                     | String  | circle                                         | -       |
| long     | 按钮的长度为 100%            | Boolean | true,false                                     | false   |
| icon     | 图标，已有的图标库中的图标名 | string  | —                                              | —       |
| disabled | 设置按钮为禁用状态           | Boolean | true,false                                     | false   |
| loading  | 加载中状态                   | Boolean | true,false                                     | false   |
