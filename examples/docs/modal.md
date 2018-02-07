# Modal 对话框

---

<div class="demo-block">
  <i-button type="primary" @click="fn">Open Modal</i-button>
  <Modal v-model="modal"></Modal>
</div>


<script>
export default {
  data(){
    return {
      modal: false
    }
  },
  methods:{
    fn(){
      this.modal = true
      console.log(this.modal)
    }
  }
}
</script>
