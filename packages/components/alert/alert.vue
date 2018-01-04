<template>
  <transition name="fade">
    <div :class="wrapClass"  v-if="visable">
      <i :class="iconClass" v-if="showIcon"></i>
      <i v-if="closable" @click="closeHandler" class="iconfont icon-cross"></i>
      <div class="ive-alert-content">
        <div :class="titleClass">{{title}}

        </div>
        <div v-if="desc" class="ive-alert-desc">{{desc}}</div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'iAlert',
  props: {
    title:{
      type:String,
    },
    desc:{
      type:String,
    },
    showIcon:{
      type:Boolean,
      default:false
    },
    closable:{
      type:Boolean,
      default: false
    },
    type:{
      type:String,
      default: 'info'
    },
    closeText:String,
  },
  data() {
    return {
      prefixCls: 'ive-alert',
      visable: true,
      icon: {
        info: 'icon-iconfontinfo',
        success: 'icon-success',
        warning: 'icon-warning3',
        error: 'icon-icon-test'
      }
    }
  },
  computed: {
    wrapClass() {
      return [
        `${this.prefixCls}-wrap`,
        {
          [`${this.prefixCls}-${this.type}`] : this.type
        }
      ]
    },
    iconClass() {
      return [
        `iconfont`,
        {
          [this.icon[this.type]] : this.type,
          [`is-big`] : !!this.desc
        }
      ]
    },
    titleClass(){
      return [
        `${this.prefixCls}-title`,
        {
          [`is-bold`] : !!this.desc
        }
      ]
    }
  },
  methods: {
    closeHandler(){
      this.visable = false
      // this.$el.addEventListener('transitionend', )
    }
  }
}
</script>

