<template>
  <div class="ive-upload-wrap">
    <input type="file" ref="input" :multiple="multiple" @change="change">
    <i-button type="primary" @click="handleClick" icon="icon-upload">点击上传</i-button>
    <p class="ive-upload-tips"><slot name="tips"></slot></p>
    <ul class="ive-upload-list">
      <li v-for="(item, index) in uploadList" :key="index">
        <Icon type="icon-file"></Icon>
        <span>{{item.fileName}}</span>
        <transition name="fade">
          <Icon v-if="item.status=='success' && !item.error" type="icon-checkmark"></Icon>
        </transition>
        <transition name="fade">
          <i-progress v-if="item.progress<100 || item.error"  width="350" height="2" :error="item.error" :percent="item.progress"></i-progress>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Upload',
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    accept: {
      type: String
    },
    name: {
      type: String
    },
    maxSize: {
      type: Number
    },
    action: {
      type: String
    },
    token: {
      type: String
    }
  },
  data() {
    return {
      uploadList: [
        {
          fileName: '121.png',
          size: 21,
          progress: 100,
          error: false,
          status: 'success'
        }
      ]
    }
  },
  created() {},
  methods: {
    handleClick() {
      this.$refs.input.click()
    },
    change(file) {
      if (!file.target.files) return
      if (!this.multiple) {
        let postFiles = file.target.files[0]
        const formData = new FormData()
        formData.append('file', postFiles)
        formData.append('token', this.token)
        formData.append('key', postFiles.name)
        this.uploadList.push({
          fileName: postFiles.name,
          size: postFiles.size,
          progress: 0,
          error: false
        })
        this.upload(formData, this.uploadList.length - 1)
      }
    },
    upload(formdata, index) {
      let self = this
      axios({
        url: this.action,
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin':true,
          Authorization: `UpToken ${this.token}`
        },
        data: formdata,
        onUploadProgress: function(progressEvent) {
          let p = (progressEvent.loaded / progressEvent.total * 100).toFixed(2)
          self.$emit('progress', parseFloat(p))
          self.uploadList[index].progress = parseFloat(p)
        }
      })
        .then(function(response) {
          console.log(response)
          self.$emit('on-success', response)
          self.$refs.input.value = null
        })
        .catch(function(err) {
          self.$emit('on-error', err)
          self.uploadList[index].error = true
          self.$refs.input.value = null
          console.log(self.uploadList[index])
        })
    }
  }
}
</script>

<style lang="less" scoped>

</style>

