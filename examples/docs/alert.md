# Alert 提示

---

#### 基础用法

基本使用

<div class="demo-block">
  <i-alert type="info" title="文字说明文字说明文字说明文字说明文字说明文字说明" ></i-alert>
  <br>
  <i-alert type="success" title="成功的提示" desc="文字说明文字说明文字说明文字说明文字说明文字说明" ></i-alert>
  <br>
  <i-alert type="error" title="错误的提示" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></i-alert>
</div>

::: demo

```html
  <i-alert type="info" title="文字说明文字说明文字说明文字说明文字说明文字说明" ></i-alert>
  <i-alert type="success" title="成功的提示" desc="文字说明文字说明文字说明文字说明文字说明文字说明" ></i-alert>
  <i-alert type="error" title="错误的提示" desc="文字说明文字说明文字说明文字说明文字说明文字说明"></i-alert>
```

:::

#### 使用 icon

`show-icon`

<div class="demo-block">
  <i-alert type="warning" title="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon></i-alert>
  <br>
  <i-alert type="success" title="成功的提示" desc="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon></i-alert>
</div>

::: demo

```html
  <i-alert type="warning" title="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon></i-alert>
  <i-alert type="success" title="成功的提示" desc="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon></i-alert>
```

:::

#### 可关闭

`closable`

<div class="demo-block">
  <i-alert type="info" title="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon closable></i-alert>
  <br>
  <i-alert type="error" title="错误的提示" desc="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon closable></i-alert>
</div>

::: demo

```html
  <i-alert type="info"  show-icon closable></i-alert>
  <i-alert type="error" title="错误的提示" desc="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon closable></i-alert>
```

:::

#### Alert Attributes

| 参数      | 说明             | 类型    | 可选值                     | 默认值 |
| --------- | ---------------- | ------- | -------------------------- | ------ |
| type      | 主题             | String  | success,warning,info,error | info   |
| title     | 标题，必选参数   | String  | -                          | -      |
| desc      | 详细描述         | String  | -                          | -      |
| closable  | 是否显示关闭按钮 | Boolean | -                          | false  |
| show-icon | 是否显示主题图标 | Boolean | -                          | false  |
