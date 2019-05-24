<template>
<div class="wrapper">

    <div class="groItem" v-for="(item, index) in groList" :key="item.gro_id">
        <div class="groName">{{item.gro_name}} 
            <div>负责人：{{item.gro_leader}} {{item.gro_phone}}</div>
        </div>
        <div class="close"> 
            <span class="delete" @click="deleteGro(item.gro_num, index)">删除</span>
        </div>
    </div>
    
</div>

</template>

<script>
import getCookie from '../static/js/getCookie'
export default {
    data(){
        return{
            groList:[]
        }
    },
    methods:{
        deleteGro(num, index){
            if(confirm("删除社团将不可恢复！是否确定？")){
                this.$axios.get("/api/deleteGro?num=" + num).then((res)=>{
                                console.log(res)
                                this.groList.splice(index, 1)
                            })
            }else{

            }
            
        }
    },
    created(){
        try{
            var user_type = getCookie("user_type")
            if(user_type != "0"){
                this.$router.push("/thisisadmin")
            }
            console.log(cookie)
        }catch(e){

        }
        this.$axios.get("/api/getAllSociety").then((res)=>{
            console.log(res)
            this.groList = res.data 
        })
    } 
}
</script>

<style lang='stylus' scoped>
.wrapper 
    padding-top 2rem
    .groItem  
        font-size 1.1rem 
        display flex 
        justify-content space-between
        align-items center
        border-bottom 1px solid #eee 
        padding 1.5em 2rem
        text-align: left;
    .groName 
        div 
            font-size .8em
            color #888
            
    .close
        span
            border 1px solid red
            padding .2em 1em
            border-radius 5px 
            color red 
        .unice 
            color green
            border 1px solid green

</style>