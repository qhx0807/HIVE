<template>
  <label :class="wrapClasses">
    <span></span>
    <input 
      type="radio"
      :value="currentValue"
      :disabled="disabled">
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
    }
  }
}
</script>


