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
        <router-link tag="span" :to="{name:'resetPw'}">修改密码</router-link>
    </div>
    <div class="nav">
        <span>社团信息</span>
        <router-link tag="span" :to="{name:'resetInfo'}">更改信息</router-link>
    </div> 
</div>

</template>

<script> 
import { mapState } from 'vuex';
export default {
    // 测试通过
    data(){
        return {
            value : "",
            user_num:'',
        }
    }, 
    created(){
        var user = JSON.parse(localStorage.getItem("user")) 
        this.value = user.NAME
        this.user_num = user.NUM 
        this.user_type = user.TYPE 
    },
    methods:{
        sendName(){
            console.log('开始修改名字')

            this.$axios.get(`/api/changeName?num=${this.user_num}&vale=${this.value}&uType=${this.user_type}`)
            .then((res)=>{
                console.log(res)
                console.log('成功修改名字') 
                var that = this 
                var user = {
                    NAME : that.value,
                    NUM : that.user_num,
                    TYPE : that.user_type
                } 
                this.$store.commit('userStore/getStuInfo', user)
                localStorage.setItem("user", JSON.stringify(user))

                this.$store.commit('userStore/changeName',this.value)
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