import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang:"",
    navStatus: true,
    navList: []
  },
   getters: {
     isNavShow(state) {
       return state.navStatus;
     },
     getNavList(state) {
      return state.navList;
     }
   },
  mutations: {
    lange(state) {
     
    },
    navStatus(state,status) {
      state.navStatus  = status;
    },
    setNavList(state,list) {
      state.navList = list;
    }
  },
  actions: {}
});
