<template>
<div class="wrapper">
    <header>选择你的身份</header>

    <div class="linkto">
        <router-link tag="span" :to="{name:'loginUserType', params: { userType: 1}}" > 
            <div class="icon iconfont">&#xe6ff;</div>   
            <p>我是社团</p>
        </router-link > 
        <router-link tag="span" :to="{name:'loginUserType', params: { userType: 2}}" > 
            <div class="icon iconfont">&#xe6f1;</div>   
            <p>我是学生</p>
        </router-link > 
    </div>
    
</div>

</template>

<script>
export default {

}
</script>

<style lang='stylus' scoped>
.wrapper
    header 
        font-size 2rem  
        text-align left 
        padding 2em 1em 
    .linkto 
        padding 2rem 
        span 
            display inline-block 
            padding 2rem
            .icon
                width 6rem 
                height 6rem  
                background-size 100%
                border-radius 50%
                box-shadow .2rem .5rem 1.5rem #1976d2
                background #1976d2
                font-size 3rem
                color #fff
                
            p
                font-size 1.3rem 
                padding 2.5rem 1rem

</style>