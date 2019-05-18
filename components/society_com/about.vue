<template>
<div class="wrapper">
    <div class="aboutText" >
        社团简介在这里 点击跳转到一个页面
    </div>
</div>

</template>

<script>
export default {
    data(){
        return{
            aboutText:'',
            showWrite:true
        }
    },

}
</script>

<style lang='stylus' scoped>
.wrapper 
    .write 
        width 100%
        height 100% 
        background red
</style>