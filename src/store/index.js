import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: '获取数据中',   //数据内容
    loading: true,   //加载动画
    params: {    //请求所需参数
      pageNum: 1,
      project: '',
      datapsw: 'fd',
      searchKeyword: '',
      isDeal: ''
    }
  },
  mutations: {
    changeData(state,data){   //重新加载数据
      state.data = data
      state.loading = false
    }
  },
  actions: {
    //请求数据
    async getData({commit,state}) {
      let {data} = await Axios.get('http://unobb.cn/pidiqidata/loadData.php',{params: state.params})
      commit('changeData',data)
    },
    //录入数据
    async entryData({dispatch,commit,state},params) {
      let {data} = await Axios.post('http://unobb.cn/pidiqidata/changeInput.php',params)
      dispatch('getData')   //重新请求数据
    },
    //更改是否有效
    async dealData({dispatch,commit,state},params) {   
      let {data} = await Axios.post('http://unobb.cn/pidiqidata/changeDeal.php',params)
      dispatch('getData')   //重新请求数据
    },
    //删除数据
    async deleteData({dispatch,commit,state},params) {   
      let {data} = await Axios.post('http://unobb.cn/pidiqidata/delete.php',params)
      dispatch('getData')   //重新请求数据
    }
  },
  modules: {
  }
})
