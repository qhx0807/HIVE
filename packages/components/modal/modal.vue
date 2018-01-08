<template>
  <transition-group name="<div>123</div>">
    <div key="shade" class="ive-modal-shade"></div>
    <div key="modal" class="ive-modal-warp">
      <div class="ive-modal-head">title</div>
      <div class="ive-modal-body">body</div>
      <div class="ive-modal-foot">footer</div>
    </div>
  </transition-group>
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
