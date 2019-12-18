<template>
  <div class="wrap">
    <el-table
     :data="data.data" 
     style="width: 100%" 
     max-height="800" 
     stripe border
     :header-cell-style="{background:'#67a6e6',color:'#fff'}">
      <el-table-column fixed prop="project" label="日期"></el-table-column>
      <el-table-column fixed prop="uname" label="姓名"></el-table-column>
      <el-table-column fixed prop="phone" label="电话" width="120"></el-table-column>
      <el-table-column prop="education" label="学历"></el-table-column>
      <el-table-column prop="profession" label="专业" width="160"></el-table-column>
      <el-table-column prop="year" label="年限"></el-table-column>
      <el-table-column prop="shengfen" label="省份" width="130"></el-table-column>
      <el-table-column prop="date" label="日期" width="140"></el-table-column>
      <el-table-column prop="first" label="首考" width="50"></el-table-column>
      <el-table-column prop="company" label="公司" width="260"></el-table-column>
      <el-table-column prop="input" label="录入" width="50"></el-table-column>
      <el-table-column prop="apportion" label="分配"></el-table-column>
      <el-table-column prop="deal" label="有效"></el-table-column>
      <el-table-column prop="deal_price" label="有效情况"></el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <!-- <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >移除</el-button> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ]
    };
  },
  methods: {
    ...mapActions(['getData'])
  },
  computed: {
    ...mapState(['data'])
  },
  created() {
      this.getData()
  }
};
</script>

<style lang="less" scoped>
.wrap {
    width: 1200px;
    margin: 0 auto;
    padding-top: 30px;
}
</style>
