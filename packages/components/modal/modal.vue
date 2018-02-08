<template>
  <div class="ive-modal" v-show="visable" tabindex="-1">
    <div v-show="backdrop" class="ive-modal-shade" ></div>
    <!-- @drop="drop($event)" @dragover="allowDrop($event)" @dragstart="drag($event)" -->
    <transition name="modal">
      <div key="modal"
        class="ive-modal-warp"
        v-show="visable"
        v-clickoutside="onClickBackdrop"
        :style="modalStyle"
        >
        <div class="ive-modal-head"
          :class="{'center' : center}"
          @mousedown="onMouseDown($event)"
          @mousemove="onMouseMove($event)"
          @mouseup="onMouseUp($event)"
          @mouseout="onMouseOut($event)">
          {{title}}
          <i class="iconfont icon-cross" @click="closeModal"></i>
        </div>
        <div class="ive-modal-body">body</div>
        <div class="ive-modal-foot">
          <i-button @click="closeModal" type="text" style="margin-right:5px;">取消</i-button>
          <i-button @click="closeModal" type="primary" style="margin-right:5px;">确定</i-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import {addClass, removeClass} from '../../utils/domClass'
import clickoutside from '../../directives/clickoutside'
export default {
  name: 'Modal',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: [String, Number],
      default: ''
    },
    backdrop: {
      type: Boolean,
      default: true
    },
    center: {
      type: Boolean,
      default: false
    },
    escClosable: {
      type: Boolean,
      default: false
    },
    backdropClosable: {
      type: Boolean,
      default: false
    },
    width: {
      type: [Number, String],
      default: 520
    }
  },
  directives: {
    clickoutside
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  data () {
    return {
      visable: this.value,
      preFixCls: 'ive-modal',
      modalStyle: {
        width: this.width + 'px',
        marginLeft: 'auto',
        marginTop: '18vh',
      },
      dragStart: {
        offsetX: 0,
        offsetY: 0
      },
      isMove: false,
    }
  },
  watch: {
    visable (val) {
      this.$emit('change', this.visable)
      if(val){
        addClass(document.getElementsByTagName('body')[0], 'modal-show')
      }else{
        removeClass(document.getElementsByTagName('body')[0], 'modal-show')
      }
    },
    value (val) {
      this.visable = val
    }
  },
  created () {
    this.visable = this.value
  },
  mounted () {
    document.addEventListener('keyup', (event) => {
      if (this.escClosable && this.visable && event.keyCode === 27) {
        this.visable = false
      }else{
        return
      }
    })
  },
  methods: {
    closeModal () {
      this.visable = false
      this.$emit('change', this.visable)
    },
    onClickBackdrop () {
      if (this.backdropClosable) {
        this.visable = false
      }
    },
    onMouseDown (ev) {
      this.isMove = true
      this.dragStart.offsetX = ev.offsetX
      this.dragStart.offsetY = ev.offsetY
      ev.preventDefault()
    },
    onMouseUp (ev) {
      this.isMove = false
      ev.preventDefault()
    },
    onMouseMove(ev){
      if(this.isMove && this.visable){
        this.modalStyle.marginLeft = (ev.clientX - this.dragStart.offsetX) + 'px'
        this.modalStyle.marginTop = (ev.clientY - this.dragStart.offsetY) + 'px'
      }
      ev.preventDefault()
    },
    onMouseOut(ev){
      this.isMove = false
      ev.preventDefault()
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

