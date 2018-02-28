<template>
  <transition name="fadeInUp">
    <div
      :class="wrapClass"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="startTimer">
      <!-- <Icon :type="iconClass"></Icon> -->
      <i :class="iconClass"></i>
      <span class="text" v-html="message"></span>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Message',
  props: {},
  data() {
    return {
      prefixCls: 'ive-msg',
      type: 'info',
      message: '',
      visible: false,
      icon: {
        info: 'icon-iconfontinfo',
        success: 'icon-success',
        warning: 'icon-warning3',
        error: 'icon-icon-test'
      },
      duration: 2500,
      timer: null,
      closed: false
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
          [this.icon[this.type]] : this.type
        }
      ]
    }
  },
  mounted() {
    this.startTimer()
    document.addEventListener('keydown', this.keydown)
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false
        this.$el.addEventListener('transitionend', this.destroyElement)
      }
    }
  },
  beforeDestroy () {
    this.clearTimer()
  },
  methods: {
    clearTimer() {
      clearTimeout(this.timer)
    },
    close() {
      this.closed = true
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, this.duration)
      }
    },
    keydown(e) {
      if (e.keyCode === 27) {
        if (!this.closed) {
          this.close()
        }
      }
    },
    destroyElement() {
      this.$el.removeEventListener('transitionend', this.destroyElement)
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    }
  }
}
</script>
<style lang="less" scoped>
.fadeInUp-enter,
.fadeInUp-leave-active {
  opacity: 0;
  transform: translate(-50%, -100%);
}
</style>
