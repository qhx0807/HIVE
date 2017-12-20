<template>
  <label :class="wrapClasses">
    <span :class="innerClasses">
      <span :class="spanClasses"></span>
      <input 
      type="radio"
      class="ive-radio-inner-input"
      :value="currentValue"
      :disabled="disabled"
      @change="handleChange">
    </span>
    <slot>{{ label }}</slot>
  </label>
</template>

<script>
export default {
  name: 'Radio',
  props: {
    label: [String, Number],
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    }
  },
  data() {
    return {
      prefixCls: 'ive-radio',
      currentValue: this.value
    }
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  mounted () {
    this.updateValue()
  },
  computed: {
    wrapClasses () {
      return [
        `${this.prefixCls}-wrap`,
        {
          [`${this.prefixCls}-disabled`]: this.disabled,
          [`${this.prefixCls}-checked`]: this.currentValue
        }
      ]
    },
    innerClasses () {
      return [`${this.prefixCls}-inner`]
    },
    spanClasses () {
      return [`${this.prefixCls}-inner-span`]
    }
  },
  methods: {
    handleChange (event){
      if (this.disabled) return false
      let checked = event.target.checked
      let value = checked ? this.trueValue : this.falseValue
      this.$emit('input', value)
      this.$emit('on-change', value)
      this.updateValue()
    },
    updateValue () {
      this.currentValue = this.value === this.trueValue;
    }
  },
  watch: {
    value(val){
      if (val !== this.trueValue && val !== this.falseValue) {
        throw 'error: Value should be trueValue or falseValue.'
      }
      this.updateValue()
    }
  },

}
</script>


