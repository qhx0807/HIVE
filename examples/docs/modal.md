# Modal 对话框

---

<div class="demo-block">
  <i-button type="primary" @click="modal1=true">Open Modal1</i-button>
  <i-button type="primary" @click="modal2=true">Open Modal2</i-button>
  <Modal v-model="modal1" title="Modal Title"  esc-closable>
    <div>123</div>
    <div slot="footer">456</div>
  </Modal>
  <Modal v-model="modal2" title="Modal Title" @on-ok="ok" esc-closable>
  </Modal>
</div>

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
