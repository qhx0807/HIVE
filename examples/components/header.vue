<template>
  <header class="page-header" :style="$route.name === 'index' ? 'box-shadow:none' : 'box-shadow:0 10px 60px 0 rgba(29,29,31,0.07)'">
    <div class="page-header-container">
      <router-link :to="{name: 'index'}">
        <img src="../assets/img/logo1.png" alt="">
      </router-link>
      <router-link :to="{name: 'test'}">组件</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'pageHeader'
}
</script>

<style lang="less" scoped>
.page-header {
  background-color: #fff;
  box-shadow: 0 8px 60px 0 rgba(29, 29, 31, 0.07);
  position: relative !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  transition: all 0.3s;
  z-index: 100;
  &-container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 80px;
    justify-content: space-between;
    a{
      font-size: 14px;
      color: #3f536e;
    }
  }
}
</style>

