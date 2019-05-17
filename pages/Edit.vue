<template>
    <div class="wrapper">
        <input type="text" class="title"  placeholder="请输入标题" maxlength="25" v-model="title">
        <textarea name="" class="text" id="" v-model="text"></textarea>
        <botton @click="sendArticle">发布</botton>
    </div>

</template>

<script>
export default {
    data(){
        return{
            title:'',
            text:'',
            user:'博学军'
        }
    },
    methods:{
        sendArticle(){
            console.log(this.title, this.text)
            this.$axios.post("/sendArticle", {
                title:this.title,
                text:this.text,
                user:this.user
            }).then((res)=>{
                console.log(res)
                if(res.data == "OK"){
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

}
</script>

<style lang='stylus' scoped>
.wrapper 
    padding 1rem 
    input , .text , botton
        width 100% 
        padding .5em 1em 
        font-size 1.2rem !important
        border 1px solid #eee  
        margin-bottom 1rem 
        border-radius 1rem
    .text 
        height 60vh
        margin-bottom 3rem 
    botton 
        color #fff 
        background #1976d2
        padding .8rem 4rem
        width 100%  
</style>
