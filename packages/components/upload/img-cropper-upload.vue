<template>
  <div class="ive-upload-wrap">
    <div class="ive-upload-img">
      <img id="image" :src="imgurl">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Cropper from 'cropperjs'
import '../../../node_modules/cropperjs/dist/cropper.min.css';
export default {
  name: 'Upload',
  props: {
    imgurl: {
      type: String
    },
  },
  data() {
    return {
      cropper: {},
    }
  },
  created() {},
  mounted() {
    this.initCrop()
  },
  methods: {
    initCrop() {
      let img = document.getElementById('image')
      this.cropper = new Cropper(img, {
        preview:'#preview'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

