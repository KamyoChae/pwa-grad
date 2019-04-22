<template>
<div class="wrapper">
    <header>选择你的身份</header>

    <div class="linkto">
        <router-link tag="span" :to="{name:'loginUserType', params: { userType: 1}}" > 
            <div class="icon st"></div>   
            <p>我是社团</p>
        </router-link > 
        <router-link tag="span" :to="{name:'loginUserType', params: { userType: 2}}" > 
            <div class="icon ss"></div>   
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
                background-image url(../user/images/st.png)
                background-size 100%
                border-radius 50%
                box-shadow .2rem .5rem 2rem #2196f3
            .ss 
                background-image url(../user/images/ss.png)
            p
                font-size 1.3rem 
                padding 2.5rem 1rem

</style>