# Layout 布局

> 栅格系统用于通过一系列的行（row）与列（column）的组合来创建页面布局，你的内容就可以放入这些创建好的布局中。

我们采用24栅格系统，将页面区域 24 等分，以轻松应对大部分布局问题。我们定义了两个组件：`row` 和 `col`，具体使用方法如下：

* 使用row在水平方向创建一行
* 将一组col插入在row中
* 在每个col中，键入自己的内容
* 通过设置col的span参数，指定跨越的范围，其范围是1到24

#### 基础用法

<div class="demo-block">
  <Row>
    <i-col span="24"><div class="grid-fill bg-fill-3">24</div></i-col>
  </Row>
  <Row class-name="m-10">
    <i-col span="8"><div class="grid-fill bg-fill-2">8</div></i-col>
    <i-col span="8"><div class="grid-fill bg-fill-1">8</div></i-col>
    <i-col span="8"><div class="grid-fill bg-fill-2">8</div></i-col>
  </Row>
  <Row class-name="m-10">
    <i-col span="4"><div class="grid-fill bg-fill-2">4</div></i-col>
    <i-col span="4"><div class="grid-fill bg-fill-1">4</div></i-col>
    <i-col span="4"><div class="grid-fill bg-fill-2">4</div></i-col>
    <i-col span="4"><div class="grid-fill bg-fill-1">4</div></i-col>
    <i-col span="4"><div class="grid-fill bg-fill-2">4</div></i-col>
    <i-col span="4"><div class="grid-fill bg-fill-1">4</div></i-col>
  </Row>
</div>

::: demo
```html
  <Row>
    <i-col span="24"><div class="grid-fill bg-fill-3">24</div></i-col>
  </Row>
  <Row class-name="m-10">
    <i-col span="8"><div class="grid-fill bg-fill-2">8</div></i-col>
    <i-col span="8"><div class="grid-fill bg-fill-1">8</div></i-col>
    <i-col span="8"><div class="grid-fill bg-fill-2">8</div></i-col>
  </Row>
  <Row class-name="m-10">
    <i-col span="4"><div class="grid-fill bg-fill-2">4</div></i-col>
    <i-col span="4"><div class="grid-fill bg-fill-1">4</div></i-col>
    <i-col span="4"><div class="grid-fill bg-fill-2">4</div></i-col>
    <i-col span="4"><div class="grid-fill bg-fill-1">4</div></i-col>
    <i-col span="4"><div class="grid-fill bg-fill-2">4</div></i-col>
    <i-col span="4"><div class="grid-fill bg-fill-1">4</div></i-col>
  </Row>
```
:::

#### 区块间隔

给 `Row` 组件指定 `gutter` 属性来设置每一栏之间的间隔，单位为`px`,默认为`0`
<div class="demo-block">
  <Row :gutter="12">
    <i-col span="6"><div class="grid-fill bg-fill-2">6</div></i-col>
    <i-col span="6"><div class="grid-fill bg-fill-2">6</div></i-col>
    <i-col span="6"><div class="grid-fill bg-fill-2">6</div></i-col>
    <i-col span="6"><div class="grid-fill bg-fill-2">6</div></i-col>
  </Row>
</div>

::: demo
```html
  <Row :gutter="12">
    <i-col span="6"><div class="grid-fill bg-fill-2">6</div></i-col>
    <i-col span="6"><div class="grid-fill bg-fill-2">6</div></i-col>
    <i-col span="6"><div class="grid-fill bg-fill-2">6</div></i-col>
    <i-col span="6"><div class="grid-fill bg-fill-2">6</div></i-col>
  </Row>
```
:::

#### 栅格顺序

通过 `Flex` 布局的 `order` 属性来改变栅格的顺序。
<div class="demo-block">
  <Row :gutter="12">
    <i-col span="6" order="4"><div class="grid-fill bg-fill-2">1 | order=4</div></i-col>
    <i-col span="6" order="3"><div class="grid-fill bg-fill-2">2 | order=3</div></i-col>
    <i-col span="6" order="2"><div class="grid-fill bg-fill-2">3 | order=2</div></i-col>
    <i-col span="6" order="1"><div class="grid-fill bg-fill-2">4 | order=1</div></i-col>
  </Row>
</div>

::: demo
```html
  <Row :gutter="12">
    <i-col span="6" order="4"><div class="grid-fill bg-fill-2">1 | order=4</div></i-col>
    <i-col span="6" order="3"><div class="grid-fill bg-fill-2">2 | order=3</div></i-col>
    <i-col span="6" order="2"><div class="grid-fill bg-fill-2">3 | order=2</div></i-col>
    <i-col span="6" order="1"><div class="grid-fill bg-fill-2">4 | order=1</div></i-col>
  </Row>
```
:::


#### 左右偏移
通过设置offset属性，将列进行左右偏移，偏移栅格数为offset的值。
<div class="demo-block">
  <Row>
    <i-col span="8"><div class="grid-fill bg-fill-2">8</div></i-col>
    <i-col span="8" offset="8"><div class="grid-fill bg-fill-2">8 | offset=8</div></i-col>
  </Row>
  <Row class-name="m-10">
    <i-col span="6" offset="8"><div class="grid-fill bg-fill-1">6 | offset=8</div></i-col>
    <i-col span="6" offset="4"><div class="grid-fill bg-fill-1">6 | offset=4</div></i-col>
  </Row>
  <Row class-name="m-10">
    <i-col span="12" offset="8"><div class="grid-fill bg-fill-3">12 | offset=8</div></i-col>
  </Row>
</div>

::: demo
```html
  <Row>
    <i-col span="8"><div class="grid-fill bg-fill-2">8</div></i-col>
    <i-col span="8" offset="8"><div class="grid-fill bg-fill-2">8 | offset=8</div></i-col>
  </Row>
  <Row class-name="m-10">
    <i-col span="6" offset="8"><div class="grid-fill bg-fill-1">6 | offset=8</div></i-col>
    <i-col span="6" offset="4"><div class="grid-fill bg-fill-1">6 | offset=4</div></i-col>
  </Row>
  <Row class-name="m-10">
    <i-col span="12" offset="8"><div class="grid-fill bg-fill-3">12 | offset=8</div></i-col>
  </Row>
```
:::

#### 对齐方式
通过给 `row` 设置属性 `align` 和 `justify` 为不同的值，来定义子元素在垂直方向上和水平方向上的排布方式。
<div class="demo-block">
  <Row justify="center" align="top">
    <i-col span="4"><p style="height: 50px" class="grid-fill bg-fill-2">col-4</p></i-col>
    <i-col span="4"><p style="height: 80px" class="grid-fill bg-fill-1">col-4</p></i-col>
    <i-col span="4"><p style="height: 30px" class="grid-fill bg-fill-2">col-4</p></i-col>
    <i-col span="4"><p style="height: 100px" class="grid-fill bg-fill-1">col-4</p></i-col>
    <i-col span="4"><p style="height: 60px" class="grid-fill bg-fill-2">col-4</p></i-col>
  </Row>
  <Row class-name="m-10" justify="center" align="middle">
    <i-col span="4"><p style="height: 50px" class="grid-fill bg-fill-2">col-4</p></i-col>
    <i-col span="4"><p style="height: 80px" class="grid-fill bg-fill-1">col-4</p></i-col>
    <i-col span="4"><p style="height: 30px" class="grid-fill bg-fill-2">col-4</p></i-col>
    <i-col span="4"><p style="height: 100px" class="grid-fill bg-fill-1">col-4</p></i-col>
    <i-col span="4"><p style="height: 60px" class="grid-fill bg-fill-2">col-4</p></i-col>
  </Row>
  <Row class-name="m-10" justify="center" align="bottom">
    <i-col span="4"><p style="height: 50px" class="grid-fill bg-fill-2">col-4</p></i-col>
    <i-col span="4"><p style="height: 80px" class="grid-fill bg-fill-1">col-4</p></i-col>
    <i-col span="4"><p style="height: 30px" class="grid-fill bg-fill-2">col-4</p></i-col>
    <i-col span="4"><p style="height: 100px" class="grid-fill bg-fill-1">col-4</p></i-col>
    <i-col span="4"><p style="height: 60px" class="grid-fill bg-fill-2">col-4</p></i-col>
  </Row>
</div>

::: demo
```html
  <Row justify="center" align="top">
    <i-col span="4"><p style="height: 50px" class="grid-fill bg-fill-2">col-4</p></i-col>
    <i-col span="4"><p style="height: 80px" class="grid-fill bg-fill-1">col-4</p></i-col>
    <i-col span="4"><p style="height: 30px" class="grid-fill bg-fill-2">col-4</p></i-col>
    <i-col span="4"><p style="height: 100px" class="grid-fill bg-fill-1">col-4</p></i-col>
    <i-col span="4"><p style="height: 60px" class="grid-fill bg-fill-2">col-4</p></i-col>
  </Row>
  <Row class-name="m-10" justify="center" align="middle">
    ...
  </Row>
  <Row class-name="m-10" justify="center" align="bottom">
    ...
  </Row>
```
:::

#### 响应式布局

`span` `pull` `push` `offset` `order` 属性可以通过内嵌到 `xs` `sm` `md` `lg` 属性中来使用。其中 `:xs="6"` 相当于` :xs="{ span: 6 }"`  改变浏览器窗口大小观察下面布局变化。
<div class="demo-block">
  <Row>
    <i-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }"><div class="grid-fill bg-fill-1"></div></i-col>
    <i-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }"><div class="grid-fill bg-fill-1"></div></i-col>
    <i-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }"><div class="grid-fill bg-fill-1"></div></i-col>
  </Row>
</div>

::: demo
```html
  <Row>
    <i-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }"><div class="grid-fill bg-fill-1"></div></i-col>
    <i-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }"><div class="grid-fill bg-fill-1"></div></i-col>
    <i-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }"><div class="grid-fill bg-fill-1"></div></i-col>
  </Row>
```
:::

#### Row Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type      | 布局模式，可选值为flex或不选，在现代浏览器下有效   | String  |   -   |   flex    |
| gutter    | 栅格间距，单位 px，左右平分   | Number    |   - |     0    |
| align     | 子元素垂直对齐方式   | String    | top、middle、bottom | -   |
| justify   | 子元素水平对齐方式    | String   | start、end、center、space-around、space-between   | -   |
| class-name  | 自定义的class名 | String   |  -  |  -  |

#### Col Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| span      | 栅格的占位格数，可选值为0~24的整数，为 0 时，相当于display:none   | Number / String  |   -   |   -    |
| order     | 栅格的顺序   | Number / String    |   - |     -    |
| offset    | 子元素垂直对齐方式   | String    | - | -   |
| push      | 栅格向右移动格数    | Number / String    | -   | -   |
| pull      | 栅格向左移动格数    | Number / String    | -   | -   |
| class-name  | 自定义的class名 | String   |  -  |  -  |
| xs        | <768px 响应式栅格，可为栅格数或一个包含其他属性的对象 | String / Object   |  -  |  -  |
| sm        | ≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象 | String / Object   |  -  |  -  |
| md        | ≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象 | String / Object   |  -  |  -  |
| lg        | ≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象 | String / Object   |  -  |  -  |