<template>
    <div id="header">
        <div class="header_left">
            <div class="header_logo">
            <img src="../assets/images/login_logo.png" alt="ALE">
            </div>
            <div class="header_group">
                AP {{$t("Group")}} : <span>AP-Group</span>
            </div>
        </div>
        <div class="header_tools">
            <div class="use_name">Administrator</div>
            <div class="refresh">
                <span class="el-icon-refresh"></span>
            </div>
            <div class="refresh_time">
                <el-select  v-model="refreshValue">
                    <el-option v-for="item in refresh_time" 
                    :key="item" 
                    :label="item" 
                    :value="item">
                    </el-option>
                </el-select>
            </div>
            <div class="Language">
                <el-select @change="changeLanguage(LanguageVal)" v-model="LanguageVal">
                    <el-option
                    v-for="item in Language"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="skin">
                <el-color-picker v-model="color1"></el-color-picker>
            </div>
            <div class="log el-icon-date"></div>
            <Tools></Tools>
        </div>
    </div>
</template>
<script>
import Tools from './Tools'
export default {
    data(){
        return {
            color1:"red",
            refreshValue:'30s',
            refresh_time:['30s','60s','120s'],
            LanguageVal:'中文',
            Language:[
                {
                    value:'zh',
                    label:'中文'
                },
                {
                    value:'en',
                    label:'英文'
                }
            ]
        }
    },
    components:{
       Tools
    },
    methods:{
        changeLanguage(data){
            this.$i18n.locale = data;
        }
    }
}
</script>
<style lang="scss">
    @mixin toolsStyle($width){
        width:$width;
        margin-left:5px;
    }
    #header{
        display: flex;
        width: 100%;
        height:100%;
        justify-content:space-between;
        // margin-bottom: 30px;
        background-color:$white-base;
        .header_left{
            display: flex;
            .header_logo{
                img{
                    width: 300px;
                    height: 90px;
                }
            }
            .header_group{    
                cursor: pointer;
                margin-top:25px;
                font-size:$fz-lg;
                color:$apgroup-color;
                span{
                    font-size:$fz-sm;
                    color:$home-color;
                }      
            }
        }
        .header_tools{
            display: flex;
            margin: 25px 50px 0 0;
            .use_name{
                height:35px;
                padding-right:5px;
                line-height: 35px;
                font-size:$fz-lg;
                opacity: 0.7;
                border-right:2px solid #9c9c9c;
            }
            .refresh{
                height:35px;
                margin-left:5px;
                line-height: 35px;
                font-size:25px;
            }
            .refresh_time{
                @include toolsStyle(82px);
            }
            .Language{
                @include toolsStyle(105px);
            }
            .skin{
                @include toolsStyle(40px);
            }
            .log{
                color: rgba(26, 192, 175, 0.493);
                padding-top:4px;
                font-size: 28px
                
            }
            .tool{
                color:#83aad3;
                margin-left:5px;
                padding-top:4px;
                font-size: 28px
                
            }
        }
    }
</style>


