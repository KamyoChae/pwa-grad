<template>
<div class="wrapper">
    <div class="nav">
        <span>昵称</span>
        <span>
        <input type='text' v-model="value" @blur="sendName" />
        </span>
    </div>

    <div class="nav"> 
        <span>账号</span>
        <span>{{user_num}}</span>
    </div> 
    <div class="nav"> 
        <span>安全</span>
        <router-link tag="span" :to="{name:'resetPw'}">重置密码</router-link>
    </div>  
    
</div>

</template>

<script> 
export default {
    data(){
        return {
            value : "王大锤",
            user_num:'11233',
            user_type:'2'
        }
    },
    methods:{
        sendName(){
            this.$axios.get(
                `/changeName?num=${this.user_num}&vale=${this.value}&uType=${this.user_type}` 
            ).then((res)=>{
                console.log(res)
                console.log('成功修改名字') 
            }).catch((err)=>{
                console.log(err)
                console.log('接口失效')
            }) 
        }
    }
 
}
</script>

<style lang='stylus' scoped>
.wrapper
    margin-top 7em
    .nav
        display flex 
        font-size 1rem 
        padding 1em
        border-top 1px solid #eee 
        margin-bottom 0
        justify-content space-between
        span 
            margin 0 1em 0 .5em
        input  
            text-align right 
    .nav:last-child
        border-bottom 1px solid #eee 
</style>