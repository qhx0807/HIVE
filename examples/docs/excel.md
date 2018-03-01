# 纯前端利用 js-xlsx 实现 Excel 文件导入导出功能

- [GitHub JS-XLSX](https://github.com/SheetJS/js-xlsx 'js-xlsx')

- 安装 `npm install xlsx --save`


#### 导出 Excel 功能

`exportExcel(Json, FileName)`

<div class="demo-block">
  <table class="table" style="margin-bottom: 10px;">
    <thead>
      <tr>
        <th>name</th>
        <th>age</th>
        <th>address</th>
        <th>date</th>
      <tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in tableData" :key="index">
        <td>{{item.name}}</td>
        <td>{{item.age}}</td>
        <td>{{item.address}}</td>
        <td>{{item.date}}</td>
      <tr>
    </tbody>
  </table>
  <i-button type="primary" @click="fn">exportExcel</i-button>
</div>

::: demo
```javascript
  import { exportExcel, importExcel } from '../../packages/utils/xlsx'
  tableData = [...]
  fn(){
    exportExcel(this.tableData, '导出来的Excel')
  }
```
:::

#### 导入 Excel 功能

<div class="demo-block">
  <input type="file" @change="importFile($event)" id="imFile" style="display: none"
     accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>
  <i-button type="primary" @click="fn1">ImportExcel</i-button>

  <div style="margin-top: 12px">
    <p>结果：</p>
    <div>{{JSON.stringify(excelData)}}</div>
  </div>

</div>




<script>
import { exportExcel, importExcel } from '../../packages/utils/xlsx'
export default {
  data(){
    return {
      tableData: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ],
      excelData: []
    }
  },
  methods:{
    fn() {
      exportExcel(this.tableData, '导出来的Excel')
    },
    fn1() {
      document.getElementById("imFile").click()
    },
    importFile (e) {
      importExcel(e.target.files[0]).then(function(json){
        console.log(json)
        this.excelData = json
      }.bind(this)).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>
