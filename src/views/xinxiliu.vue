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
      <el-table-column fixed prop="project" label="项目" width="120"></el-table-column>
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
      <el-table-column prop="education" label="学历"></el-table-column>
      <el-table-column prop="profession" label="专业" width="220"></el-table-column>
      <el-table-column prop="year" label="年限"></el-table-column>
      <el-table-column prop="shengfen" label="省份" width="130"></el-table-column>
      <el-table-column prop="first" label="首考" align="center" width="50"></el-table-column>
      <el-table-column prop="company" label="公司" width="260"></el-table-column>
      <el-table-column fixed="right" label="操作" width="140">
        <template v-slot="soltProps">
          <el-button
            type="info"
            icon="el-icon-plus"
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

    <!-- 添加对话框 -->
    <el-dialog title="添加数据" :visible.sync="addDialog" width="600px">
      <el-form ref="form" :model="curRowData" label-width="80px" :inline="true">
        <el-form-item label="解析">
          <el-input type="textarea" style="width:460px" v-model="discernText" autosize
          @input="discern(discernText)"
           ref="customerInput"
          ></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-input v-model="addParams.date" disabled></el-input>
        </el-form-item>
        <el-form-item label="项目">
          <el-input v-model="addParams.project"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="addParams.uname"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="addParams.phone"></el-input>
        </el-form-item>
        <el-form-item label="学历">
          <el-input v-model="addParams.education"></el-input>
        </el-form-item>
        <el-form-item label="专业">
          <el-input v-model="addParams.profession"></el-input>
        </el-form-item>
        <el-form-item label="年限">
          <el-input v-model="addParams.year"></el-input>
        </el-form-item>
        <el-form-item label="省份">
          <el-input v-model="addParams.shengfen"></el-input>
        </el-form-item>
        <el-form-item label="首考">
          <el-input v-model="addParams.first"></el-input>
        </el-form-item>
        <el-form-item label="公司">
          <el-input v-model="addParams.company"></el-input>
        </el-form-item>
        <el-form-item label="分配">
          <el-autocomplete
            :fetch-suggestions="loadSalesman"
            v-model="addParams.apportion"
            @input="addParams.input = 'on'"
            @select="changeSalesmanOrder(addParams.apportion)"
          ></el-autocomplete>
        </el-form-item>
        <el-form-item label="录入">
          <el-switch v-model="addParams.input == 'on'" 
          @change="addParams.input == 'on'? addParams.input ='':addParams.input = 'on'"></el-switch>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialog = false">取 消</el-button>
        <el-button type="primary" @click="confirmAdd()">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 编辑对话框 -->
    <el-dialog title="录入分配" :visible.sync="editDialog" width="600px">
      <el-form ref="form" :model="curRowData" label-width="80px" :inline="true">
        <el-form-item label="日期">
          <el-input v-model="curRowData.date" disabled></el-input>
        </el-form-item>
        <el-form-item label="项目">
          <el-input v-model="curRowData.project"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="curRowData.uname"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="curRowData.phone"></el-input>
        </el-form-item>
        <el-form-item label="学历">
          <el-input v-model="curRowData.education"></el-input>
        </el-form-item>
        <el-form-item label="专业">
          <el-input v-model="curRowData.profession"></el-input>
        </el-form-item>
        <el-form-item label="年限">
          <el-input v-model="curRowData.year"></el-input>
        </el-form-item>
        <el-form-item label="省份">
          <el-input v-model="curRowData.shengfen"></el-input>
        </el-form-item>
        <el-form-item label="首考">
          <el-input v-model="curRowData.first"></el-input>
        </el-form-item>
        <el-form-item label="公司">
          <el-input v-model="curRowData.company"></el-input>
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
        <el-form-item label="分配">
          <el-autocomplete 
          :fetch-suggestions="loadSalesman"
          v-model="curRowData.apportion"
           @input="curRowData.input = 'on'"
           @select="changeSalesmanOrder(curRowData.apportion)"
           >
          </el-autocomplete>
        </el-form-item>
        <el-form-item label="录入">
          <el-switch v-model="curRowData.input == 'on'" 
          @change="curRowData.input == 'on'? curRowData.input ='':curRowData.input = 'on'"></el-switch>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialog = false">取 消</el-button>
        <el-button type="primary" @click='confirmEdit(curRowData)'>确 定</el-button>
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
      addDialog: false, //录入对话框
      editDialog: false, //编辑对话框
      discernText: '',  //识别的文本
      curRowData: "", //当前行数据
      addParams: {    //添加的数据
          project: '',
          umame: '',
          phone: '',
          education: '',
          profession: '',
          year: '',
          shengfen: '',
          date: '',
          first: '',
          company: '',
          apportion: '',
          input: ''
      }
    };
  },
  methods: {
    ...mapActions(["getData", "entryData", "dealData", "deleteData", "postData"]),
    ...mapMutations(["changeSalesmanOrder"]),
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
    //创建当前时间
    getDate(){
      let theDate = new Date();
      let a = theDate.getFullYear();
      let b = theDate.getMonth();
      b<9?b="0"+(b+1):b+=1;
      let c = theDate.getDate();
      c<10?c="0"+c:c=c;
      let d = theDate.getHours();
      d<10?d="0"+d:d=d;
      let e = theDate.getMinutes();
      e<10?e="0"+e:e=e;
      theDate =`${a}-${b}-${c} ${d}:${e}`;
      return theDate
    },
    //添加小按钮
    entry(data) {
      this.curRowData = data;
      this.addParams.date = this.getDate()
      this.addDialog = true;
        //录入表单聚焦
      setTimeout(() => {
        this.$refs.customerInput.$el.querySelector("textarea").focus();
      }, 10);
    },
    //编辑小按钮
    edit(data) {
      this.curRowData = data;
      this.editDialog = true;
    },
    //识别自动填写
    discern(txt) {
      let phone = txt.match(/1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}/)
      phone && (this.addParams.phone = phone[0])
      let education = txt.match(/(本科|中专|大专|高中)(以上)?(以下)?/)
      education && (this.addParams.education = education[0])
      let uname = txt.match(/(李|王|张|刘|陈|杨|赵|黄|周|吴|徐|孙|胡|朱|高|林|何|郭|马|罗|梁|宋|郑|谢|韩|唐|冯|于|董|萧|程|曹|袁|邓|许|傅|沈|曾|彭|吕|苏|卢|蒋|蔡|贾|丁|魏|薛|叶|阎|余|潘|杜|戴|夏|钟|汪|田|任|姜|范|方|石|姚|谭|廖|邹|熊|金|陆|郝|孔|白|崔|康|毛|邱|秦|江|史|顾|侯|邵|孟|龙|万|段|漕|钱|汤|尹|黎|易|常|武|乔|贺|赖|龚|文|庞|樊|兰|殷|施|陶|洪|翟|安|颜|倪|严|牛|温|芦|季|俞|章|鲁|葛|伍|韦|申|尤|毕|聂|丛|焦|向|柳|邢|路|岳|齐|沿|梅|莫|庄|辛|管)[\u4e00-\u9fa5]{0,2}/)
      uname && (this.addParams.uname = uname[0])
      let shengfen = txt.match(/(广州|深圳|海|汕头|佛山|韶关|湛江|肇庆|江门|茂名|惠州|梅州|汕尾|河源|阳江|清远|东莞|中山|潮州|揭阳|云浮|河南|安徽|福建|甘肃|贵州|海南|河北|黑龙江|湖北|湖南|吉林|江苏|江西|辽宁|青海|山东|山西|陕西|四川|云南|浙江|广西|宁夏|内蒙|西藏|新疆)/)
      shengfen && (this.addParams.shengfen = shengfen[0])
      let year = txt.match(/(两|2|3|4|5|6|7)年(以上)?(以下)?/)
      year && (this.addParams.year = year[0])
      let profession = txt.match(/(工程类|工程经济类|其他专业)/)
      profession && (this.addParams.profession = profession[0])
      let project = txt.match(/(二建报考条件|BIM考证|二建培训|二建报考预审|二级建造师考试条件预审平台|一级建造师报考条件查询|gdt)/)
      if(project) {
        switch (project[0]) {
          case '二建报考条件':
          case '二建报考预审':
          case '二建培训':
            this.addParams.project = '二建（新）'
            break;
          case 'BIM考证':
            this.addParams.project = 'BIM'
            break;
          case '二级建造师考试条件预审平台':
            this.addParams.project = '二建'
            break;
          case '一级建造师报考条件查询':
            this.addParams.project = '一建'
            break;
          case 'gdt':
            this.addParams.project = '二建（广点通）'
            break;
        }
      }
    },
    //确定添加
    confirmAdd() {
      this.addDialog = false;
      let url = 'http://unobb.cn/' + this.params.project + '/receive_ajax.php'
      let params = Qs.stringify(this.addParams); //数据格式作转换
      this.postData({url,params})
      .then( res => {
          if(res == 'succ'){
              this.$message({message:'添加成功',type:'success',duration: 1500})
          }
      })
      this.discernText = ''
      for (let key in this.addParams) {
          this.addParams[key] = ''
      }
    },
    //确定修改
    confirmEdit(curRowData) {
      this.editDialog = false;
      let params = Qs.stringify(curRowData); //数据格式作转换
      let url = 'http://unobb.cn/pidiqidata/' + this.params.project + 'Update.php'
      this.postData({url,params}).then(res => {
          if(res.code == 1){
              this.$message({message:'修改成功',type:'success',duration: 1500})
          }
      })
    },
    //删除数据
    async confirmDelete(uid,uname){
      // let res = confirm('确定删除--'+uname+'?'+uid)
      // let params = Qs.stringify({ project: this.params.project, uid}); //数据格式作转换
      // if(res){
      //   this.deleteData(params)
      // }else{
      //   return false
      // }
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
    this.params.project = 'xinxiliu'
    this.getData();
  }
};
</script>

<style lang="less" scoped>
.wrap {
  max-width: 1800px;
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
