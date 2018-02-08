# Modal 对话框

---

<div class="demo-block">
  <i-button type="primary" @click="modal1=true">Open Modal1</i-button>
  <i-button type="primary" @click="modal2=true">Open Modal2</i-button>
  <Modal v-model="modal1" title="Modal Title" esc-closable>
  </Modal>
  <Modal v-model="modal2" title="Modal Title" esc-closable>
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
    }
  }
}
</script>
