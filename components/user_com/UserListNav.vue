<template>
<div class="wrapper">
    <div class="nav">
        <span>昵称</span>
        <span>
        <input type='text' v-model="value" />
        </span>
    </div>

    <div class="nav"> 
        <span>账号</span>
        <span>2015070030317</span>
    </div> 
    <div class="nav"> 
        <span>安全</span>
        <span>重置密码</span>
    </div>  
    
</div>

</template>

<script> 
export default {
    data(){
        return {
            value : "王大锤"
        }
    }
 
}
</script>

<style lang='stylus' scoped>
.wrapper
    margin-top 7em
    .nav
        display flex 
        font-size 1rem 
        padding 1em
        border-top 1px solid #eee 
        margin-bottom 0
        justify-content space-between
        span 
            margin 0 1em 0 .5em
        input  
            text-align right 
    .nav:last-child
        border-bottom 1px solid #eee 
</style>