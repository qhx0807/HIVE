<template>
  <div id="app">
    <pageHeader></pageHeader>
    <div class="container" v-if="!isIndex">
      <sideNav class="nav"></sideNav>
      <router-view class="view"></router-view>
    </div>
    <router-view class="page" v-else></router-view>
    <pageFooter v-if="!isIndex"></pageFooter>
  </div>
</template>

<script>
import pageHeader from './components/header.vue'
import pageFooter from './components/footer.vue'
import sideNav from './components/side-nav.vue'
export default {
  name: 'app',
  data () {
    return {
      isIndex: true
    }
  },
  components: {
    pageHeader,
    pageFooter,
    sideNav
  },
  watch: {
    $route () {
      this.isIndex = this.$route.name === 'index'
    }
  }
}
</script>

<style lang="less">
@import './assets/less/index';
html,body{
  height: 100%;
}
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  margin: 48px auto;
  width: 90%;
  background-color: #fff;
  box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
  .nav {
    float: left;
    width: 210px;
  }
  .view {
    float: left;
    width: calc(~'100% - 215px');
    padding: 32px 48px 48px;
    box-sizing: border-box;
  }
  &:after{
    content:"";
    width: 0;
    height: 0;
    clear: both;
    display: block;
  }
}
</style>
