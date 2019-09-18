import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //搜索栏数据
    search:''
  },
  mutations: {
    //更新搜索栏数据
    updateSearch(state,value){
      state.search = value;
    }
  },
  actions: {

  }
})
