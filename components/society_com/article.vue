<template>
<div class="wrapper">
    <div class="artbox"> 
        <div class="time">2019/02/02 15:10</div>
        <div class="artItem"> 
            <div class="artTitle">文章标题文章标题文章标题文章标题</div>
            
            <div class="about">
                <i class="iconfont">
                    &#xe7b5; 999+ 
                </i> 
                <i class="iconfont border">&#xe669; 659</i>
                <i class='iconfont'>&#xe644; 655</i>
            </div>
        </div> 
    </div>
    <div class="artbox"> 
        <div class="time">2019/02/02 15:10</div>
        <div class="artItem"> 
            <div class="artTitle">文章标题文章标题文章标题文章标题</div>
            
            <div class="about">
                <i class="iconfont">
                    &#xe7b5; 999+ 
                </i> 
                <i class="iconfont border">&#xe669; 659</i>
                <i class='iconfont'>&#xe644; 655</i>
            </div>
        </div> 
    </div>
    <div class="artbox"> 
        <div class="time">2019/02/02 15:10</div>
        <div class="artItem"> 
            <div class="artTitle">文章标题文章标题文章标题文章标题</div>
            
            <div class="about">
                <i class="iconfont">
                    &#xe7b5; 999+ 
                </i> 
                <i class="iconfont border">&#xe669; 659</i>
                <i class='iconfont'>&#xe644; 655</i>
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
    padding-bottom 3rem
    .artbox 
        margin auto
        margin-bottom 2rem 
        width 90vw 
        text-align center 
        box-shadow 0 5px 10px #ddd
        .time
            width 90vw 
            font-size .9rem  
            color #fff 
            margin auto
            padding .1em 
            border 1px solid #ddd
            border-bottom 0
            border-radius 5px 
            border-bottom-right-radius 0
            border-bottom-left-radius 0
            background #1976d2 
        .artItem
            box-sizing border-box
            width 90vw 
            margin 0 auto 
            border 1px solid #ddd 
            border-radius 5px
            border-top-left-radius 0
            border-top-right-radius 0
            padding .5em 1em
            text-align left 
            color #454545
            .artTitle 
                font-size 1.2rem 
                padding .5em 0 1em 0
            .about  
                border-top 1px solid #ddd
                text-align center
                color #888
                padding .6em 0 0 0
                display flex 
                justify-content space-around
                .iconfont 
                    flex 1
                    font-size .9rem 
                    color #2196f3
                .border 
                    border-left 1px solid #ddd 
                    border-right 1px solid #ddd
</style>