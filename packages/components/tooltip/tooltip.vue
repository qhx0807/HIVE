<template>
  <div class="ive-tooltip-wrap">
    <div class="ive-tooltip-el">
      <slot></slot>
    </div>
    <transition name="fade">
      <div :class="popperClass" :placement="placement">
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
    placement:String,
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

  }
}
</script>

