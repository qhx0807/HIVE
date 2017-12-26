<template>
  <div :class="wrapClass" :style="styles" v-clickoutside="closeHandler">
    <input :class="inputClass" @click="clickHandler" type="text">
    <Icon type="icon-riqi" :class="iconClass"></Icon>
    <transition :name="transitionName">
      <div :class="optionClass" v-show="pickerShow">
        1231232
      </div>
    </transition>
  </div>
</template>

<script>
import clickoutside from '../../directives/clickoutside'
export default {
  name: 'DatePicker',
  props: {
    width: {
      type: [String, Number]
    }
  },
  data() {
    return {
      prefixCls: 'ive-dp',
      placement: true,
      pickerShow:false,
    }
  },
  computed: {
    transitionName() {
      return this.placement ? 'fadeInUp' : 'fadeInBottom'
    },
    styles() {
      if (this.width) {
        return {
          width: `${this.width}px`
        }
      }
    },
    wrapClass() {
      return [`${this.prefixCls}-wrap`]
    },
    inputClass() {
      return [`${this.prefixCls}-input`]
    },
    iconClass() {
      return [`${this.prefixCls}-icon`]
    },
    optionClass(){
      return [`${this.prefixCls}-option`]
    }
  },
  directives: {
    clickoutside
  },
  methods: {
    clickHandler(event){
      let ec = event.clientY
      let sh = document.body.clientHeight
      if(sh-ec < 300) {
        this.placement = false
      }else{
        this.placement = true
      }
      this.pickerShow = ! this.pickerShow
    },
    closeHandler(){
      this.pickerShow = false
    }
  }
}
</script>

<style lang="less" scoped>
.fadeInUp-enter-active {
  transition: all 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: none;
}
.fadeInUp-enter {
  opacity: 0;
  transform: translateY(-40px);
}

.fadeInBottom-enter-active {
  transition: all 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: none;
}
.fadeInBottom-enter {
  opacity: 0;
  transform: translateY(40px);
}
</style>
