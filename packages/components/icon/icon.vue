<template>
  <i :class="classes" :style="styles"></i>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    type: String,
    size: [Number, String],
    color: String
  },
  computed: {
    classes () {
      return [
        `iconfont`,
        `${this.type}`
      ]
    },
    styles () {
      let ret = {}

      if (this.size) {
        ret.fontSize = `${this.size}px`
      }

      if (this.color) {
        ret.color = this.color
      }

      return ret
    }
  }
}
</script>


