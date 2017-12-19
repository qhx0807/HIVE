<template>
  <div :class="wrapClasses">
    <pre :style="styles" v-if="autosize"><span v-html="inputValue"></span><br></pre>
    <textarea 
      :style="styles"
      :class="textClasses" 
      :value="value" 
      :disabled="disabled"
      :placeholder="placeholder"
      :readonly="readonly"
      :spellcheck="spellcheck"
      :autofocus="autofocus"
      :autosize="autosize"
      :maxlength="maxlength"
      @input="handleInput"
      @focus="hanleFocus"
      ></textarea>
      <div v-if="maxlength" class="ive-textarea-limit">
        还可以输入
        <span class="num">{{limitNum}}</span>
        个字
      </div>
  </div>
</template>

<script>
export default {
  name: 'iText',
  props: {
    value: [String, Number],
    placeholder: {
      type: String,
      default: '请输入...'
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
    autosize:{
      type: Boolean,
      default: false,
    },
    height:{
      type:Number,
      default: 65,
    }
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  data() {
    return {
      preFixCls: 'ive-textarea',
      inputValue: this.value,
      limitNum: this.maxlength,
    }
  },
  computed: {
    textClasses(){
      return [
        `${this.preFixCls}`,
        {
          [`${this.preFixCls}-auto`] : this.autosize
        }
      ]
    },
    wrapClasses(){
      return [
        `${this.preFixCls}-wrap`,
        {
          [`${this.preFixCls}-wrap-auto`] : this.autosize
        }
      ]
    },
    styles(){
      return {
        minHeight: `${this.height}px`
      }
    }
  },
  methods: {
    hanleFocus(event) {
      this.$emit('on-focus', event)
    },
    handleInput(event){
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
  watch: {
    value(n, o){
      this.inputValue = n
      this.limitNum = this.maxlength - n.length
    }
  },
  created() {
    this.inputValue = this.value
  }
}
</script>

