# Tooltip 文字提示

取代系统的title提示

---

<div class="demo-block">
  <Tooltip :content="value1" placement="top-start">
    <i-button type="primary">Primary</i-button>
  </Tooltip>
</div>


<script>
export default {
  data(){
    return {
      value1: '取代系统的title提示取代系统的title提示取代系统的title提示取代系统的title提示',
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
