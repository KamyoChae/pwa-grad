<template>
    <div class="wrapper">
        <div class="canvas">
            <canvas ref="mcanvas1" ></canvas>
        </div>

        <div class="canvas">
            <canvas ref="mcanvas2" ></canvas>
        </div> 

        <div class="title" >管理员登录 </div> 
 
        <div class="inputbox">
            <input type="text" name="userNum" id="userNum" placeholder="管理员账号" v-model="userNum">
            <input type="password" name="password1" id="password1" placeholder="密码" v-model="userPw">

            <button @click="adminLogin">登录</button>

        </div> 
    </div>
 
</template>

<script>
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
    methods: {
       
        adminLogin(){
        
            this.$axios.post("/api/adminLogin", { 
                userNum:this.userNum,
                userPw:this.userPw
            }).then((res)=>{
                console.log(res)
                if(res.data.state == "OK"){
                
                    var data = res.data  
                    var user = {
                        NAME : data.stu_name,
                        NUM : data.stu_num,
                        TYPE : data.user_type
                    }
                    this.$store.commit('userStore/getStuInfo', user)
                    localStorage.setItem("user", JSON.stringify(user))
                    this.$router.push('/admin')
                }else{
                    alert('密码不对')
                }

            }).catch((err)=>{
                console.log(err)
                console.log('接口失效')
            })
        
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
