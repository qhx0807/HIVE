<template>
  <div class="ive-upload-wrap">
    <input type="file" ref="input" :multiple="multiple" @change="change">
    <i-button type="primary" @click="handleClick" icon="icon-upload">点击上传</i-button>
    <p class="ive-upload-tips">只能上传jpg/png文件，且不超过500kb</p>
    <ul class="ive-upload-list">
      <li v-for="(item, index) in uploadList" :key="index">
        <Icon type="icon-file"></Icon>
        <span>{{item.fileName}} / {{(item.size/1024).toFixed(2)}}kb</span>
        <Icon v-if="item.progress==100" type="icon-checkmark"></Icon>
        <transition name="fade">
          <i-progress v-if="item.progress<100"  width="350" height="2" :error="item.error" :percent="item.progress"></i-progress>
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
    name:{
      type:String
    },
    maxSize:{
      type:Number
    },
    action:{
      type:String
    },
    token:{
      type:String
    }
  },
  data() {
    return {
      uploadList:[]
    }
  },
  created() {},
  methods: {
    handleClick() {
      this.$refs.input.click()
    },
    change(file) {
      if(!file.target.files) return
      if(!this.multiple){
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
        this.upload(formData, this.uploadList.length-1)
      }

    },
    upload(formdata, index){
      let self = this
      axios({
        url: this.action,
        method:'POST',
        headers:{
          'Content-Type':'multipart/form-data',
          Authorization: `UpToken ${this.token}`
        },
        data:formdata,
        onUploadProgress:function(progressEvent){
          self.$emit('progress', parseFloat(progressEvent.loaded / progressEvent.total * 100))
          self.uploadList[index].progress = parseFloat(progressEvent.loaded / progressEvent.total * 100)
        },
      }).then(function(response){
        console.log(response)
      }).catch(function(err){
        self.uploadList[index].progress = 1
        self.uploadList[index].error = true
        console.log(self.uploadList[index])
      })
    }
  }
}
</script>

<style lang="less" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>

