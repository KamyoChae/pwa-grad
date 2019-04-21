<template>
<div class="wrapper"> 
    <div class="articlebox">
        <div class="article">
            <div class="top">
                <span class="user">博学君</span>
                <span>杂谈古今</span>
            </div>
            <div class="body">
                <span class="title">这里是标题这里是标题这里是 是标题这里是标题</span>
                <span class="text">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</span>
            </div>
            <div class="foot">
                <span class="see">2654浏览</span>
                <span class="hand">56赞</span>
                <span class="comment">656评论</span>
            </div>
        </div>
        <div class="article">
            <div class="top">
                <span class="user">博学君</span>
                <span>杂谈古今</span>
            </div>
            <div class="body">
                <span class="title">这里是标题这里是标题这里是 是标题这里是标题</span>
                <span class="text">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</span>
            </div>
            <div class="foot">
                <span class="see">2654浏览</span>
                <span class="hand">56赞</span>
                <span class="comment">656评论</span>
            </div>
        </div>
        <div class="article">
            <div class="top">
                <span class="user">博学君</span>
                <span>杂谈古今</span>
            </div>
            <div class="body">
                <span class="title">这里是标题这里是标题这里是 是标题这里是标题</span>
                <span class="text">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</span>
            </div>
            <div class="foot">
                <span class="see">2654浏览</span>
                <span class="hand">56赞</span>
                <span class="comment">656评论</span>
            </div>
        </div>
        <div class="article">
            <div class="top">
                <span class="user">博学君</span>
                <span>杂谈古今</span>
            </div>
            <div class="body">
                <span class="title">这里是标题这里是标题这里是 是标题这里是标题</span>
                <span class="text">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</span>
            </div>
            <div class="foot">
                <span class="see">2654浏览</span>
                <span class="hand">56赞</span>
                <span class="comment">656评论</span>
            </div>
        </div>
        
    </div>
</div>

</template>

<script>
export default {

}
</script>

<style lang='stylus' scoped>
.wrapper
    width 100%
    min-height 10vh
    background #fff 
    padding-bottom 8vh
    text-align left 
    .article
        display flex
        flex-direction column
        padding .5em 1em
        border-top .1em solid #eeeeee
        border-bottom  .2em solid #eee
        .top
            display flex
            justify-content space-between
            line-height 2.5em
            font-size .9em
            color #888 
            margin .5em 0
            .user
                color #2196f3 
                &::before
                    content ''
                    display inline-block
                    width .9em
                    height .9em
                    background #2196f3
                    margin-right .5em 
                    border-radius 50%
                    vertical-align middle
        .body 
            color #424242 
            .title
                font-size 1rem !important 
            .text
                display block
                font-size .9rem 
                color #777
                margin .5rem 0
        .foot
            font-size .8em
            color #888
            line-height 2em
            span 
                margin-right 1em 

</style>