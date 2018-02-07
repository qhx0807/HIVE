<template>
  <div class="ive-modal" v-show="visable">
    <div key="shade" class="ive-modal-shade"></div>
    <transition name="modal">
      <div key="modal" v-show="visable" class="ive-modal-warp">
        <div class="ive-modal-head">title</div>
        <div class="ive-modal-body">body</div>
        <div class="ive-modal-foot">
          <i-button @click="closeModal" type="info">close</i-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import {addClass, removeClass} from '../../utils/domClass'
export default {
  name: 'Modal',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    esc2close: {
      type: Boolean,
      default: false
    },
    backdrop2close: {
      type: Boolean,
      default: false
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  data () {
    return {
      visable: this.value,
      preFixCls: 'ive-modal',
    }
  },
  watch: {
    visable(val){
      this.$emit('change', this.visable)
      if(val){
        addClass(document.getElementsByTagName('body')[0], 'modal-show')
      }else{
        removeClass(document.getElementsByTagName('body')[0], 'modal-show')
      }
    },
    value(val){
      this.visable = val
    }
  },
  created () {
    this.visable = this.value
  },
  methods: {
    closeModal () {
      this.visable = false
      this.$emit('change', this.visable)
    }
  }
}
</script>

<style lang="less" scoped>
.modal-enter-active, .modal-leave-active {
  transition: all .3s;
  opacity: 1;
  transform: scale(1);
}
.modal-enter, .modal-leave-to {
  opacity: 0;
  transform: scale(0.7);
}
</style>

