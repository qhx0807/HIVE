<template>
  <li class="ive-timeline-item">
    <div class="ive-timeline-item-line"></div>
    <div class="ive-timeline-item-icon custom-icon" v-if="customIcon"><slot name="icon"></slot></div>
    <div class="ive-timeline-item-icon" v-else :style="styleObj"></div>
    <div class="ive-timeline-item-content">
      <slot></slot>
    </div>
  </li>
</template>

<script>
export default {
  name: 'TimelineItem',
  props: {
    color: {
      type: String,
      default: '#2d8cf0'
    }
  },
  data() {
    return {}
  },
  computed: {
    styleObj() {
      return {
        borderColor: this.color,
        color: this.color
      }
    },
    customIcon() {
      return this.$slots.icon ? true : false
    }
  }
}
</script>

