# Input 输入框

基本表单组件

#### 基础用法

<div class="demo-block">
  <i-input type="text" style="width:250px;" placeholder="your name..."></i-input>
</div>

::: demo

```html
  <i-input type="text" style="width:250px;" placeholder="your name..."></i-input>
```

:::

#### 状态

<div class="demo-block">
  <i-input type="text" disabled style="width:250px;" placeholder="your name..."></i-input>
</div>

::: demo

```html
  <i-input type="text" disabled style="width:250px;" placeholder="your name..."></i-input>
```

:::

#### 前后 ICON

<div class="demo-block">
  <i-input type="text" prefix="icon-user" style="width:250px;" placeholder="your name..."></i-input>
  <i-input type="text" tailfix="icon-user" style="width:250px;" placeholder="your name..."></i-input>
</div>

::: demo

```html
  <i-input type="text" prefix="icon-user" style="width:250px;" placeholder="your name..."></i-input>
  <i-input type="text" tailfix="icon-user" style="width:250px;" placeholder="your name..."></i-input>
```

:::

#### Input Attributes

| 参数        | 说明                              | 类型    | 可选值     | 默认值 |
| ----------- | --------------------------------- | ------- | ---------- | ------ |
| placeholder | 占位文本                          | String  | -          | -      |
| value       | 绑定的值，可使用 v-model 双向绑定 | -       | -          | -      | - |
| disabled    | 设置输入框为禁用状态              | Boolean | true,false | false  |
| readonly    | 设置输入框为只读                  | Boolean | true,false | false  |
| prefix      | 前置 icon                         | String  | -          | -      |
| tailfix     | 后置 icon                         | String  | -          | -      |
| spellcheck  | 原生 input spellcheck             | Boolean | true,false | false  |
| autofocus  | 原生 input autofocus             | Boolean | true,false | false  |
| maxlength  | 最大输入长度             | Number | - | -  |

#### Input Events

| 参数      | 说明             | 返回值 |
| --------- | ---------------- | ------ |
| on-enter  | 按下回车键时触发 | -      |
| on-change | 数据改变时触发   | event  |
| on-focus  | focus 时触发     | event  |
