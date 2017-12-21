<template>
  <label :class="wrapClasses">
    <span :class="innerClasses">
      <span :class="spanClasses"></span>
      <input
        v-if="!group"
        type="checkbox"
        class="ive-checkbox-inner-input"
        :value="value"
        :disabled="disabled"
        :checked="currentValue"
        @change="change">

        <input
        v-if="group"
        v-model="model"
        type="checkbox"
        class="ive-checkbox-inner-input"
        :value="label"
        :disabled="disabled"
        :checked="currentValue"
        @change="change">
    </span>
    <slot>{{ label }}</slot>
  </label>
</template>

<script>
export default {
  name: 'Checkbox',
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
    checked:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      prefixCls: 'ive-checkbox',
      group: false,
      model: [],
      currentValue: this.checked,
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  mounted () {
    if(this.$parent.$options.name === 'CheckboxGroup') {
      this.group = true
      this.$parent.updateValue()
    }else{
      this.currentValue = this.checked
    }
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
    change (event){
      if (this.disabled) return false

      let checked = event.target.checked
      this.currentValue = checked
      this.$emit('change', checked)

      if (!this.group){
        this.$emit('on-change', checked)
      }

      if (this.group){
        this.$parent.change(this.model)
      }

    },
    updateValue () {
    
    }
  },
  watch: {
    value(val){
      this.currentValue = val
    }
  },

}
</script>




