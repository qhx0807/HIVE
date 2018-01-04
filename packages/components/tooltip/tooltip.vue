<template>
  <div class="ive-tooltip-wrap">
    <slot></slot>
    <transition name="fade">
      <div>
        123
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name:'Tooltip'
}
</script>

