<template>
<div class="wrapper">
    <router-link class="com-item" :to="{name:'societyCount', params: { count: 1}}">
        <img src="./user/images/user.jpg" class="usericon" /> 
        <div class="user"> 
            <div> 
                <span class="username">社团组织名字</span>
                <span class="usercomment">简介一句话</span>
            </div> 
            <span class="focus"><i>关注</i></span>
        </div> 
    </router-link> 
    <router-link class="com-item" :to="{name:'societyCount', params: { count: 1}}">
        <img src="./user/images/user.jpg" class="usericon" /> 
        <div class="user"> 
            <div> 
                <span class="username">社团组织名字</span>
                <span class="usercomment">简介一句话</span>
            </div> 
            <span class="focus"><i>关注</i></span>
        </div> 
    </router-link> 
        <router-link class="com-item" :to="{name:'societyCount', params: { count: 1}}">
        <img src="./user/images/user.jpg" class="usericon" /> 
        <div class="user"> 
            <div> 
                <span class="username">社团组织名字</span>
                <span class="usercomment">简介一句话</span>
            </div> 
            <span class="focus"><i>关注</i></span>
        </div> 
    </router-link> 
</div>

</template>

<script>
export default {

}
</script>

<style lang='stylus' scoped>

.wrapper 
    padding 1rem 0
.com-item
        display flex 
        padding 0 1.5rem  
          
        .usericon, img
            width 15vw
            height 15vw  
            border-radius 50%  
            background-image url(./user/images/user.jpg)
            background-size 100% 
            border none
        .user 
            display flex
            align-items center
            justify-content space-between
            border-bottom 1px solid #eee
            text-align left 
            flex 1
            padding 1rem 0
            padding-left .5rem 
            div
                display inline-block
                .username
                    color #353535 
                    font-size 1.2rem 
                    display block
                    padding-bottom .2em
                .usercomment
                    font-size 1.1rem
                    color #888
        .focus  
            display inline-block 
            align-items center 
            i
                border 1px solid #2196f3
                font-size 1rem
                display inline-block
                vertical-align middle
                padding .2rem 1rem
                border-radius 1rem
                color #2196f3

</style>