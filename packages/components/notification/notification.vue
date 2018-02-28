<template>
  <transition :name="transitionName">
    <div
      :class="wrapClass"
      :style="positionStyle"
      v-if="visible"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
      role="alert">
      <i v-if="showClose" @click="close" class="iconfont icon-cross"></i>
      <i v-if="type" :class="iconClass"></i>
      <div class="ive-notify-group">
        <h2 v-if="title" class="ive-notify-title">{{title}}</h2>
        <div class="ive-notify-content">
          <p v-html="content"></p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Notification',
  props: {},
  data () {
    return {
      preFixCls: 'ive-notify',
      visible: false,
      title: '',
      type: '',
      showClose: true,
      timer: null,
      closed: false,
      position: 'top-right',
      icon: {
        info: 'icon-iconfontinfo',
        success: 'icon-success',
        warning: 'icon-warning3',
        error: 'icon-icon-test'
      },
      duration: 4500,
      content: '',
      transitionName: 'solidInRight',
      verticalOffset: 0,
      onClose: null,
    }
  },
  created () {
    if (~this.position.indexOf('right')) {
      this.transitionName = 'solidInRight'
    }else {
      this.transitionName = 'solidInLeft'
    }
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false
        this.destroyElement()
        // this.$el.addEventListener('transitionend', this.destroyElement)
      }
    }
  },
  computed: {
    iconClass() {
      return [
        `ive-notify-icon`,
        `iconfont`,
        {
          [`${this.icon[this.type]}`] : this.type
        }
      ]
    },
    wrapClass() {
      let clsArr = this.position.split('-')
      return [
        `ive-notify-wrap`,
         ...clsArr
      ]
    },
    verticalProperty() {
      return ~this.position.indexOf('top') ? 'top' : 'bottom'
    },
    positionStyle() {
      return {
        [this.verticalProperty]: `${ this.verticalOffset }px`
      }
    }
  },
  mounted() {
    this.startTimer()
    document.addEventListener('keydown', this.keydown)
  },
  beforeDestroy () {
    this.clearTimer()
  },
  methods: {
    close() {
      this.closed = true
      if (typeof this.onClose === 'function') {
        this.onClose()
      }
    },
    clearTimer() {
      clearTimeout(this.timer)
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
.solidInRight-enter{
  right: 0;
  opacity: 0;
  transform: translate(100%, 0);
}
.solidInLeft-enter{
  right: 0;
  opacity: 0;
  transform: translate(-100%, 0);
}
</style>
