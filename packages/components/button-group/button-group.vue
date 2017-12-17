<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ButtonGroup',
  props: {
    size: {
      type: String,
      default: 'default'
    },
    shape: String,
    vertical: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      prefixCls: 'ive-btn-group',
      isIcon: true,
    }
  },
  computed: {
    classes(){
      return [
        `${this.prefixCls}`,
        {
          [`${this.prefixCls}-${this.size}`]: !!this.size,
          [`${this.prefixCls}-${this.shape}`]: !!this.shape,
          [`${this.prefixCls}-vertical`]: this.vertical
        }
      ]
    }
  }
}
</script>