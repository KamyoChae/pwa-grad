<template>
    <div class="wrapper">
        <input type="text" class="title"  placeholder="请输入标题" maxlength="25" v-model="title">
        <!-- <textarea name="" class="text" id="" v-model="text"></textarea> -->
        <div class="text"
         contenteditable="true"
         @paste="paste"
         @input="input" ref="texts"></div>

        <button @click="sendArticle">发布</button>
        
    </div>

</template>

<script>
export default {
    data(){
        return{
            title:'',
            text:'',
            user:'博学军',
        }
    },
    methods:{
        sendArticle(){
            console.log(this.title, this.text)
            var uSer = JSON.parse(localStorage.getItem('user'))
            this.$axios.post("/api/sendArticle", {
                title:this.title,
                text:this.text,
                user:uSer.NAME
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
        },
        paste(e) {
                e.preventDefault()
                const html = e.clipboardData.getData('text/html')
                document.execCommand('insertHTML', false, html)
                this.input()
            },
        input() {
            const v = this.$refs.texts.innerHTML
            this.text = v
            
        }

    },

}
</script>

<style lang='stylus' scoped>
.wrapper 
    padding 1rem 
    input , .text , button
        width 100% 
        padding .5em 1em 
        font-size 1.2rem !important
        border 1px solid #eee  
        margin-bottom 1rem 
        border-radius 1rem
    .text 
        min-height 60vh
        margin-bottom 3rem 
        text-align left 
        font-size .9rem !important
    button 
        color #fff 
        background #1976d2
        padding .8rem 4rem
        width 100%  

</style>
