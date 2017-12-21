<template>
  <label :disabled="disabled" :class="wrapClasses" @click="toggle">
    <span class="open">
      <slot name="open" v-if="currentValue"></slot>
    </span>
    <span :class="innerClasses"></span>
    <span class="close">
      <slot name="close" v-if="!currentValue"></slot>
    </span>
  </label>   
</template>

<script>
export default {
  name: 'iSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  data() {
    return {
      currentValue: this.value,
      prefixCls:'ive-switch'
    }
  },
  computed: {
    wrapClasses() {
      return [
        `${this.prefixCls}-wrap`,
        {
          [`${this.prefixCls}-checked`] : this.value,
          [`${this.prefixCls}-disabled`] : this.disabled
        }
      ]
    },
    innerClasses() {
      return [
        `${this.prefixCls}-inner`
      ]
    }
  },
  methods: {
    toggle () {
      if(this.disabled) return false
      this.currentValue = ! this.currentValue
      this.$emit('change', this.currentValue)
      this.$emit('on-change', this.currentValue)
    }
  }
}
</script>

