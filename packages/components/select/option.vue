<template>
  <dd :selected="selected" :value="value" @click="selectHandler">
    <slot></slot>
  </dd>
</template>

<script>
export default {
  name: 'iOption',
  props:{
    value:{
      type:[String,Number]
    }
  },
  computed: {
    selected(){
      if(this.value === this.$parent.currentValue || this.value === this.$parent.$parent.currentValue){
        return true
      }else{
        return false
      }
      
    }
  },
  methods: {
    selectHandler(event){
      if(this.$parent.$options.name==='iSelect'){
        this.$parent.currentValue = this.value
        this.$parent.optionShow = false
      }else if(this.$parent.$options.name==='OptionGroup' && this.$parent.$parent.$options.name == 'iSelect'){
        this.$parent.$parent.currentValue= this.value
        this.$parent.$parent.optionShow= false
      }
    }
  }
}
</script>

