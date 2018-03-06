# Carousel 轮播图

<div class="demo-block">
  <Carousel height="100">
    <CarouselItem><div class="demo-carousel">1</div></CarouselItem>
    <CarouselItem><div class="demo-carousel">2</div></CarouselItem>
    <CarouselItem><div class="demo-carousel">3</div></CarouselItem>
  </Carousel>
</div>

<div class="demo-block">
  <i-button type="primary" @click="fn">Primary</i-button>
</div>



<script>
export default {
  data(){
    return {
      loading: false
    }
  },
  methods:{
    fn(){
      alert(1)
    }
  }
}
</script>

<style>
  .demo-carousel{
    background: #CDD2D9;
    text-align: center;
    line-height: 100px;
    font-size: 14px;
    height:100%;
    color: #fff;
  }
</style>
