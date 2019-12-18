<template>
  <div class="wrap">
    <el-table
     :data="data.data" 
     style="width: 100%" 
     max-height="500" 
     stripe border
     :header-cell-style="{background:'#67a6e6',color:'#fff'}"
     header-row-class-name="tableHead">
      <el-table-column fixed prop="project" label="项目"></el-table-column>
      <el-table-column fixed prop="uname" label="姓名"></el-table-column>
      <el-table-column fixed prop="phone" label="电话" width="120"></el-table-column>
      <el-table-column prop="date" label="日期" width="140"></el-table-column>
      <el-table-column prop="input" label="录入" width="50">
        <template slot-scope='scope'>
         <span :class="{'el-icon-check':scope.row.input == 'on'}" class="luru"></span>
        </template>
      </el-table-column>
      <el-table-column prop="apportion" label="分配"></el-table-column>
      <el-table-column prop="deal" label="有效"></el-table-column>
      <el-table-column prop="deal_price" label="有效情况"></el-table-column>
      <el-table-column prop="education" label="学历"></el-table-column>
      <el-table-column prop="profession" label="专业" width="160"></el-table-column>
      <el-table-column prop="year" label="年限"></el-table-column>
      <el-table-column prop="shengfen" label="省份" width="130"></el-table-column>
      <el-table-column prop="first" label="首考" width="50"></el-table-column>
      <el-table-column prop="company" label="公司" width="260"></el-table-column>
      <el-table-column fixed="right" label="操作" width="140">
        <template slot-scope='scope'>
          <!-- {{scope.row.uid}} -->
          <el-button type="info" icon="el-icon-s-custom" size="mini" plain></el-button>
          <el-button type="primary" icon="el-icon-edit" size="mini" plain></el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini" plain></el-button>
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
.el-button--mini {
  padding: 5px 8px;
}
.luru {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
</style>
