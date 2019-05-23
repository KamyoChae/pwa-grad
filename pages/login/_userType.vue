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
            <input type="text" name="userNum" id="userNum" placeholder="账号" v-model="userNum">
            <input type="password" name="password1" id="password1" placeholder="密码" v-model="userPw">
            <input type="password" v-if="this.pages != 'login'" name="password2" id="password2"  placeholder="确认密码" v-model="userPw2">
            <span class="forgetPa">忘记密码</span>
            <button v-if="this.pages == 'login'" @click="Login($route.params.userType)">登录</button>
            <button v-else @click="stuRegister">注册</button>

        </div>
        <div class="foot">
            <p v-if="this.pages == 'login'">

                <span class="register" v-if="$route.params.userType==1" @click="toRegistergrou">注册{{$route.params.userType}}</span>
                <span class="register" v-else @click="toRegister">注册</span>
                
                账号，加入社团大家庭</p>
            <p v-else>
                
                <span class="login" @click="toRegister">登录</span>
                
                账号，进入社团大家庭</p>
        </div>
    </div>
 
</template>

<script>
import {mapState} from 'vuex'
import water from '@/static/js/util'
// import func from '../../../../vue/notebook/vue-temp/vue-editor-bridge';
export default {
    data(){
        return{ 
            pages:'login', 
            userNum:'',
            userPw:'',
            userPw2:''

        }
    },
    computed:{
 
    },
    methods: {
        toRegister(){ 
            // 登录注册页切换
            this.pages == 'login' ? this.pages = 'register' : this.pages = 'login' 
        },
        toRegistergrou(){
            // 注册社团
            this.$router.push('/groureigister')
        },
        stuRegister(){
            // 学生账户注册 
                this.$axios.post("/api/stuRegister", {
                    userNum:this.userNum,
                    userPw:this.userPw
                }).then((res)=>{
                    console.log(res)
                    if(res.data == "OK"){
                        this.$router.push('/')
                    }else{
                        alert('用户名已存在')
                    }

                }).catch((err)=>{
                    console.log(err)
                    console.log('接口失效')
                })
        },
        Login(userType){
            if(userType == 2){
                // 学生登录 this.userType == 2
                this.$axios.post("/api/stuLogin", {
                    userType:userType,
                    userNum:this.userNum,
                    userPw:this.userPw
                }).then((res)=>{
                    console.log(res)
                    if(res.data.state == "OK"){
                        // 将学生号数据放到vuex树上面
                        var data = res.data  
                        var user = {
                            NAME : data.stu_name,
                            NUM : data.stu_num,
                            TYPE : data.user_type
                        }
                        this.$store.commit('userStore/getStuInfo', user)
                        localStorage.setItem("user", JSON.stringify(user))
                        this.$router.push('/')
                    }else{
                        alert('密码不对')
                    }

                }).catch((err)=>{
                    console.log(err)
                    console.log('接口失效')
                })
            }else if(userType == 1){
                 
                // 社团登录 this.userType == 1
                this.$axios.post("/api/groLogin", {
                    userType:userType,
                    userNum:this.userNum,
                    userPw:this.userPw
                }).then((res)=>{
                    console.log(res)
                    if(res.data.state == "OK"){
                        var data = res.data  
                        var user = {
                            NAME : data.gro_name,
                            NUM : data.gro_num,
                            TYPE : data.user_type
                        }
                        this.$store.commit('userStore/getStuInfo', user)
                        localStorage.setItem("user", JSON.stringify(user))
                        this.$router.push('/')
                    }else{
                        alert('密码不对')
                    }

                }).catch((err)=>{
                    console.log(err)
                    console.log('接口失效')
                })
            }
        }
    },
    mounted(){
        this.userType = this.$route.params.userType
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
        z-index 15
        pointer-events none
    .title
        position relative
        font-weight 200
        font-size 2.5rem !important 
        text-align left 
        color #fff  
        text-shadow .2rem .5rem 2rem #2196f3
        padding 2em 1em
    .inputbox
        z-index 20
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
