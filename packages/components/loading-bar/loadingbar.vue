<template>
  <div class="ive-loadingbar" :style="styleObj">
    <div class="ive-loadingbar-peg"></div>
    <div :style="errorObj" class="ive-loadingbar-spinner"></div>
  </div>
</template>

<script>
export default {
  name: 'LoadingBar',
  data() {
    return {
      status: 'start',
      width: '0%',
      bgColor: '#3faaf5',
      timer: null,
    }
  },
  created() {},
  computed: {
    styleObj() {
      return {
        backgroundColor: this.bgColor,
        width: this.width,
      }
    },
    errorObj(){
      let obj = {
        borderLeftColor: '#ff6600',
        borderTopColor: '#ff6600'
      }
      return this.status === 'error' ? obj : {}
    }
  },
  mounted () {
    setTimeout(()=>{
      this.width = '10%'
    }, 200)
  },
  beforeDestroy () {
    if (this.timer) clearInterval(this.timer)
  },
  methods: {
    destroyElement() {
      if(!this.$el.parentNode) return
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    }
  }
}
</script>
