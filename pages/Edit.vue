<template>
    <div class="wrapper">
        <input type="text" class="title"  placeholder="请输入标题" maxlength="25">
        <textarea name="" class="text" id="" ></textarea>
        <botton>发布</botton>
    </div>

</template>

<script>
export default {

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