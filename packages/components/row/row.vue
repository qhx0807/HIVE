<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Row',
  props: {
    type: {
      type: String,
      default: 'flex'
    },
    gutter: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: 'top'
    },
    justify: {
      type: String,
      default: 'srtart'
    },
    className: String
  },
  data () {
    return {
      prefixCls: 'ive-row'
    }
  },
  computed: {
    classes() {
      return [
        `${this.prefixCls}-flex`,
        {
          [`${this.prefixCls}-${this.type}-${this.align}`]: !!this.align,
          [`${this.prefixCls}-${this.type}-${this.justify}`]: !!this.justify,
          [`${this.className}`]: !!this.className
        }
      ]
    },
    styles() {
      let rst = {}
      if (this.gutter !== 0) {
        rst = {
          marginLeft: this.gutter / -2 + 'px',
          marginRight: this.gutter / -2 + 'px'
        }
      }
      return rst
    }
  }
}
</script>