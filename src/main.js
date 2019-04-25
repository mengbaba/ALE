import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Element from "element-ui";
import Cookie from "js-cookie";
import 'element-ui/lib/theme-chalk/index.css';
//样式初始化
import './assets/css/resetcss.css';
//scss 定义
import './sass//var.scss'
//多语言
import i18n from './i18n/il8n'
console.log(Cookie.set("name","use"));
Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.config.productionTip = false; 
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
