<template>
  <div class="ive-input-wrap">
    <Icon :type="prefix" class="ive-input-preicon"></Icon>
    <input
      :type="type"
      :placeholder="placeholder"
      :class="inputClasses"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :value="inputValue"
      :prefix="prefix"
      :tailfix="tailfix"
      :spellcheck="spellcheck"
      :autofocus="autofocus"
      @keyup.enter="handleEnter"
      @focus="hanleFocus"
      @input="handleInput"
    >
    <Icon :type="tailfix" class="ive-input-tailicon"></Icon>
  </div>
</template>

<script>
export default {
  name: 'iInput',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    maxlength: Number,
    spellcheck: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    prefix: String,
    tailfix: String,
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  data() {
    return {
      preFixCls: 'ive-input',
      inputValue: this.value,
    }
  },
  computed: {
    inputClasses() {
      return [
        `${this.preFixCls}`,
        {
          [`${this.preFixCls}-has-icon`]: !!this.prefix
        }
      ]
    }
  },
  methods: {
    handleEnter(event) {
      this.$emit('on-enter', event)
    },
    hanleFocus(event) {
      this.$emit('on-focus', event)
    },
    handleInput(event) {
      let value = event.target.value
      this.$emit('input', value)
      this.updateValue(value)
      this.$emit('on-change', event)
    },
    updateValue(value) {
      if (value === this.value) return
      this.$emit('input', value)
    }
  },
  created() {
    this.inputValue = this.value
  }
}
</script>
