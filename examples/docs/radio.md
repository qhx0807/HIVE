# Radio 单选框


<div class="demo-block">
  <Radio v-model="value1" >radio</Radio> <em>// {{value1}}</em>
  <br>
  <br>
  <Radio v-model="value2" disabled>disabled</Radio> <em>// disabled</em>
</div>

::: demo
```html
  <Radio v-model="value1">radio</Radio>
  <Radio v-model="value2" disabled>disabled</Radio>
```
:::


<script>
export default {
  data(){
    return {
      value1: false,
      value2: true,
      value3: '',
    }
  },
  methods:{
    fn(){
      alert(this.value)
    }
  }
}
</script>
