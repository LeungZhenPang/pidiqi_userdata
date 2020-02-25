<template>
  <div class="wrap">
    <el-table
      :data="data.data"
      v-loading="loading"
      style="width: 100%"
      max-height="700"
      border
      :header-cell-style="{background:'#67a6e6',color:'#fff'}"
      header-row-class-name="tableHead"
      :row-class-name="tableRowClassName"
    >
      <el-table-column fixed type="index" width="40" align="center"></el-table-column>
      <el-table-column fixed prop="project" label="项目"></el-table-column>
      <el-table-column fixed prop="uname" label="姓名"></el-table-column>
      <el-table-column fixed prop="phone" label="电话" width="120"></el-table-column>
      <el-table-column prop="date" label="日期" width="140"></el-table-column>
      <el-table-column prop="input" label="录入" align="center" width="50">
        <template v-slot="slotProps">
          <span :class="{'el-icon-check':slotProps.row.input == 'on'}" class="luru"></span>
        </template>
      </el-table-column>
      <el-table-column prop="apportion" label="分配"></el-table-column>
      <el-table-column prop="deal" label="有效" align="center" width="50">
        <template v-slot="slotProps">
          <span
            :class="{
              'iconfont icon-a':slotProps.row.deal == 'a',
              'iconfont icon-b':slotProps.row.deal == 'b',
              'iconfont icon-c':slotProps.row.deal == 'c',
              'el-icon-circle-close':slotProps.row.deal == 'invalid',
              'el-icon-circle-check':slotProps.row.deal == 'valid',
              'el-icon-s-check':slotProps.row.deal == 'deal'
              }"
            class="luru"
          ></span>
        </template>
      </el-table-column>
      <el-table-column prop="deal_price" label="情况" width="160"></el-table-column>
      <el-table-column fixed="right" label="操作" width="140">
        <template v-slot="soltProps">
          <el-button
            type="info"
            icon="el-icon-s-custom"
            size="mini"
            plain
            @click="entry(soltProps.row)"
          ></el-button>
          <el-button
            type="primary"
            icon="el-icon-edit"
            size="mini"
            plain
            @click="edit(soltProps.row)"
          ></el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini" plain @click="confirmDelete(soltProps.row.uid,soltProps.row.uname)"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 录入对话框 -->
    <el-dialog title="录入分配" :visible.sync="entryDialog" width="600px">
      <el-form ref="form" :model="curRowData" label-width="80px" :inline="true">
        <el-form-item label="项目">
          <el-input v-model="curRowData.project" disabled></el-input>
        </el-form-item>
        <el-form-item label="日期">
          <el-input v-model="curRowData.date" disabled></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="curRowData.uname" disabled></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="curRowData.phone" disabled></el-input>
        </el-form-item>
        <el-form-item label="分配">
          <el-autocomplete
            :fetch-suggestions="loadSalesman"
            v-model="curRowData.apportion"
            @input="curRowData.input = 'on'"
            ref="customerInput"
          ></el-autocomplete>
        </el-form-item>
        <el-form-item label="录入">
          <el-switch v-model="curRowData.input == 'on'"
          @change="curRowData.input == 'on'? curRowData.input ='':curRowData.input = 'on'"></el-switch>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="entryDialog = false">取 消</el-button>
        <el-button type="primary" @click="confirmEntry(curRowData.uid, curRowData.apportion, curRowData.input)">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 编辑对话框 -->
    <el-dialog title="录入分配" :visible.sync="editDialog" width="600px">
      <el-form ref="form" :model="curRowData" label-width="80px" :inline="true">
        <el-form-item label="项目">
          <el-input v-model="curRowData.project" disabled></el-input>
        </el-form-item>
        <el-form-item label="日期">
          <el-input v-model="curRowData.date" disabled></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="curRowData.uname" disabled></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="curRowData.phone" disabled></el-input>
        </el-form-item>
        <el-form-item label="有效">
          <el-select v-model="curRowData.deal" placeholder="是否有效" style="width:185px">
            <el-option label="有效" value="valid"></el-option>
            <el-option label="A类" value="a"></el-option>
            <el-option label="B类" value="b"></el-option>
            <el-option label="C类" value="c"></el-option>
            <el-option label="无效" value="invalid"></el-option>
            <el-option label="成交" value="deal"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="情况">
          <el-input v-model="curRowData.deal_price"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialog = false">取 消</el-button>
        <el-button type="primary" @click='confirmEdit(curRowData.uid, curRowData.deal, curRowData.deal_price)'>确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Qs from "qs";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      entryDialog: false, //录入对话框
      editDialog: false, //编辑对话框
      curRowData: "" //当前行数据
    };
  },
  methods: {
    ...mapActions(["getData", "entryData", "dealData", "deleteData"]),
    //分配业务员的输入建议
    loadSalesman(queryString,cb){   
      let salesman = queryString ? this.salesman.filter(val=>val.value.includes(queryString)) : this.salesman;
      cb(salesman)
    },
    //未录入添加warning-row样式
    tableRowClassName({ row, rowIndex }) {
      if(row.input == ''){
        return 'warning-row';
      }
      return ''
    },
      //录入小按钮
    entry(data) {
      this.curRowData = data;
      this.entryDialog = true;
        //录入表单聚焦
      setTimeout(() => {
        this.$refs.customerInput.$el.querySelector("input").focus();
      }, 10);
    },
      //编辑小按钮
    edit(data) {
      this.curRowData = data;
      this.editDialog = true;
    },
      //确定录入
    confirmEntry(uid, apportion,input) {
      this.entryDialog = false;
      let params = Qs.stringify({ project: this.params.project, uid, apportion, input }); //数据格式作转换
      this.entryData(params);
    },
    //确定修改
    confirmEdit(uid, deal, dealPrice) {
      this.editDialog = false;
      let params = Qs.stringify({ project: this.params.project, uid, deal, dealPrice }); //数据格式作转换
      this.dealData(params)
    },
    //删除数据
    async confirmDelete(uid,uname){
      const confirmRes = await this.$confirm(
        '确定删除--'+uname+'?',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'waring'
        }
      ).catch(err => err)
      if(confirmRes == 'confirm') {
        let params = Qs.stringify({ project: this.params.project, uid}); //数据格式作转换
        this.deleteData(params)
        .then( res => {
          if(res == 1){
              this.$message.error({message:'删除成功',duration: 1500})
          }
        })
      }else {
        return this.$message.info({message:'已取消删除',duration:1500})
      }
    }
  },
  computed: {
    ...mapState(["data", "loading", "params","salesman"])
  },
  created() {
    this.params.project = 'student_user'
    this.getData();
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
.el-icon-circle-close {
  color: #f57f7f;
}
.el-icon-circle-check {
  color: #98d47a;
}
.el-icon-s-check {
  color: #ff8d00;
}
</style>
