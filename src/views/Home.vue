<template>
  <div class="home">
    <v-header></v-header>
    <el-button @click="showNav()">展开</el-button>
    <transition name="slide-fade">
      <v-nav v-if="status" :navData="navList"></v-nav>
    </transition>
    <template>
      <div id="content">
        <router-view></router-view>
      </div>
    </template>
    <header></header>
  </div>
</template>

<script>
import { mapState} from "vuex"
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"
import vHeader from "@/components/Header.vue"
import vNav from "@/components/Nav.vue"
export default {
  name: "home",
  data(){
    return{
      isCollapse: true,
      navList:[
        {
          index:"index",
          title:"Dashboard"
        },
        {
          index:"wlan",
          title:"WLAN",
        },
        {
          index:"3",
          title:"AP",
          sub:[
            {
              index:"ap",
              title:"AP Configuration"
            },
            {
              index:"apUpgrade",
              title:"Upgrade All Firmware"
            }
          ]
        },
        {
          index:"clients",
          title:"Clients"
        }
      ]
    }
  },
  components: {
    HelloWorld,
    vHeader,
    vNav
  },
  beforeMount() {
    this.$store.commit("setNavList",this.navList);
  },
  computed: {
    status(){
      return this.$store.getters.isNavShow;
    }
  },
  methods:{
     showNav(){
       this.$store.commit("navStatus",true);
      }
  }
};
</script>
<style lang="scss" scoped>
  .home{
  //  height:100%;
  }
  .slide-fade-enter-active {
    transition: all .5s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(-100%);
    opacity: 0;
  }
  .el-radio-button{
    width:80px;
  }
  #content{
 
  }
  header{
    width:100%;
    height:40px;
    background-color:$white-base;
    position:fixed;
    bottom:0;
  }
  
</style>

