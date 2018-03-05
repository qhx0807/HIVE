# metaInfo 管理

基于 `vue-meta` 的 Vue 2.0 组件中的页面元信息管理。

#### 使用方法

* 安装 `npm install vue-meta --save`

* 引入
  ```javascript
  import Vue from 'vue'
  import Router from 'vue-router'
  import Meta from 'vue-meta'
  Vue.use(Router)
  Vue.use(Meta)
  export default new Router({
  ...
  })
  ```
* 使用
  ```javascript
  data () {
    return {
      myTitle: '标题'
    }
  },
  metaInfo() {
    return {
      title: this.myTitle, 
      titleTemplate: '%s - by vue-meta',
      htmlAttrs: {
        lang: 'en',
        amp: undefined 
      }
    }
  },
  ```

<script>
export default {
  data () {
    return {
      myTitle: '标题'
    }
  },
  metaInfo() {
    return {
      title: this.myTitle, 
      titleTemplate: '%s - by vue-meta',
      htmlAttrs: {
        lang: 'en',
        amp: undefined 
      }
    }
  },
  created(){
    
  },
  mounted(){
    setTimeout(() => {
      this.title = 'sync title'
    }, 1000)
  },
  methods:{

  }
}
</script>
