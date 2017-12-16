# Icon 图标

阿里巴巴矢量图标库 [Iconfont](http://www.iconfont.cn "Iconfont")，国内功能很强大且图标内容很丰富的矢量图标库,提供矢量图标下载、在线存储、格式转换等功能。

#### 基础用法

使用组件 `Icon`

```html
<Icon type="icon-computer"></Icon>
```

渲染后为：

```html
<i class="iconfont icon-computer"></i>
```

<div class="demo-block">
  <Icon type="icon-computer" size="22"></Icon>&nbsp;&nbsp;
  <Icon type="icon-volume" size="22" color="#B1E9F6"></Icon>&nbsp;&nbsp;
  <Icon type="icon-file" size="22" color="orange"></Icon>
</div>

::: demo

```html
  <Icon type="icon-computer" size="22"></Icon>
  <Icon type="icon-volume" size="22" color="#B1E9F6"></Icon>
  <Icon type="icon-file" size="22" color="orange"></Icon>
```

:::

#### 图标示例

<ul class="demo-icon">
  <li v-for="(item, index) in icons" :key="index">
    <span>
      <Icon :type="item" size="24"></Icon>
      {{item}}
    </span>
  </li>
</ul>

<script>
import iconConf from '../icon.config.json'
export default {
  data () {
    return {
      icons: iconConf
    }
  },
}
</script>

<style lang="less" scoped>
  .demo-icon{
    padding:0;
    margin:0;
    list-style: none;
    li{
      float:left;
      width:16%;
      height:120px;
      border: solid 1px #eaeefb;
      margin-right: -1px;
      margin-bottom: -1px;
      text-align:center;
      line-height:120px;
      span{
        vertical-align: middle;
        line-height:normal;
        display: inline-block;
        i{
          display: block;
          margin:0 20px;
          vertical-align: middle;
          margin-bottom:15px;
        }
      }
      
    }
  }
</style>