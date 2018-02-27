# Notification 通知消息

---

基本使用

<div class="demo-block">
  <i-button type="primary" @click="fn">Notification</i-button>
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
      this.$Notify()
    }

  }
}
</script>
