<template>
  <div>
    <input type="file" ref="input">
  </div>
</template>

<script>
export default {
  name: 'Upload',
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    accept: {
      type: String
    }
  },
  methods: {
    handleClick() {
      this.$refs.input.click()
    }
  }
}
</script>
