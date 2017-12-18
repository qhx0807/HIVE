# Input 输入框

基本表单组件

<div class="demo-block">
  <i-input type="text" prefix="icon-user" v-model="inputval" style="width:250px;" placeholder="your name..."></i-input>
  <i-button @click="fn">test</i-button>
</div>

<script>
export default {
  data(){
    return {
      inputval:''
    }
  },
  methods:{
    fn(){
        alert(this.inputval)
    }
  }
}