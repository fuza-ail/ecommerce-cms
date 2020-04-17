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
    },
    DeleteData(state,payload){
      state.products = state.products.filter(product => product.id !== payload.id)
    },
    AddData(state,payload){
      console.log(payload,'ni payload')
      state.products.push(payload)
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
    },
    deleteData({commit},payload){
      axios({
        method: 'delete',
        url:`http://localhost:3000/admin/products/${payload.id}`,
        headers:{
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(response=>{
        commit('DeleteData',payload)
      })
      .catch(err=>{
        console.log(err.response)
      })
    },
    addData({commit},payload){
      axios({
        method: 'post',
        url: `http://localhost:3000/admin/products`,
        data:payload,
        headers:{
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(response=>{
        commit('AddData',response.data)
      })
      .catch(err=>{
        console.log(err.response)
      })
    }
  },
  modules: {

  },
});
