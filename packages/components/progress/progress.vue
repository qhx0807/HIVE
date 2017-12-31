<template>
  <div class="ive-progress-wrap" :style="wpStyle">
    <div class="ive-progress-outer">
      <div class="ive-progress-inner">
        <div :class="bgClass" :style="bgStyle"></div>
      </div>
    </div>
    <span :class="textClass">
      <Icon v-if="percent>=100 && !error" type="icon-checkmark"></Icon>
      <span v-if="percent<=100 && !error">{{percent}}%</span>
      <Icon v-if="error" type="icon-closecircled"></Icon>
    </span>
  </div>
</template>

<script>
export default {
  name: 'iProgress',
  props: {
    width: {
      type: [Number, String]
    },
    height:{
      type:[Number, String],
      default: 8
    },
    percent: {
      type: Number,
      default: 0,
      validator: function (value) {
        return value<=100 && value>=0
      }
    },
    error:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      prefixCls:'ive-progress'
    }
  },
  computed: {
    textClass(){
      return `${this.prefixCls}-text`
    },
    bgClass(){
      return [
        `${this.prefixCls}-inner-bg`,
        {
          [`success`] : this.percent>=100,
          [`pending`] : this.percent<100 && !this.error,
          [`error`] : this.error
        }
      ]
    },
    bgStyle(){
      let w = this.percent
      if(w>100){
        w=100
      }else if(w<0){
        w=0
      }
      return {
        width: `${w}%`,
        height: `${this.height}px`
      }
    },
    wpStyle(){
      if(this.width) {
        return {
          width: `${this.width}px`
        }
      }
    }
  },
  methods: {
    fn() {
      alert(1)
    }
  }
}
</script>
