<template>

<div class="wrapper">
    
    <router-link to="/gromana" tag="div">社团/组织管理</router-link> 
    <router-link to="/user-black" tag="div">用户小黑屋</router-link> 
    <router-link tag="div" to="/edit-sys-info">发布公告</router-link>

    <router-link to="/create-admin" tag="div" class="danger" >新建管理员账户</router-link> 
</div>
</template>

<script>
import getCookie from '../static/js/getCookie'
export default {
    data(){
        return {
            
        }
    },
    methods:{
        editSysInfo(){
            this.$router.push('/edit-sys-info')
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
    text-align center
    padding-top 2rem

    div 
        width 60vw 
        padding 0.55em 2em 
        font-size 1.2rem 
        border-radius 5px 
        border 1px solid #ddd 
        margin 1rem auto 

    .danger 
        position absolute
        bottom 10vh 
        left 0 
        right 0
        margin auto
        background #f34454
        color #fff 
</style>