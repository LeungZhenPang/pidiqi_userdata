import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: '123',   //数据内容
    params: {    //请求所需参数
      pageNum: 1,
      project: 'shenhe_user',
      datapsw: 'pidiqi2019',
      searchKeyword: '',
      isDeal: ''
    }
  },
  mutations: {
    changeData(state,data){
      state.data = data
    }
  },
  actions: {
    async getData({commit,state}) {   //请求数据
      let {data} = await Axios.get('http://unobb.cn/pidiqidata/loadData.php',{params: state.params})
      commit('changeData',data)
    }
  },
  modules: {
  }
})
