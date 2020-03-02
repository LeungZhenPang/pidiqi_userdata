<template>
  <div id="app">
    <Nav></Nav>

    <router-view></router-view>

    <div class="page-wrap">
      <el-button-group style="margin-right:10px;position:relative;top:-2px;">
        <el-button type="primary" size="small" @click="params.pageNum = 1">首页</el-button>
        <el-button type="primary" size="small" @click="params.pageNum -= 1" :disabled="data.pageNum == 1">上一页</el-button>
        <el-button type="primary" size="small" @click="params.pageNum += 1" :disabled="data.pageNum == data.pageCount">下一页</el-button>
        <el-button type="primary" size="small" @click="params.pageNum = data.pageCount">尾页</el-button>
      </el-button-group>
      <el-input size="small" style="width:76px;" v-model="skipPage" @keyup.enter.native="skip()">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <p>当前第{{params.pageNum}}/{{data.pageCount}}页 共{{data.recordCount}}条数据</p>
    </div>

    <!-- 登录页面 -->
    <div class="login_wrap" v-show="showLogin">
      <div class="login-logo">
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
      <div class="login_main">
        <input type="text" id="datapsw" autofocus v-model="psw" @keyup.enter="login()" />
        <input type="button" id="login" value="进入" @click="login()" />
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav"; //导航组件
import { mapState, mapActions } from "vuex";
import { async } from "q";
import Qs from "qs"; //post数据转换
export default {
  name: "app",
  data() {
    return {
      psw: "", //密码
      showLogin: true, //登录框显示
      skipPage: 1   //跳转页码
    };
  },
  components: {
    Nav
  },
  methods: {
    ...mapActions(["getData"]),
    // //页码跳转
    skip() {
      this.skipPage = parseInt(this.skipPage)
      console.log(this.skipPage)
      if(this.skipPage > this.data.pageCount){this.skipPage = this.data.pageCount}
      if(this.skipPage < 1){this.skipPage = 1}
      this.params.pageNum = this.skipPage
    },
    //登陆
    async login() {
      localStorage["datapsw"] = this.psw;
      let params = Qs.stringify({ datapsw: localStorage["datapsw"] }); //数据格式作转换
      let { data } = await axios.post(
        "http://unobb.cn/pidiqidata/checkLogin.php",
        params
      );
      if (data.code == 1) {
        this.params.datapsw = this.psw;
        this.showLogin = false;
        this.getData()
      } else {
        alert("密码错误");
        localStorage.removeItem("datapsw");
      }
    }
  },
  computed: {
    ...mapState(["params","data"])
  },
  watch: {
    //页码变化重新加载
    'params.pageNum':function() {
      this.getData()
    },
    // 路由变化
    $route(to, from) {
      this.params.pageNum = 1;
    }
  },
  created() {
    if (localStorage["datapsw"]) {
      this.psw = localStorage["datapsw"];
      this.params.datapsw = this.psw;
      this.showLogin = false;
    }
  },
};
</script>

<style lang="less">
@import url("./assets/font/iconfont.css");
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

// 自定义 icon
.icon-a {
  color: #06c082;
}
.icon-b {
  color: #3089fd;
}
.icon-c {
  color: #7e7e7e;
}

// 登陆
.login-logo {
  width: 200px;
  margin: 300px auto 0;
}
.login_wrap {
  width: 100%;
  height: 100%;
  background: #333;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
}
.login_wrap .login_main {
  width: 180px;
  margin: 0 auto;
}
.login_wrap #datapsw {
  height: 24px;
  border: none;
  outline: none;
  border-radius: 4px;
  width: 120px;
  margin: 20px auto;
  padding-left: 10px;
  box-sizing: border-box;
  height: 34px;
}
.login_wrap #login {
  color: #fff;
  background: #fd7830;
  border: none;
  outline: none;
  padding: 0 10px;
  border-radius: 4px;
  height: 34px;
  cursor: pointer;
  font-size: 16px;
  box-sizing: border-box;
  line-height: 34px;
}

// 页码
.page-wrap {
  padding: 20px;
  p {
    text-align: cetner;
    color: #ccc;
    font-size: 16px;
    padding-top: 10px;
  }
  input.el-input__inner {
    padding: 0 10px
  }
}
div.el-input-group__append {
  padding: 0 10px;
}


.el-table .warning-row {
  background: #ffdede;
}

//滚动条美化
::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: #f5f5f5;
    border-radius: 4px;
}

::-webkit-scrollbar-thumb {
    background-color: #bac7d6;
    border-radius: 4px
}

// 表头条件筛选小箭头颜色
span.el-table__column-filter-trigger i {
  color: #fff
}
div.el-table th>.cell.highlight{
  color: #fff
}
</style>
