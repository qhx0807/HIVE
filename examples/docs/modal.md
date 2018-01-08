# Modal 对话框

---

<div class="demo-block">
  <i-button type="primary">Open Modal</i-button>
  <Modal></Modal>
</div>


<script>
export default {
  data(){
    return {
      value1: '',
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
