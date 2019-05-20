<template>
<div class="wrapper">
    <div class="number_input">

        <input type="number" class="phone" name="" id="">
        <input type="number" class="qq" >
    </div>
    <div class="addr_input">
        <input type="text" class="addr" name="" id="">
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
        }
    },
    methods:{
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

</style>