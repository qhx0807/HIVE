# Button 按钮

基础组件，触发业务逻辑时使用。

---
#### 基础用法
<div class="demo-block">
  <i-button type="primary">primary</i-button>
  <i-button type="success">success</i-button>
</div>

::: demo
```html
  <i-button type="primary">primary</i-button>
  <i-button type="success">success</i-button>
```
:::

#### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   default,medium,small            |    —     |
| type     | 类型   | string    |   primary,success,warning,danger,info |     —    |
| plain     | 是否朴素按钮   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
