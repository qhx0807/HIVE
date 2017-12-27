<template>
  <div :class="wrapClass" :style="styles" v-clickoutside="closeHandler">
    <input :class="inputClass" readonly :placeholder="placeholder" @click="clickHandler" type="text">
    <Icon type="icon-date" :class="iconClass"></Icon>
    <transition :name="transitionName">
      <div :class="optionClass" v-show="pickerShow">
        <div class="header">
          <Icon type="icon-angle-left"></Icon>
          <Icon type="icon-angle-right"></Icon>
          <div>
            <span>2017年</span>
            <span>12月</span>
          </div>
        </div>
        <div class="body">
          <ul class="week-name">
            <li>日</li>
            <li>一</li>
            <li>二</li>
            <li>三</li>
            <li>四</li>
            <li>五</li>
            <li>六</li>
          </ul>
          <dl class="date-list">
            <dd v-for="(d, index) in dateList" :key="index" :class="{'not-current': !d.currentMonth}">{{d.value}}</dd>
          </dl>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import clickoutside from '../../directives/clickoutside'
export default {
  name: 'DatePicker',
  props: {
    width: {
      type: [String, Number]
    },
    placeholder: {
      type:[Number, String],
      default:'选择日期'
    }
  },
  data() {
    return {
      prefixCls: 'ive-dp',
      placement: true,
      pickerShow: true,
      month_o: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      month_n: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      monthName: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
      currentMon: new Date().getMonth()+1,
      currentYer: new Date().getFullYear(),
      currentDay: new Date().getDate()
    }
  },
  created () {
    // alert(this.currentMon)
  },
  computed: {
    transitionName() {
      return this.placement ? 'fadeInUp' : 'fadeInBottom'
    },
    styles() {
      if (this.width) {
        return {
          width: `${this.width}px`
        }
      }
    },
    wrapClass() {
      return [`${this.prefixCls}-wrap`]
    },
    inputClass() {
      return [`${this.prefixCls}-input`]
    },
    iconClass() {
      return [`${this.prefixCls}-icon`]
    },
    optionClass() {
      return [
        `${this.prefixCls}-option`,
        {
          [`${this.prefixCls}-option-top`]: this.placement,
          [`${this.prefixCls}-option-bottom`]: !this.placement
        }
      ]
    },
    dateList(){
      let dateList = []
      let currentMonLength = new Date(this.currentYer, this.currentMon, 0).getDate()
      dateList = Array.from({length: currentMonLength}, (val, index) => {
        return {
          currentMonth: true,
          value: index + 1
        }
      })
      let startDay = new Date(this.currentYer, this.currentMon-1, 1).getDay()
      let previousMongthLength = new Date(this.currentYer, this.currentMon, 0).getDate()

      for(let i = 0, len = startDay; i < len; i++){
        dateList.unshift({
          previousMonth: true,
          value: previousMongthLength - i
        })
      }

      for(let i = dateList.length, j=1; i < 42; i++,j++){
        dateList.push({
          nextMonth: true,
          value: j
        })
      }
      return dateList

    }
  },
  directives: {
    clickoutside
  },
  methods: {
    clickHandler(event) {
      let ec = event.clientY
      let sh = document.body.clientHeight
      if (sh - ec < 300) {
        this.placement = false
      } else {
        this.placement = true
      }
      this.pickerShow = !this.pickerShow
    },
    closeHandler() {
      this.pickerShow = false
    },
    isLeapYear(year, month){
      let tem = year % 4
      if (tem===0) return this.month_o[month]
      return this,month_n[month]
    },
    getDays(){

    }
  }
}
</script>

<style lang="less" scoped>
.fadeInUp-enter-active {
  transition: all 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: none;
}
.fadeInUp-enter {
  opacity: 0;
  transform: translateY(-40px);
}

.fadeInBottom-enter-active {
  transition: all 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: none;
}
.fadeInBottom-enter {
  opacity: 0;
  transform: translateY(40px);
}
</style>
