<template>
    <div>
        <el-dropdown size="medium" trigger="click"  @command="handleCommand">
            <span class="el-dropdown-link">
                <i class="tool el-icon-tickets"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                    <div @click="dialogVisible = true">
                        about
                    </div>
                </el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="40%">
            <div class="el-row">
                <img src="../assets/images/about_logo.png" alt="about_logo">
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data(){
        return {
            dialogVisible: false,
        }
    },
    methods:{
        handleCommand(){

        }
    }
}
</script>

<style lang="scss">
    .el-dialog__wrapper{
        .el-dialog__header{
            background-color:$config-color;
        }
        .el-dialog__body{
            img{
                width:140px;
                height:100px;
                margin-left:40%;
                        
            }
        }
    }
    
    
    
</style>
