<template>
  <div class="ive-tooltip-wrap">
    <div class="ive-tooltip-el"
      @mouseover="mouseoverHandler"
      @mouseout="mouseoutHandler">
      <slot></slot>
    </div>
    <transition name="fade">
      <div :class="popperClass" :placement="placement" v-show="visible">
          <div class="ive-tooltip-inner" v-html="content" :style="widthStyle"></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name:'Tooltip',
  props:{
    content: {
      type:String,
    },
    placement:{
      type:String,
      default:'top-start'
    },
    always:{
      type:Boolean,
      default:false
    },
    width:{
      type:[String, Number]
    }
  },
  data () {
    return {
      visible: false,
      prefixCls:'ive-tooltip'
    }
  },
  created () {
    if(this.always){
      this.visible = true
    }else{
      this.visible = false
    }
  },
  computed: {
    widthStyle(){
      if(this.width){
        return {
          width: `${this.width}px`,
          maxWidth: `${this.width}px`
        }
      }
    },
    popperClass(){
      return [
        `${this.prefixCls}-popper`
      ]
    }
  },
  methods: {
    mouseoverHandler(){
      this.visible = true
    },
    mouseoutHandler(){
      setTimeout(()=>{
        this.visible = false
      },100)
    }
  }
}
</script>

