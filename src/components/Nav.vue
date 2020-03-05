<template>
  <div class="wrap">
    <div class="main clearfix">
      <!-- logo -->
      <div class="logo fl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 533 180"
        >
          <path
            fill-rule="evenodd"
            fill="rgb(250, 250, 250)"
            d="M533.000,129.317 C533.000,135.629 527.848,140.776 521.531,140.776 C515.215,140.776 510.063,135.629 510.063,129.317 L510.063,50.162 L510.063,50.162 C510.063,50.161 510.063,50.161 510.063,50.161 C510.063,43.850 515.215,38.703 521.531,38.703 C527.848,38.703 533.000,43.850 533.000,50.161 C533.000,50.161 533.000,50.161 533.000,50.162 L533.000,50.162 L533.000,129.317 ZM490.026,125.119 L490.026,126.502 L490.026,166.619 C483.080,172.068 475.371,176.587 467.089,180.001 L467.089,149.473 L467.089,137.451 C456.887,145.446 444.044,150.226 430.077,150.226 C396.919,150.226 370.029,123.360 370.029,90.231 C370.029,57.102 396.919,30.235 430.077,30.235 C444.044,30.235 456.887,35.016 467.089,43.010 L467.089,30.054 L467.408,30.054 C476.585,35.804 484.339,43.611 490.026,52.826 L490.026,86.890 C490.087,87.996 490.124,89.109 490.124,90.231 C490.124,91.321 490.084,92.401 490.026,93.477 L490.026,125.119 ZM467.089,87.367 C465.761,68.096 449.700,52.867 430.077,52.867 C409.584,52.867 392.965,69.472 392.965,89.947 C392.965,110.423 409.584,127.027 430.077,127.027 C449.700,127.027 465.761,111.798 467.089,92.528 L467.089,87.367 ZM338.880,140.776 C332.564,140.776 327.412,135.629 327.412,129.317 L327.412,50.162 L327.412,50.162 C327.412,50.161 327.412,50.161 327.412,50.161 C327.412,43.850 332.564,38.703 338.880,38.703 C345.197,38.703 350.349,43.850 350.349,50.161 C350.349,50.161 350.349,50.161 350.349,50.162 L350.349,50.162 L350.349,129.317 C350.349,135.629 345.197,140.776 338.880,140.776 ZM307.081,127.174 C301.395,136.389 293.640,144.196 284.463,149.946 L284.145,149.946 L284.145,136.990 C273.943,144.984 261.099,149.765 247.132,149.765 C213.975,149.765 187.086,122.898 187.086,89.769 C187.086,56.640 213.975,29.774 247.132,29.774 C261.099,29.774 273.943,34.554 284.145,42.549 L284.145,30.527 L284.145,-0.001 C292.426,3.413 300.136,7.932 307.081,13.381 L307.081,53.498 L307.081,54.881 L307.081,86.523 C307.139,87.599 307.179,88.679 307.179,89.769 C307.179,90.891 307.142,92.004 307.081,93.110 L307.081,127.174 ZM284.145,87.472 C282.816,68.202 266.756,52.973 247.132,52.973 C226.640,52.973 210.021,69.577 210.021,90.053 C210.021,110.528 226.640,127.133 247.132,127.133 C266.756,127.133 282.816,111.904 284.145,92.633 L284.145,87.472 ZM164.977,129.515 C164.977,135.827 159.825,140.974 153.508,140.974 C147.192,140.974 142.040,135.827 142.040,129.515 L142.040,129.515 L142.040,50.360 L142.040,50.360 C142.040,50.360 142.040,50.359 142.040,50.359 C142.040,44.048 147.192,38.901 153.508,38.901 C159.825,38.901 164.977,44.048 164.977,50.359 C164.977,50.361 164.977,50.363 164.977,50.365 L164.977,129.509 C164.977,129.511 164.977,129.513 164.977,129.515 ZM60.047,149.850 C46.080,149.850 33.236,145.070 23.035,137.076 L23.035,149.097 L23.035,179.625 C14.753,176.211 7.043,171.692 0.098,166.243 L0.098,126.126 L0.098,124.743 L0.098,93.102 C0.040,92.026 0.000,90.945 0.000,89.855 C0.000,88.734 0.037,87.621 0.098,86.514 L0.098,52.451 C5.785,43.235 13.539,35.429 22.716,29.678 L23.035,29.678 L23.035,42.635 C33.236,34.640 46.080,29.860 60.047,29.860 C93.204,29.860 120.093,56.726 120.093,89.855 C120.093,122.984 93.204,149.850 60.047,149.850 ZM60.047,52.492 C40.423,52.492 24.363,67.720 23.035,86.991 L23.035,92.152 C24.363,111.423 40.423,126.651 60.047,126.651 C80.539,126.651 97.158,110.047 97.158,89.571 C97.158,69.096 80.539,52.492 60.047,52.492 Z"
          />
        </svg>
      </div>
      <!-- 搜索框 -->
      <div class="search fl">
        <el-input placeholder="请输入搜索内容" v-model="params.searchKeyword" size="small" @input="getData()" clearable>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>

      <!-- 日期过滤 -->
      <div class="date-filter fl">
        <el-date-picker
          size="small"
          v-model="dateFilterData"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions"
          @change="dateFilter()">
        </el-date-picker>
      </div>

      <!-- 刷新 -->
      <div class="refresh el-icon-refresh fl" @click="refreshData()"></div>      
      <!-- 分配icon -->
      <div class="refresh el-icon-user fl" @click="salesmanDialog = true"></div>
      <!-- 添加icon -->
      <div class="refresh el-icon-circle-plus-outline fl" @click="entry"></div>

      <div class="exit fr" @click="out">[退出]</div>
      <router-link class="router-link fr" to="/huodong">活动</router-link>
      <router-link class="router-link fr" to="/shiti">试题</router-link>
      <router-link class="router-link fr" to="/biaodan">表单</router-link>
      <router-link class="router-link fr" to="/xinxiliu">信息流</router-link>
      <router-link class="router-link fr" to="/shouzi">首咨</router-link>
      <router-link class="router-link fr" to="/sz_biaodan">深圳</router-link>

      <!-- 分配对话框 -->
      <el-dialog title="分配人员" :visible.sync="salesmanDialog" width="600px">
        <el-checkbox-group v-model="checkSalesman" size="medium">
          <el-checkbox v-for="man in allSalesman" :label="man.value" border></el-checkbox>
        </el-checkbox-group>
        <p style="margin-top: 20px;font-size: 14px;line-height: 24px">
          <span v-for="man in salesman">{{man.value}}  &gt </span>
        </p>
        <span slot="footer" class="dialog-footer">
          <el-input v-model="createSalesmanName" placeholder="添加业务员姓名" style="width:30%;margin-right:10px"></el-input>
          <el-button type="primary" @click="createSalesman">添 加</el-button>
          <el-button type="danger" @click="deleteSalesman">删 除</el-button>
        </span>
      </el-dialog>

      <!-- 添加对话框 -->
    <el-dialog title="添加数据" :visible.sync="addDialog" width="600px">
      <el-form ref="form" :model="addParams" label-width="80px" :inline="true">
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

    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import Axios from 'axios'
import Qs from "qs";

export default {
    data() {
      return {
        pickerOptions: {
          shortcuts: [
            {
            text: '今天',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '最近两天',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', [start, end]);
            }
          }, 
          {
            text: '最近三天',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 2);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        dateFilterData: '',   //日期过滤数据
        salesmanDialog: false,   //分配人员对话框
        discernText: '',  //识别的文本
        addDialog: false,   //添加数据对话框
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
      },
        allSalesman: [],      //所有分配人员
        checkSalesman: [],    //选中分配人员
        createSalesmanName: ''    //新增分配人员姓名
      };
    },
    computed: {
      ...mapState(['params','data','salesman']),
    },
    watch: {
      //选择后的分配人员
      checkSalesman: function (val) {
        let arr = []
        val.forEach((item,index) => {
          arr[index] = {value: item}
        })
        this.$store.state.salesman = arr
      }
    },
    methods:{
      ...mapActions(['getData','changeSalesman','postData']),
      //添加分配人员
      async createSalesman(){
        if(!this.createSalesmanName == ''){
          let uname = this.createSalesmanName
          const {data} = await Axios.post('http://unobb.cn/salesman/createSalesman.php',`uname=${uname}`)
          console.log(data)
          this.createSalesmanName = ''
          this.getSalesMan()
        }
      },
      //删除分配人员
      async deleteSalesman(){
        if(this.checkSalesman.length > 0){
          const delData = this.checkSalesman.join('and')
          console.log(delData)
          const {data} = await Axios.post('http://unobb.cn/salesman/deleteSalesman.php',`delData=${delData}`)
          console.log(data)
          this.getSalesMan()
          this.checkSalesman = []
        }
      },
      //分配业务员的输入建议
      loadSalesman(queryString,cb){   
        let salesman = queryString ? this.salesman.filter(val=>val.value.includes(queryString)) : this.salesman;
        cb(salesman)
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
        this.addParams.date = this.getDate()
        this.addDialog = true;
          //录入表单聚焦
        setTimeout(() => {
          this.$refs.customerInput.$el.querySelector("textarea").focus();
        }, 10);
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
      //刷新数据
      refreshData(){
        let oldPage = this.data.recordCount
        this.getData()
          .then( res => {
            if(res.recordCount == oldPage){
              this.$message({message:'无新数据刷新',duration: 1000})
            }else {
              let n = res.recordCount-oldPage
              this.$message({message:'有'+n+'条新数据',type:'success',duration: 1500})
            }
            })
      },
      //退出登陆
      out() {
        localStorage.removeItem('datapsw');
        this.$router.push('/')
        window.location.reload(true)
      },
      // 日期过滤
      dateFilter() {
        if(this.dateFilterData){
          this.params.startDate = this.changDateFormat(this.dateFilterData[0])
          this.params.endDate = this.changDateFormat(this.dateFilterData[1]) + ' 99:99'
          this.getData()
        }else {
          this.params.startDate = ''
          this.params.endDate = ''
          this.getData()
        }
      },
      //转化日期格式
      changDateFormat(date){
        let a = date.getFullYear();
        let b = date.getMonth();
        b<9?b="0"+(b+1):b+=1;
        let c = date.getDate();
        c<10?c="0"+c:c=c;
        return `${a}-${b}-${c}`
      },
      //加载分配人建议
      async getSalesMan (){
        let {data} = await Axios.get('http://unobb.cn/salesman/loadData.php')
        this.allSalesman = data
      }
    },
    created() {
      this.getSalesMan()    //加载分配人数据
    }
}
</script>

<style lang="less" scoped>
@base:#fd7830;
.wrap {
  height: 60px;
  background-color: #1d4063;
}
.main {
  width: 1200px;
  margin: 0 auto;
  .logo {
    width: 110px;
    margin-right: 20px;
    padding-top: 12px;;
  }
  .search {
      padding: 14px;
      .el-input__inner:focus {
          border-color: none;
      }
      .el-input-group__append {
          color: fff;
          background-color: #b72121;
          border: none;
      }
  }

//日期过滤
.date-filter {
  padding-top: 14px;
  div.el-date-editor--daterange.el-input__inner {
    width: 248px;
  }
}

// 刷新
.refresh {
  color: #fff;
  margin-left: 10px;
  font-size: 24px;
  line-height: 60px;
  cursor: pointer;
}

//   退出登录
.exit {
    margin-left: 20px;
    line-height: 60px;
    color: @base;
    cursor: pointer;
}

//路由链接
.router-link {
    height: 56px;
    padding: 0 10px;
    font-size: 16px;
    line-height: 60px;
    color: #fff;
    text-decoration: none;
    border-bottom: 0px solid @base;
    transition: all .2s ease-in-out;
    &:hover {
        color: @base
    }
}
.router-link-active {
    color: @base;
    border-width: 4px;
    background-color: #0e2e4e;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}
}

//分配对话框
.el-checkbox {
  width: 100px;
  margin: 5px 10px;
}
.el-checkbox:last-of-type {
  margin-right: 10px;
}
</style>