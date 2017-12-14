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
    <Col span="12">col</Col>
    <Col span="12">col</Col>
  </Row>
</div>

#### 区块间隔

<div class="demo-block">
  <Row>
    <Col span="12">col</Col>
    <Col span="12">col</Col>
  </Row>
</div>

#### 栅格顺序

<div class="demo-block">
  <Row>
    <Col span="12">col</Col>
    <Col span="12">col</Col>
  </Row>
</div>

#### 左右偏移

<div class="demo-block">
  <Row>
    <Col span="12">col</Col>
    <Col span="12">col</Col>
  </Row>
</div>

#### 对齐方式

<div class="demo-block">
  <Row>
    <Col span="12">col</Col>
    <Col span="12">col</Col>
  </Row>
</div>

#### 响应式布局

<div class="demo-block">
  <Row>
    <Col span="12">col</Col>
    <Col span="12">col</Col>
  </Row>
</div>
