# Textarea 多文本输入

#### 基础用法

<div class="demo-block">
  <i-text v-model="value1"></i-text>
</div>

::: demo

```html
  <i-text v-model="value1"></i-text>
```

:::

#### 自动调整高度

<div class="demo-block">
  <i-text v-model="value2" autosize></i-text>
</div>

::: demo

```html
  <i-text v-model="value2" autosize></i-text>
```

:::

#### 输入限制

<div class="demo-block">
  <i-text v-model="value3" :maxlength="10"></i-text>
</div>

::: demo

```html
  <i-text v-model="value3" :maxlength="10"></i-text>
```

:::

#### iText Attributes

| 参数       | 说明                  | 类型    | 可选值     | 默认值 |
| ---------- | --------------------- | ------- | ---------- | ------ |
| height     | 输入框高度            | Number  | -          | 65     |
| autosize   | 根据内容自动调整高度  | Boolean | true,false | false  |
| maxlength  | 最大输入字符数        | Number  | -          | -      |
| disabled   | 禁用                  | Boolean | true,false | false  |
| readonly   | 只读                  | Boolean | true,false | false  |
| spellcheck | 原生 input spellcheck | Boolean | true,false | false  |
| autofocus  | 原生 input autofocus  | Boolean | true,false | false  |

<script>
export default {
  data(){
    return {
      value1: '',
      value2: '',
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
