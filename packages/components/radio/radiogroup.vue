<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'RadioGroup',
  props: {
    vertical:{
      type:Boolean,
      default:false
    },
    value: {
      type: [String, Number],
      default: ''
    },
  },
  data () {
    return {
      prefixCls:'ive-radio-group',
      currentValue: this.value,
    }
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  computed: {
    classes () {
      return [
        `${this.prefixCls}`,
        {
          [`${this.prefixCls}-vertical`] : this.vertical
        }
      ]
    }
  },
  mounted () {
    this.updateValue()
  },
  methods: {
    updateValue () {
      let value = this.value
      this.$children.forEach(child => {
        child.group = true
        child.currentValue = value == child.label
      })
    },
    change (data) {
      this.currentValue = data.value
      this.updateValue()
      this.$emit('input', data.value)
      this.$emit('on-change', data.value)
    }
  },
  watch: {
      value (val) {
        this.updateValue()
      }
    }
}
</script>

