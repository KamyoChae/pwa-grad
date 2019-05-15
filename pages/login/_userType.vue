<template>
    <div class="wrapper">
        <div class="canvas">
            <canvas ref="mcanvas1" ></canvas>
        </div>
        
        <div class="canvas">
            <canvas ref="mcanvas2" ></canvas>
        </div> 

        <div class="title" v-if="this.pages == 'login'"><span v-if="$route.params.userType==1">社团</span><span v-else>用户</span>登录
        </div>
        <div class="title" v-else>注册</div>
 
        <div class="inputbox">
            <input type="text" name="username" id="username" placeholder="账号">
            <input type="password" name="password1" id="password1" placeholder="密码">
            <input type="password" v-if="this.pages != 'login'" name="password2" id="password2" placeholder="确认密码">
            <span class="forgetPa">忘记密码</span>
            <router-link tag='button' to="/" v-if="this.pages == 'login'">登录</router-link>
            <button v-else>注册</button>

        </div>
        <div class="foot">
            <p v-if="this.pages == 'login'">

                <span class="register" v-if="$route.params.userType==1" @click="toRegistergrou">注册{{$route.params.userType}}</span>
                <span class="register" v-else @click="toRegister">2注册</span>
                
                账号，加入社团大家庭</p>
            <p v-else>
                
                <span class="login" @click="toRegister">登录</span>
                
                账号，进入社团大家庭</p>
        </div>
    </div>

</template>

<script>
import water from '@/static/js/util'
export default {
    data(){
        return{ 
            pages:'login',

        }
    },
    methods: {
        toRegister(){ 
            // 登录注册页切换
            this.pages == 'login' ? this.pages = 'register' : this.pages = 'login' 
        },
        toRegistergrou(){
            // 注册社团
            this.$router.push('/groureigister')
        }
    },
    mounted(){ 
        water(this.$refs.mcanvas1, "#03a9f4", 50 ,0.01 ) 
        water(this.$refs.mcanvas2, "#2196f3", 30 , 0.03)  
    }
}
</script>

<style lang='stylus' scoped> 
.wrapper
    position relative 
    background #fff  
    .canvas
        position absolute 
    .title
        position relative
        font-weight 200
        font-size 2.5rem !important 
        text-align left 
        color #fff  
        text-shadow .2rem .5rem 2rem #2196f3
        padding 2em 1em
    .inputbox
        display flex
        flex-direction column 
        width 80vw 
        margin auto  
        font-size 1.2rem
        input  
            border 1px solid #ddd
        input, span , button  
            padding 1rem 1.5rem
            border-radius 5px
            margin-bottom 1em
        span 
            padding  0
            font-size 1rem
            text-align right 
            color #2196f3
        button 
            background #2196f3
            color #ffffff 
            box-shadow .2rem .5rem 2rem #2196f3
    .foot
        font-size 1rem
        width 100%
        text-align center
        position absolute
        bottom 2em
        color #aaa
        .register, .login
            color #2196f3

</style>    