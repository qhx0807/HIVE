<template>
  <div :class="wrapClass" :style="styles" v-clickoutside="closeHandler">
    <input :class="inputClass" :value="currentValue" readonly :placeholder="placeholder" @click="clickHandler" type="text">
    <Icon type="icon-date" :class="iconClass"></Icon>
    <transition :name="transitionName">
      <div :class="optionClass" v-show="pickerShow">
        <div class="header">
          <Icon type="icon-angle-left" @click.native="preMonHandler"></Icon>
          <Icon type="icon-angle-right"  @click.native="nextMonHandler"></Icon>
          <div>
            <span>{{currentYer}}年</span>
            <span>{{currentMon}}月</span>
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
            <dd @click="selectDateHandler(d)"
              v-for="(d, index) in dateList"
              :key="index"
              :class="[{'not-current': !d.currentMonth},{'today':isToday(d)},{'selected':isSelected(d)},]"
              >{{d.value}}</dd>
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
    },
    disabled:{
      type:Boolean,
      default: false
    },
    value: {
      type:[String, Date],
      default:''
    }
  },
  data() {
    return {
      prefixCls: 'ive-dp',
      placement: true,
      pickerShow: false,
      currentValue:'',
      currentMon: new Date().getMonth()+1,
      currentYer: new Date().getFullYear(),
      currentDay: new Date().getDate(),
      selectedDay: null,
      selectedMonth: null,
      selectedYear: null,
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  created () {
    // alert(this.currentMon)
    if(this.value){
      let dateObj = new Date(this.value)
      this.currentYer = dateObj.getFullYear()
      this.currentMon = dateObj.getMonth()+1
      this.currentDay = dateObj.getDate()

      this.selectedDay = dateObj.getDate()
      this.selectedMonth = dateObj.getMonth()+1
      this.selectedYear = dateObj.getFullYear()

      this.currentValue = `${this.selectedYear}-${this.selectedMonth}-${this.selectedDay}`
    }
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
      return [
        `${this.prefixCls}-wrap`,
        {
          [`${this.prefixCls}-disabled`] : this.disabled
        }
      ]
    },
    inputClass() {
      return [
        `${this.prefixCls}-input`,
          {
            [`${this.prefixCls}-disabled`] : this.disabled
          }
        ]
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
      let previousMongthLength = new Date(this.currentYer, this.currentMon-1, 0).getDate()

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
    preMonHandler(){
      if(this.currentMon === 1){
        this.currentYer -= 1
        this.currentMon = 12
      }else{
        this.currentMon -= 1
      }
    },
    nextMonHandler(){
      if(this.currentMon === 12){
        this.currentYer += 1
        this.currentMon = 1
      }else{
        this.currentMon += 1
      }
    },
    selectDateHandler(d){
      this.currentDay = d.value

      if(d.currentMonth){

      }else if(d.previousMonth){
        if(this.currentMon === 1){
          this.currentYer -= 1
          this.currentMon = 12
        }else{
          this.currentMon -= 1
        }
      }else if(d.nextMonth){
        if(this.currentMon === 12){
          this.currentYer += 1
          this.currentMon = 1
        }else{
          this.currentMon += 1
        }
      }
      this.selectedDay = d.value
      this.selectedMonth = this.currentMon
      this.selectedYear = this.currentYer
      this.currentValue = `${this.currentYer}-${this.currentMon}-${d.value}`
      this.$emit('change', this.currentValue)
      this.$emit('on-change', this.currentValue)
      this.pickerShow = false
    },
    isToday(d){
      let y = new Date().getFullYear() === this.currentYer
      let m = new Date().getMonth() +1 === this.currentMon
      let t = new Date().getDate() === d.value
      if(d.currentMonth && y && m && t) return true
      return false
    },
    isSelected(d){
      if(this.selectedDay === d.value && this.selectedMonth === this.currentMon && this.selectedYear === this.currentYer && d.currentMonth){
        return true
      }else{
        return false
      }
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
