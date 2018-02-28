<template>
  <div class="pg-index">

    <div class="home-wrap">
      <transition name="fadeInUp">
        <div class="title" v-if="visible">
          <!-- <img src="../assets/img/hive.png" alt=""> -->
        </div>
      </transition>

      <div class="start">
        <a class="btn" href="#/layout">Get Start Now</a>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  },
  created () { },
  mounted () {
    this.$nextTick(() => {
      this.visible = true
    })
  }
}
</script>

<style lang="less" scoped>
@keyframes fadeInUp{
  0%{opacity:0;transform:translate3d(0,100%,0)}
  100%{opacity:1;transform:none}
}
.pg-index {
  height: calc(~ "100% - 80px");
  width: 100%;
  background-image: url('../assets/img/home-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% -160px;
  .fadeInUp-enter-active{
    transition: all .3s ease-in-out;
    transform: none;
  }
  .fadeInUp-leave-active{
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fadeInUp-enter, .fadeInUp-leave-to{
    opacity: 0;
    transform:translateY(40px);
  }
  .home-wrap{
    width: 1280px;
    margin: 0 auto;
    padding-top: 110px;
    .title{
      padding: 0 90px;
      font-size: 52px;
      color: #a275ff;
      font-weight: 550;
      line-height: 68px;
      text-align: center;
      img{
        height: 100%;
      }
    }
    .nopro{
      width: 100%;
      text-align: center;
      margin: 36px 0 0 0;
      img{
        width: 470px;
        height: inherit;
      }
    }
    .start{
      margin: 120px 0 0 0;
      width: 100%;
      text-align: center;
      .btn{
        border: none;
        outline: none;
        cursor: pointer;
        padding: 17px 25px;
        float: none;
        display: inline-block;
        width: 230px;
        height: 60px;
        background: linear-gradient(15deg,#a275ff 20%,#52b4ff 100%);
        font-size: 22px;
        color: #fff;
        font-weight: 530;
        border-radius: 100px;
        line-height: 28px;
        transition: all 0.5s ease;
        &:hover{
          font-size: 23px;
          box-shadow: 0 0 20px 0px rgba(57,168,252,.5);
        }
      }
    }
    .content{
      margin: 170px 0 0 0;
      padding: 60px 82px;
      width: 100%;
      text-align: center;
      background-color: #fff;
      box-shadow: 0 0 41px rgba(57,168,252,.15);
      .tit-img{
        width: 52px;
      }
    }
  }


}
</style>
