<template>
  <div class="ive-carousel">
    <div class="ive-carousel-container" :style="styleObj"><slot></slot></div>
    <ul class="ive-carousel-dots">
      <li><button></button></li>
      <li><button></button></li>
      <li><button></button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    height: [Number, String]
  },
  data () {
    return {

    }
  },
  computed: {
    styleObj() {
      if(!this.height) return
      return {
        height: this.height + 'px'
      }
    }
  }
}
</script>

