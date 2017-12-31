# Progress 进度条

#### 基础用法

<div class="demo-block">
  <i-progress width="400" :percent="79"></i-progress>
  <br>
  <br>
  <i-progress width="400" :percent="100"></i-progress>
  <br>
  <br>
  <i-progress width="400" :percent="79" error></i-progress>
</div>

::: demo

```html
<i-progress width="400" :percent="79"></i-progress>
<i-progress width="400" :percent="100"></i-progress>
<i-progress width="400" :percent="79" error></i-progress>
```

:::

#### Progress Attributes

| 参数    | 说明                   | 类型          | 默认值 |
| ------- | ---------------------- | ------------- | ------ |
| width   | progress 宽度，单位 px | String,Number | 100%   |
| height  | progress 高度，单位 px | String,Number | 8      |
| percent | progress 进度          | Number        | 0      |
| error   | 错误状态               | Boolean       | false  |
