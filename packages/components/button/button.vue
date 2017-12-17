<template>
  <button :class="classes" :disabled="disabled" @click="onHandleClick">
    <Icon class="ive-loading-loop" type="icon-loading" v-if="loading"></Icon>
    <Icon :type="icon" v-if="icon && !loading"></Icon>
    <span v-if="isIcon" ref="slot">
      <slot></slot>
    </span>
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
    size: String,
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
  data() {
    return {
      prefixCls: 'ive-btn',
      isIcon: true,
    }
  },
  computed: {
    classes() {
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
  mounted() {
    this.isIcon = this.$slots.default !== undefined
  },
  methods: {
    onHandleClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>