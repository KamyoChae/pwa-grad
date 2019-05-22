<template>
<div class="wrapper">
    <div class="items">
        <div class="item">
            <p class="title">踏雪惊鸿，此番归去，定是胜却人间无数</p>
            <div class="itemother"> 
                <span class="author">作者：李小白</span>
                <span class="see">3564浏览</span>
                <span class="time">56小时前</span>
            </div>
            <div class="tags"></div>
        </div>
        <div class="item">
            <p class="title">关于社团吧的几点建议</p>
            <div class="itemother"> 
                <span class="author">作者：张三</span>
                <span class="see">4564浏览</span>
                <span class="time">6小时前</span>
            </div>
            <div class="tags"></div>
        </div>
        <div class="item">
            <p class="title">我要上头条</p>
            <div class="itemother"> 
                <span class="author">作者：张全蛋</span>
                <span class="see">2564浏览</span>
                <span class="time">5小时前</span>
            </div>
            <div class="tags"></div>
        </div>
    </div>
</div>

</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    created(){


    },
}
</script>

<style lang='stylus' scoped> 
.wrapper
    width 100%
    background #f9f9f9
    overflow hidden     
    text-align left  
    .item
        position relative
        box-sizing border-box
        box-shadow 0 0 10px #eee 
        border-radius 5px  
        margin 1em  
        padding 1rem 
        background #fff  
        .title
            color #424242 
            line-height 1.5rem !important
            font-size 1rem !important
            margin-bottom 0
        .itemother
            font-size .6em
            color #888
            line-height 2.5em
            span 
                display inline-block
                margin-right 1em
        .tags
            position absolute
            width 15vw 
            height 10vw
            background-image url(./images/top1.png)
            background-size 100%
            background-repeat no-repeat
            right 1em 
            bottom 0em


</style>