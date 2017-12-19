<template>
  <label :class="wrapClasses">
    <span :class="innerClasses">
      <span class="ive-radio-inner-span"></span>
      <input 
      type="radio"
      class="ive-radio-inner-input"
      :value="currentValue"
      :disabled="disabled">
    </span>
    <slot>{{ label }}</slot>
  </label>
</template>

<script>
export default {
  name: 'Radio',
  props: {
    label: [String, Number],
    currentValue:{
      type:Boolean,
      default: false
    },
    disabled:{
      type:Boolean,
      default: false
    }
  },
  data () {
    return {
      prefixCls:'ive-radio',
    }
  },
  computed: {
    wrapClasses(){
      return [
        `${this.prefixCls}-wrap`,
        {
          [`${this.prefixCls}-wrap-checked`] : this.currentValue,
          [`${this.prefixCls}-wrap-disabled`] : this.disabled
        }
      ]
    },
    innerClasses(){
      return [
        `${this.prefixCls}-inner`
      ]
    },
    radioClasses(){
      return [
        `${this.prefixCls}`,
        {
          [`${this.prefixCls}-checked`]: this.currentValue,
          [`${this.prefixCls}-disabled`]: this.disabled
        }
      ]
    }
  }
}
</script>


