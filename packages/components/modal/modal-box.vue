<template>
  <div class="ive-modal" v-show="visible" tabindex="-1">
    <div class="ive-modal-shade" ></div>
    <transition name="modal">
      <div
        class="ive-modal-warp"
        v-show="visible"
        :style="modalStyle"
        >
        <div class="ive-modal-head" v-html="title"></div>
        <div class="ive-modal-body">
          <i :class="iconClass"></i>
          <div class="ive-modal-body-content" v-html="content"></div>
        </div>
        <div class="ive-modal-foot">
          <i-button v-if="type === 'confirm'" @click="cancelHandler" type="text" style="margin-right:5px;">取消</i-button>
          <i-button :loading="btnLoading" @click="okHandeler" type="primary" style="margin-right:5px;">确定</i-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import {addClass, removeClass} from '../../utils/domClass'
export default {
  name: 'ModalBox',
  props: {},
  data () {
    return {
      type: 'info',
      title: '',
      content: '',
      preFixCls: 'ive-modal',
      visible: false,
      modalStyle: {
        width: '420px',
        marginLeft: 'auto',
        marginTop: '18vh',
      },
      icon: {
        info: 'icon-iconfontinfo',
        success: 'icon-success',
        warning: 'icon-warning3',
        error: 'icon-icon-test',
        confirm: 'icon-iconfontquestion',
      },
      loading: false,
      btnLoading: false,
    }
  },
  created () {

  },
  watch: {
    visible (val) {
      if(val){
        addClass(document.getElementsByTagName('body')[0], 'modal-show')
      }else{
        removeClass(document.getElementsByTagName('body')[0], 'modal-show')
      }
    }
  },
  computed: {
    iconClass() {
      return [
        `iconfont`,
        `${this.preFixCls}-icon`,
        {
          [this.icon[this.type]] : this.type
        }
      ]
    }
  },
  beforeDestroy () {
    this.visible = false
     removeClass(document.getElementsByTagName('body')[0], 'modal-show')
  },
  methods: {
    okHandeler(){
      this.btnLoading = this.loading
      if(this.onOk) this.onOk()
    },
    cancelHandler(){
      this.btnLoading = false
      if(this.onCancel) {
        this.onCancel()
      }else{
        this.visible = false
        this.destroyElement()
      }
    },
    destroyElement() {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
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
