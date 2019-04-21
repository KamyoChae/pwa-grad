<template>
<div class="wrapper">
    <div class="nav">
        <router-link tag='span' :to="{name:'user.item'}">关注</router-link>
        <router-link tag='span' :to="{name:'user.news'}">消息</router-link> 
    </div>

    <router-view /> 
    
</div>


</template>

<script>
import UserItem from './UserItem'
export default {

    components:{
        UserItem,
    }
}
</script>

<style lang='stylus' scoped>
.wrapper
    margin-top 7em
    .nav
        box-sizing border-box
        padding 1em 
        border-bottom 1px solid #555
        margin-bottom 1em
        span 
            margin 0 1em 0 .5em
    
</style>