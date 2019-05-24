<template>
<div class="wrapper">
    <div class="search">
        <input type="text" placeholder="搜索/用户名" v-model="query">
        <button class="search" @click="search">查找</button>
    </div>

    <div class="userList" v-for="(item, index) in userData" :key="item.stu_id">
        <div class="username">{{item.stu_name}} <span v-show="0 == item.stu_state">已封禁</span> </div>
        <span class="redspan" v-if="0 == item.stu_state" @click="unerrorState(item.stu_id, index)">解封</span>
        <span class="greenspan" v-else @click="errorState(item.stu_id, index)">封禁</span>
    </div> 
</div>

</template>

<script>
import getCookie from '../static/js/getCookie'
export default {
    data(){
        return{
            query:'',
            userData:[]
        }
    },
    methods:{
        search(){
            this.$axios.get("/api/searchStu?query=" + this.query).then((res)=>{
                console.log(res)
                this.userData = res.data 
            })
        },
        errorState(id, index){
            // 封禁用户
            this.$axios.get("/api/errorState?stu_id=" + id).then((res)=>{
                console.log(res)
                if(res.data == "OK"){ 
                    this.userData[index].stu_state = "0"
                }
            })
        },
        unerrorState(id, index){
            // 解封用户
            this.$axios.get("/api/unerrorState?stu_id=" + id).then((res)=>{
                console.log(res)
                if(res.data == "OK"){ 
                    this.userData[index].stu_state = "1"
                }
            })
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
    }
}
</script>

<style lang='stylus' scoped>
.wrapper 
    font-size 1rem 
    .search 

        display flex 
        justify-content space-around
        align-items center
        padding 3em 2em
        input  
            width 70%
            padding .8em 1em
            border-radius 5px 
            border 1px solid #1976d2
        button  
            padding .8em 1.5em 
            background #1976d2
            color #fff
            border-radius 5px 
    .userList 
        font-size 1.2rem 
        display flex 
        padding 1.5em 2em
        border-bottom 1px solid #ddd
        justify-content space-between   
        .username span 
            font-size .7em
            color red
            border 1px solid red
        .greenspan
            border 1px solid green 
            border-radius 5px 
            padding 0 .5em
            color green 
        .redspan
            border 1px solid red
            border-radius 5px 
            padding 0 .5em
            color red
</style>