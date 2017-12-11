<template>
  <button><slot></slot></button>
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
    plain: Boolean,
    disabled: Boolean,
    round: Boolean
  }
}
</script>
