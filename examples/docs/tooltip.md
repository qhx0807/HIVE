# Tooltip 文字提示

取代系统的 title 提示

---

按钮元素

<div class="demo-block">
  <Tooltip :content="value1" always>
    <i-button type="primary">Primary</i-button>
  </Tooltip>
</div>

::: demo
```html
  <Tooltip :content="value1" always>
    <i-button type="primary">Primary</i-button>
  </Tooltip>
```
:::

输入框

<div class="demo-block">
  <Tooltip :content="value1" placement="top-start" always>
     <i-input type="text" prefix="icon-user" style="width:250px;" placeholder="your name..."></i-input>
  </Tooltip>
  <Tooltip :content="value1" placement="top-center">
     <i-input type="text" prefix="icon-user" style="width:250px;" placeholder="your name..."></i-input>
  </Tooltip>
</div>

::: demo
```html
  <Tooltip :content="value1" placement="top-center" always>
     <i-input type="text" prefix="icon-user" style="width:250px;" placeholder="your name..."></i-input>
  </Tooltip>
```
:::

<!-- | trigger   | 触发方式 | String         | hover, click, focus                                    | hover     | -->

#### Tooltip Attributes

| 参数      | 说明     | 类型           | 可选值                                                 | 默认值    |
| --------- | -------- | -------------- | ------------------------------------------------------ | --------- |
| width     | 宽度     | Number，String | -                                                      | 250       |
| content   | 提示内容 | String         | -                                                      | -         |
| placement | 位置     | String         | top-start, top-center, top-end, left-, right-, bottom- | top-start |

<script>
export default {
  data(){
    return {
      value1: '取代系统的title提示',
      value2: '',
      value3: '',
    }
  },
  methods:{
    fn(){
      alert(this.value)
    }
  }
}
</script>
