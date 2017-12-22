<template>
  <div :class="wrapClass" v-clickoutside="hideOptions">
    <div :class="titleClass">
      <input :class="inputClass" :value="currentValue" type="text" @click="clickHandler" :placeholder="placeholder" :readonly="!filterable">
      <Icon type="icon-down" @click.native="clickHandler" :class="iconClass"></Icon>
    </div>
    <transition :name="transitionName">
      <dl :class="optionClass" v-show="optionShow">
        <slot></slot>
      </dl>
    </transition>
  </div>
</template>

<script>
import clickoutside from '../../directives/clickoutside'
export default {
  name:'iSelect',
  props:{
    filterable:{
      type:Boolean,
      default:false
    },
    placeholder:{
      type: [String,Number],
      default: '请选择'
    },
    value: {
      type: [String,Number],
      default: undefined
    },
    disabled:{
      type:Boolean,
      default:false
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  directives: {
    clickoutside
  },
  data () {
    return {
      prefixCls: 'ive-select',
      optionShow:false,
      currentValue: this.value,
      placement: true,
    }
  },
  computed: {
    transitionName(){
      return this.placement ? 'fadeInUp' : 'fadeInBottom'
    },
    wrapClass(){
      return [
        `${this.prefixCls}-wrap`,
        
      ]
    },
    titleClass(){
      return [
        `${this.prefixCls}-title`,
        
      ]
    },
    inputClass(){
      return [
        {
          [`${this.prefixCls}-disabled`] : this.disabled
        }
      ]
    },
    optionClass(){
      return [
        `${this.prefixCls}-option`,
        {
          [`${this.prefixCls}-option-top`] : this.placement,
          [`${this.prefixCls}-option-bottom`] : !this.placement
        }
      ]
    },
    iconClass(){
      return [
        `${this.prefixCls}-title-icon`,
        {
          [`${this.prefixCls}-title-icon-up`] : this.optionShow,
          [`${this.prefixCls}-disabled`] : this.disabled
        }
      ]
    }
  },
  watch: {
    currentValue(val){
      this.$emit('change', val)
      this.$emit('on-change', val)
    }
  },
  methods:{
    clickHandler(event){
      let ec = event.clientY
      let sh = document.body.clientHeight
      if(sh-ec < 300) {
        this.placement = false
      }else{
        this.placement = true
      }
      this.optionShow = ! this.optionShow
    },
    hideOptions(){
      this.optionShow = false
    }
  }
}
</script>

<style lang="less" scoped>
.fadeInUp-enter-active{
    transition: all .25s cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transform: none;
  }
.fadeInUp-enter{
  opacity: 0;
  transform:translateY(-40px);
}

.fadeInBottom-enter-active{
    transition: all .25s cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transform: none;
  }
.fadeInBottom-enter{
  opacity: 0;
  transform:translateY(40px);
}
</style>


