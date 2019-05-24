<template>

<div class="wrapper">
    
    <div>社团/组织管理</div>  
    <div>用户小黑屋</div> 
    <router-link tag="div" to="/edit-sys-info">发布公告</router-link>
    <div>反馈箱</div>
    <router-link to="/create-admin" tag="div" class="danger" >新建管理员账户</router-link> 
</div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    methods:{
        editSysInfo(){
            this.$router.push('/edit-sys-info')
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