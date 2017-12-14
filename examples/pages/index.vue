<template>
  <div class="pg-index">
    <!-- <svg height="680px" width="100%" viewBox="0 0 831 526" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group-3" transform="translate(-30.000000, -28.000000)">
          <g transform="translate(-10.000000, -5.000000)" id="Rectangle-22">
            <rect fill="#4386FC" opacity="0.74852808" transform="translate(688.000000, 198.500000) rotate(-315.000000) translate(-688.000000, -198.500000) " x="492" y="115" width="392" height="167" rx="83.5"></rect>
            <rect fill="#E9F9FF" opacity="0.874943388" transform="translate(605.500000, 290.500000) rotate(-315.000000) translate(-605.500000, -290.500000) " x="441" y="207" width="329" height="167" rx="83.5"></rect>
            <rect fill="#19B5FE" opacity="0.674365942" transform="translate(658.000000, 356.000000) rotate(-315.000000) translate(-658.000000, -356.000000) " x="413" y="262" width="490" height="188" rx="94"></rect>
            <rect fill="#FBCB87" opacity="0.96020154" transform="translate(605.875415, 446.875415) rotate(-315.000000) translate(-605.875415, -446.875415) " x="502.875415" y="363.375415" width="206" height="167" rx="83.5"></rect>
            <rect fill="#FBCB87" opacity="0.96020154" transform="translate(349.816540, 194.816540) rotate(-315.000000) translate(-349.816540, -194.816540) " x="188.31654" y="121.81654" width="323" height="146" rx="73"></rect>
            <rect fill="#85DDF1" opacity="0.639039855" transform="translate(569.500000, 156.000000) rotate(-315.000000) translate(-569.500000, -156.000000) " x="424" y="88" width="291" height="136" rx="68"></rect>
            <rect fill="#687AE8" opacity="0.639039855" transform="translate(747.500000, 299.000000) rotate(-315.000000) translate(-747.500000, -299.000000) " x="602" y="231" width="291" height="136" rx="68"></rect>
            <rect fill="#4386FC" opacity="0.639039855" transform="translate(465.887608, 218.887608) rotate(-315.000000) translate(-465.887608, -218.887608) " x="299.387608" y="140.887608" width="333" height="156" rx="78"></rect>
            <rect fill="#4386FC" opacity="0.639039855" transform="translate(443.500000, 392.000000) rotate(-315.000000) translate(-443.500000, -392.000000) " x="298" y="324" width="291" height="136" rx="68"></rect>
            <rect fill="#19B5FE" opacity="0.676970109" transform="translate(245.012500, 250.012500) rotate(-315.000000) translate(-245.012500, -250.012500) " x="-4.48750032" y="153.0125" width="499" height="194" rx="97"></rect>
            <rect fill="#7A8AEB" opacity="0.887171649" transform="translate(202.500000, 387.000000) rotate(-315.000000) translate(-202.500000, -387.000000) " x="6" y="312" width="393" height="150" rx="75"></rect>
            <rect fill="#4386FC" opacity="0.861469656" transform="translate(320.000000, 400.500000) rotate(-315.000000) translate(-320.000000, -400.500000) " x="134" y="309" width="372" height="183" rx="91.5"></rect>
          </g>
        </g>
      </g>
    </svg> -->
    <div class="home-wrap">
      <div class="title"  :class="{visible : visible}">
        <span class="first">great</span>
        <strong>HIVE</strong>
        <span>a ui components of vue 2.x</span>
      </div>
      <div class="nopro">
        <img src="../assets/img/no-prob-img.png" alt="">
      </div>
      <div class="start">
        <a class="btn" href="#/test">Get Start Now</a>
      </div>
      <div class="content">
        <img class="tit-img" src="../assets/img/client-img.png" alt="">
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
      visibility: hidden;
      opacity:0;
      transform:translate3d(0,100%,0);
      animation-duration: 2s;
      animation-delay: .5s;
      animation-name: fadeInUp;
      &.visible{
        visibility: visible;
        transform:none;
        opacity: 1;
      }
      .first{
        position: relative;
        color: #191617;
        text-transform: capitalize;
        &:after{
          width: 77px;
          content: '';
          position: absolute;
          top: -11px;
          left: 0;
          height: 5px;
          background: #191617;
          border-radius: 10px;
          transition: all 3s ease-out;
        }
      }
      strong{
        font-weight: 550;
        color: #191617;
        text-transform: uppercase;
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
      margin: 70px 0 0 0;
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
