<template>
<div class="wrapper">
    <input type="password" placeholder="新密码">
    <input type="password" placeholder="确认新密码">
    <span>确定</span>
</div>

</template>

<script>
export default { 
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