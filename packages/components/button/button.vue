<template>
  <button :class="classes" :disabled="disabled" @click="onHandleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'iButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: Boolean,
    shape: String,
    long: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      prefixCls: 'ive-btn',
      isIcon: true,
    }
  },
  computed: {
    classes(){
      return [
        `${this.prefixCls}`,
        {
          [`${this.prefixCls}-${this.type}`]: !!this.type,
          [`${this.prefixCls}-long`]: this.long,
          [`${this.prefixCls}-${this.size}`]: !!this.size,
          [`${this.prefixCls}-${this.shape}`]: !!this.shape,
          [`${this.prefixCls}-loading`]: this.loading != null && this.loading,
          [`${this.prefixCls}-icon-only`]: !this.isIcon && (!!this.icon || this.loading)
        }
      ]
    }
  },
  methods: {
    onHandleClick(event){
      this.$emit('click', event);
    }
  }
}
</script>