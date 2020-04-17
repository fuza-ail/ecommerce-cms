import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(axios);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token:'',
    products:[]
  },
  mutations: {
    fillToken(state,payload){
      state.token = payload;
      state.isLogin= true;
    },
    fillData(state,payload){
      state.products = payload
    }
  },
  actions: {
    getData({commit}){
      axios({
        method:'get',
        url:'http://localhost:3000/admin/products',
      })
      .then(response=>{
        commit('fillData',response.data);
      })
      .catch(err=>{
        console.log(err.response);
      })
    }
  },
  modules: {

  },
});
