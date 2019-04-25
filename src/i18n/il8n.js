import Vue from "vue";
import VueIl8n from "vue-i18n";
import en from './data/en'
import zh from './data/zh'
Vue.use(VueIl8n);

const il8n = new VueIl8n({
    locale: localStorage.getItem('login_Lang') ||'zh',
    messages:{
        zh,
        en
    }
})
export default il8n;

