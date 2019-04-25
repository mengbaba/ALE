<template>
    <div ref="navList" id="nav">
      <el-button  class="closed" @click="closedNav()">收起</el-button>
      <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#96c4e6"
      text-color="#fff"
      active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isCollapse: true
        }
    },
    computed:{
      navData() {
        return this.$store.getters.getNavList;
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      closedNav() {
        this.$store.commit("navStatus",false);
      }
    }
}
</script>

<style lang="scss" scoped>
    #nav{
        width:15%;
        height:100%;
        align-items:center;
        position: fixed;
        top: 95px;
        bottom: 0px;
        left: 0px;
        background-color:$config-color;
        .el-menu-vertical-demo{
           .el-submenu .el-submenu__title i{
            color:$white-base;
            right:7px;
            }
        }
        .closed{
            width:100%;
            font-size:16px;
            background-color:$white-base;
            font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }
        i{
            color:$white-base;
        }
    }
</style>
