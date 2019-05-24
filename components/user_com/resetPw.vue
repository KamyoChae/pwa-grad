<template>
<div class="wrapper">
    <input type="password" placeholder="新密码" v-model="newpw1">
    <input type="password" placeholder="确认新密码" v-model="newpw2">
    <span @click="changePw">确定</span>
</div>

</template>

<script>
import {mapState} from 'vuex'
export default { 
    // 测试通过
    data(){
        return {
            newpw1:'',
            newpw2:'',
            num:'',
            user_type:''
        }
    }, 
    created(){
        try { 
            this.num = JSON.parse(localStorage.getItem("user")).NUM
            this.user_type = JSON.parse(localStorage.getItem("user")).TYPE
        } catch (error) {
            
        }
      
    },
    methods:{
        changePw(){
            if(this.newpw2 == this.newpw1 && this.newpw2){
                console.log(this.newpw2,this.newpw1)
                
                this.$axios.post('/api/changePw',{
                    newpw: this.newpw1,
                    num: this.num,
                    uType: this.user_type
                }).then((res)=>{
                    console.log(res)
                    if(res.data=="OK"){
                        // 修改密码成功
                        // 弹出模态框
                        alert("修改密码成功！请重新登录")
                        this.$router.push("/login")
                        console.log('成功修改密码') 
                    }else{
                        // 修改密码失败
                        alert("修改密码失败！")
                    }
                }).catch((err)=>{
                    console.log(err)
                    console.log('接口失效')
                })
            }else{
                alert("两次密码不一致！")
            }
            
        }
    }
}
</script>

<style lang='stylus' scoped>

.wrapper 
    font-size 1rem
    display flex  
    box-shadow .2rem .2rem .8rem  #eee
    border-radius 1rem
    padding 2rem 
    width 85vw
    margin auto
    margin-top 10vh 
    flex-direction column
    input  
        border 1px solid #ddd
    input, span  
        padding 1rem 1.5rem
        border-radius 5px
        margin-bottom 1.5em
    span  
        background #ff5722
        color #ffffff 
        
</style>