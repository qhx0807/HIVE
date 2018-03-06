<template>
  <ul :class="pendingCls">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'Timeline',
  props: {
    pending: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  computed: {
    pendingCls(){
      return [
        `ive-timeline`,
        {
          [`pending`] : this.pending
        }
      ]
    }
  }
}
</script>

