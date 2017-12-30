<template>
  <div class="ive-progress-wrap">
    <div class="ive-progress-outer"></div>
  </div>
</template>

<script>
export default {
  name: 'iProgress',
  props: {
    width: {
      type: [Number, String]
    }
  },
  data() {
    return {}
  },
  methods: {
    fn() {
      alert(1)
    }
  }
}
</script>
