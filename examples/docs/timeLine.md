# TimeLine 时间线

#### 基础用法

<div class="demo-block">
  <Timeline pending>
    <TimelineItem color="#f90">
      <b style="font-size:15px;">重庆当代力帆主场</b>
      <p>选座购买每单限6张，立即购买每单限20张。</p>
    </TimelineItem>
    <TimelineItem>
      <b style="font-size:15px;">重庆当代力帆主场</b>
      <p>选座购买每单限6张，立即购买每单限20张。</p>
    </TimelineItem>
    <TimelineItem>
      <b style="font-size:15px;">重庆当代力帆主场</b>
      <p>选座购买每单限6张，立即购买每单限20张。</p>
    </TimelineItem>
    <TimelineItem><a href="#">查看更多</a></TimelineItem>
  </Timeline>
</div>

::: demo
```html
<Timeline pending>
  <TimelineItem color="#f90">
    <b style="font-size:15px;">重庆当代力帆主场</b>
    <p>选座购买每单限6张，立即购买每单限20张。</p>
  </TimelineItem>
  <TimelineItem>
    <b style="font-size:15px;">重庆当代力帆主场</b>
    <p>选座购买每单限6张，立即购买每单限20张。</p>
  </TimelineItem>
  <TimelineItem>
    <b style="font-size:15px;">重庆当代力帆主场</b>
    <p>选座购买每单限6张，立即购买每单限20张。</p>
  </TimelineItem>
  <TimelineItem><a href="#">查看更多</a></TimelineItem>
</Timeline>
```
:::

#### 自定义icon

<div class="demo-block">
  <Timeline pending>
    <TimelineItem color="#f90">
      <Icon type="icon-mic" slot="icon" color="red"></Icon>
      <p style="font-size:12px;">重庆当代力帆</p>
    </TimelineItem>
    <TimelineItem>
      <p style="font-size:12px;">重庆当代力帆</p>
    </TimelineItem>
    <TimelineItem>
      <p style="font-size:12px;">重庆当代力帆</p>
    </TimelineItem>
    <TimelineItem><a href="#">查看更多</a></TimelineItem>
  </Timeline>
</div>

::: demo
```html
<Timeline pending>
  <TimelineItem color="#f90">
    <Icon type="icon-mic" slot="icon" color="red"></Icon>
    <p style="font-size:12px;">重庆当代力帆</p>
  </TimelineItem>
  <TimelineItem>
    <p style="font-size:12px;">重庆当代力帆</p>
  </TimelineItem>
  <TimelineItem>
    <p style="font-size:12px;">重庆当代力帆</p>
  </TimelineItem>
  <TimelineItem><a href="#">查看更多</a></TimelineItem>
</Timeline>
```
:::

#### TimeLine Attributes

| 参数       | 说明                  | 类型    |  默认值 |
| ---------- | --------------------- | ------- |  ------ |
| pending     | 是否显示最后一个虚线节点            | Boolean  | false     |

#### TimeLineItem Attributes

| 参数       | 说明                  | 类型    |  默认值 |
| ---------- | --------------------- | ------- |  ------ |
| color     | 圆圈颜色           | String  | #2d8cf0     |

#### TimeLineItem slot

| 名称       | 说明                  |
| ---------- | --------------------- |
| icon     | 自定义节点icon           |
