<template>
<div class="wrapper">
    <div class="nav">
        <span>昵称</span>
        <span>
        <input type='text' v-model="value" @blur="sendName" v-if="showGroInfo" disabled/>
        <input type='text' v-model="value" @blur="sendName" v-else/>
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
    <div class="nav" v-if="showGroInfo">
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
            showGroInfo:''
        }
    }, 
    created(){
        try{
            var user = JSON.parse(localStorage.getItem("user")) 
            this.value = user.NAME
            this.user_num = user.NUM 
            this.user_type = user.TYPE 
            if(this.user_type == "1"){
                // 表示是社团用户 展示按钮
                this.showGroInfo = true 
            }else{
                this.showGroInfo = false 
            }
        }catch(e){

        }

    },
    methods:{
        sendName(){
            console.log('开始修改名字')
            // 获取旧的名字 
            var oldName = JSON.parse(localStorage.getItem("user")).NAME 

            this.$axios.get(`/api/changeName?num=${this.user_num}&vale=${this.value}&uType=${this.user_type}&oldName=${oldName}`)
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