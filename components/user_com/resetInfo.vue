<template>
<div class="wrapper"> 

    <div class="phone_input">
        <label for="phone">电话：</label>
        <input id="phone" type="number" class="phone" v-model="phone" name="">
    </div>
    <div class="qq_input">
        <label for="qq">QQ:</label> 
        <input id="qq" type="number" class="qq" v-model="qq">
    </div> 
    <div class="addr_input">
        <label for="addr">地址:</label> 
        <input type="text" class="addr" name="" v-model="addr" id="addr">
    </div>
    <div class="addr_input">
        <label for="leader">负责人:</label> 
        <input type="text" class="addr" name="" v-model="leader" id="leader">
    </div>
    <div class="text"
         contenteditable="true"
         @paste="paste"
         @input="input" ref="texts"></div>

    <button @click="sendGroInfo">发布</button>
</div>

</template>

<script>
export default {
    data(){
        return{
            text:'',
            phone:'',
            qq:'',
            addr:'',
            leader:''

        }
    },
    methods:{
        sendGroInfo(){
            // 发送更新编辑社团资料
            var groNum = JSON.parse(localStorage.getItem('user')).NUM
            this.$axios.post('/api/sendGroInfo',{
                text:this.text,
                phone:this.phone,
                qq:this.qq,
                addr:this.addr,
                leader: this.leader,
                groNum: groNum,
            }).then((res)=>{
                console.log(res)
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
    }
}
</script>

<style lang='stylus' scoped>
.wrapper 
    background #1976d2 
    padding 1em .5%
    .phone_input, .qq_input, .addr_input , .text , button
        font-size 1rem
        background #f9f9f9 
        display flex 
        align-items center
        padding .5rem
        border-radius 5px
        box-shadow 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px rgba(0,0,0,.14), 0 1px 10px rgba(0,0,0,.12)
        margin 1em
        label  
            text-align center  
            flex 2  
        input   
            flex 8
            background #fff
            padding .8em 1em 
            font-size 1rem  
            border-radius 5px
            box-shadow inset 0 2px 4px -1px rgba(0,0,0,.2), inset 0 4px 5px rgba(0,0,0,.14), inset 0 1px 10px rgba(0,0,0,.12)
    .text
        display block
        min-height 50vh
        background #fff
        text-align left 
        box-shadow inset 0 2px 4px -1px rgba(0,0,0,.2), inset 0 4px 5px rgba(0,0,0,.14), inset 0 1px 10px rgba(0,0,0,.12)
        outline none
    button
        display block
        width 50%
        padding .8em 0
        background #f9f9f9

</style>