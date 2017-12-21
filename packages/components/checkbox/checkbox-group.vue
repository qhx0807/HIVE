<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CheckboxGroup',
  props: {
    vertical:{
      type:Boolean,
      default:false
    },
    value: {
      type: Array,
      default () {
          return []
      }
    },
  },
  data () {
    return {
      prefixCls:'ive-checkbox-group',
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
    this.$children.forEach((child) => {
        child.group = true
        child.model = this.value
    })
  },
  methods: {
    updateValue () {
      let value = this.value
      this.$children.forEach(child => {
        child.model = value
        child.group = true
        child.currentValue = value.indexOf(child.label) >= 0
      })
    },
    change (data) {
      this.currentValue = data
      this.updateValue()
      this.$emit('input', data)
      this.$emit('on-change', data)
    }
  },
  watch: {
      value (val) {
        this.updateValue()
      }
    }
}
</script>

