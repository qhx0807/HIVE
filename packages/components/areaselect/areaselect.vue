<template>
  <div v-clickoutside="handleClose" :class="wrapClass" :style="styles">
    <input type="text" :placeholder="placeholder" readonly @click="handleClick" :class="inputClass" :value="currentValue">
    <Icon type="icon-down" v-show="!selectShow" :class="iconClass"></Icon>
    <Icon type="icon-cross" @click="handleClose" v-show="selectShow" :class="iconClass"></Icon>
     <transition :name="transitionName">
       <div :class="optionClass" v-show="selectShow">
        <ul>
          <li :class="{active:tab=='0'}" @click="handleTabClick(0)">{{p ? p : '请选择'}} <Icon type="icon-angle-down"></Icon></li>
          <li v-show="status>0" :class="{active:tab=='1'}" @click="handleTabClick(1)">{{c ? c : '请选择'}} <Icon type="icon-angle-down"></Icon></li>
          <li v-show="status>1" :class="{active:tab=='2'}" @click="handleTabClick(2)">{{a ? a : '请选择'}} <Icon type="icon-angle-down"></Icon></li>
        </ul>
        <div :class="itemsClass">
          <dl v-show="tab==0">
            <dd :class="{selected:item.name==p}" @click="handleSelectP(item)"  v-for="(item, index) in provinces" :key="index">{{item.name}}</dd>
          </dl>
          <dl v-show="tab==1">
            <dd :class="{selected:item.name==c}" @click="handleSelectC(item)"  v-for="(item, index) in cities" :key="index">{{item.name}}</dd>
          </dl>
          <dl v-show="tab==2">
            <dd :class="{selected:item==a}" @click="handleSelectA(item)"  v-for="(item, index) in countries" :key="index">{{item}}</dd>
          </dl>
        </div>
      </div>
     </transition>
    
  </div>
</template>

<script>
import clickoutside from '../../directives/clickoutside'
export default {
  name: 'AreaSelect',
  props: {
    width:{
      type:[Number, String],
      default:''
    },
    disabled:{
      type:Boolean,
      default:false
    },
    placeholder:{
      type:[Number, String],
      default:'请选择'
    }
  },
  directives: {
    clickoutside
  },
  data () {
    return {
      areaData:[],
      provinces:[],
      cities:[],
      countries:[],
      selectShow: false,
      prefixCls: 'ive-as',
      tab: 0,
      p:'',
      c:'',
      a:'',
      currentValue:'',
      status:0,
      provincesIndex:-1,
      valArr:[],
    }
  },
  created () {
    // this.currentValue = this.value.join('  /  ')
  },
  mounted() {
    let area = {}
    require.ensure([], () => {
      let AREA = require('./area.json')
      this.areaData = AREA
      AREA.forEach((item,index) => {
        this.provinces.push({
          name: item.name,
          key: index
        })
      })
      
    })
  },
  computed: {
    transitionName(){
      return 'fadeInUp'
    },
    styles(){
      if(this.width){
        return {
          width: `${this.width}px`
        }
      }
    },
    wrapClass(){
      return [
        `${this.prefixCls}-wrap`,
        {
          [`${this.prefixCls}-disabled`] : this.disabled
        }
      ]
    },
    inputClass(){
      return [
        `${this.prefixCls}-input`,
        {
          [`${this.prefixCls}-disabled`] : this.disabled
        }
      ]
    },
    iconClass(){
      return [
        `${this.prefixCls}-icon`
      ]
    },
    optionClass(){
      return [
        `${this.prefixCls}-option`
      ]
    },
    itemsClass(){
      return [
        `${this.prefixCls}-items`
      ]
    },
    
  },
  methods: {
    
    handleClose(){
      this.selectShow = false
    },
    handleClick(){
      this.selectShow = !this.selectShow
    },
    handleSelectP(item){
      this.p = item.name
      this.currentValue = `${item.name}  /  `
      this.c = ''
      this.a = ''
      this.valArr[0] = item.name
      this.$emit('on-change', this.valArr)
      this.provincesIndex = item.key
      this.cities = []
      this.areaData[item.key].city.forEach((item,index) => {
        this.cities.push({
          name: item.name,
          key: index,
          area: item.area
        })
      })
      
      this.tab = 1
      this.status = 1
    },
    handleSelectC(item){
      this.c = item.name
      this.a = ''
      this.currentValue = `${this.p}  /  ${item.name}  /  `
      this.valArr[1] = item.name
      this.$emit('on-change', this.valArr)
      this.countries = this.cities[item.key].area
      this.tab = 2
      this.status = 2
    },
    handleSelectA(item){
      this.a = item
      this.currentValue = `${this.p}  /  ${this.c}  /  ${item}`
      this.selectShow = false
      this.status = 3
      this.valArr[2] = item
      this.$emit('on-change', this.valArr)
    },
    handleTabClick(e){
      this.tab = e
      
    }
  }

}
</script>
<style lang="less" scoped>
.fadeInUp-enter-active{
    transition: all .25s cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transform: none;
  }
.fadeInUp-enter{
  opacity: 0;
  transform:translateY(-32px);
}

</style>



