# Modal 对话框

---

#### 基本使用

<div class="demo-block">
  <i-button type="primary" @click="modal1=true">Open Modal1</i-button>
  <i-button type="primary" @click="modal2=true">Open Modal2</i-button>
  <Modal v-model="modal1" title="Modal Title"  esc-closable>
    <div>123</div>
    <div slot="footer">
      <i-button type="primary">自定义底部按钮</i-button>
    </div>
  </Modal>
  <Modal v-model="modal2" title="Modal Title" @on-ok="ok" esc-closable>
  </Modal>
</div>

::: demo
```html
  <Modal v-model="modal1" title="Modal Title"  esc-closable>
    <div>123</div>
    <div slot="footer">
      <i-button type="primary">自定义底部按钮</i-button>
    </div>
  </Modal>
  <Modal v-model="modal2" title="Modal Title" @on-ok="ok" esc-closable></Modal>
```
:::

#### 实例化调用

封装了一些实例方法，用来创建一次性的轻量级对话框。实例以隐式创建`Vue`组件的方式在全局创建一个对话框，并在消失时移除，所以同时只能操作一个对话框。
自定义配置：

```javascript
this.$Modal(options)
this.$Modal.remove() // 移除
```


<div class="demo-block">
  <i-button type="info" @click="show('info')">info</i-button>
  <i-button type="success" @click="show('success')">success</i-button>
  <i-button type="warning" @click="show('warning')">warning</i-button>
  <i-button type="error" @click="show('error')">error</i-button>
  <i-button type="primary" @click="show('confirm')">confirm</i-button>
</div>

::: demo
```html
  <i-button type="info" @click="show('info')">info</i-button>
  <i-button type="success" @click="show('success')">success</i-button>
  <i-button type="warning" @click="show('warning')">warning</i-button>
  <i-button type="error" @click="show('error')">error</i-button>
  <i-button type="primary" @click="show('confirm')">confirm</i-button>
  <script>
    show(type){
      this.$Modal({
        type: type,
        title: 'Modal Title',
        content: 'hehehe!',
        loading: true,
        onOk: () => {
          this.$Message.info('Clicked ok')
          this.$Modal.remove()
        },
        onCancel: () => {
          this.$Message.info('Clicked cancel')
          this.$Modal.remove()
        }
      })
    }
  </script>
```
:::

<script>
export default {
  data(){
    return {
      modal1: false,
      modal2: false,
      value1: 'tooltip'
    }
  },
  methods:{
    fn(){
      this.modal1 = true
    },
    ok(){
      this.modal2 = false
    },
    show(type){
      this.$Modal({
        type: type,
        title: 'Modal Title',
        content: 'hehehe!',
        loading: true,
        onOk: () => {
          this.$Message.info('Clicked ok')
          this.$Modal.remove()
        },
        onCancel: () => {
          this.$Message.info('Clicked cancel')
          this.$Modal.remove()
        }
      })
    }
  }
}
</script>

#### Modal Attributes

| 参数             | 说明                                    | 类型          | 默认值 |
| ---------------- | --------------------------------------- | ------------- | ------ |
| value            | 对话框是否显示，可使用 v-model 双向绑定 | Boolean       | false  |
| width            | modal 宽度，单位 px                     | String,Number | 520    |
| title            | modal title                             | String,Number | -      |
| center           | modalTitle 居中                         | Boolean       | false  |
| backdrop         | 是否显示背景遮罩层                      | Boolean       | true   |
| escClosable      | Esc 关闭 Modal                          | Boolean       | false  |
| backdropClosable | 点击背景关闭 Modal                      | Boolean       | false  |
| loading          | 确认按钮 Loading                        | Boolean       | false  |

#### Modal Slot

| 名称   | 说明                |
| ------ | ------------------- |
| -      | Modal 内容          |
| footer | 自定义 Modal footer |

#### Modal Events

| 事件名    | 说明               | 返回值 |
| --------- | ------------------ | ------ |
| on-cancel | 点击“取消”按钮事件 | -      |
| on-ok     | 点击“确认”按钮事件 | -      |
