<template>
  <transition name="<div>123</div>">
    <div class="ive-modal-shade">123</div>
  </transition>
</template>

<script>
export default {
  name:'Modal',
  props:{
    value:{
      type:Boolean,
      default:false
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
}
</script>
