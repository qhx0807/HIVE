<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'iCol',
  props: {
    span: [Number, String],
    order: [Number, String],
    offset: [Number, String],
    push: [Number, String],
    pull: [Number, String],
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    className: String
  },
  data() {
    return {
      prefixCls: 'ive-col',
      responseCls: ['xs', 'sm', 'md', 'lg']
    }
  },
  computed: {
    gutter() {
      let val = 0
      if (this.$parent && this.$parent.$options._componentTag === 'Row') {
        val = this.$parent.gutter
      }
      return val
    },
    classes() {
      let classList = [
        `${this.prefixCls}`,
        {
          [`${this.prefixCls}-span-${this.span}`]: this.span,
          [`${this.prefixCls}-order-${this.order}`]: this.order,
          [`${this.prefixCls}-offset-${this.offset}`]: this.offset,
          [`${this.prefixCls}-push-${this.push}`]: this.push,
          [`${this.prefixCls}-pull-${this.pull}`]: this.pull,
          [`${this.className}`]: !!this.className
        }
      ]
      
      this.responseCls.forEach(size => {
        if (typeof this[size] === 'number') {
          classList.push(`${this.prefixCls}-span-${size}-${this[size]}`)
        } else if (typeof this[size] === 'object') {
          let props = this[size]
          Object.keys(props).forEach(prop => {
            classList.push(
              prop !== 'span'
                ? `${this.prefixCls}-${size}-${prop}-${props[prop]}`
                : `${this.prefixCls}-span-${size}-${props[prop]}`
            )
          })
        }
      })

      return classList
    },
    styles() {
      let rst = {}
      if (this.gutter !== 0) {
        rst = {
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px'
        }
      }
      return rst
    }
    
  }
}
</script>