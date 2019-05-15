<template>
<div class="wrapper">
    <div class="title">社团组织认证</div>
    <div class="body">
        <input type="text" placeholder="认证社团/组织名">
        <input type="text" placeholder="负责人">
        <input type="number" name="" id="" placeholder="手机号码">
        <input type="text" name="" id="" placeholder="qq">
        <input type="password" placeholder="设置密码">
        <input type="password" placeholder="确认密码">
        <button>申请认证</button>
    </div>
</div>

</template>

<script>
export default {

}
</script>

<style lang='stylus' scoped>
.wrapper
    width 100vw  
    background red
    .title 
        font-size 5rem 
        padding 2rem  0 0 0  
    .body 
        display flex 
        flex-direction column
        padding 5vw  
        input , button
            padding 1rem 1.5rem  
            margin .5rem 0
            font-size 1.2rem  
            border 1px solid #888888
            border-radius 1rem

        button 
            background #1976d2
            color #fff

</style>
