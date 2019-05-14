<template>

<div class="wrapper">
    <div class="content">
        <!-- 文章内容 -->
        <div class="content-title">
            <h2>从皴擦点染中领悟国画的精美</h2>
            <div class="from">
                <span class="username">王大锤</span> | 搞笑工作者 <span class="time">9小时前</span>
            </div>
        </div>

        <div class="content-text">
            <p>中国画的技法，实际上可以理解为中国画家运用毛笔的方法，也就是因毛笔而产生的用笔、用墨的技法，其中墨法中包含了色彩的技法。在中国画的发展过程中，特别是到了元以后（文人画家的介入），中国画的抒情意味越来越浓。中国画的笔墨的含义，已不是简单的技法问题，而是中国画的代名词。在中国画的笔墨观中，渗透了中国画的精神。简单说来，中国画的笔法，是由点、线、面组成，而线条的运用是最重要的。墨法，就是利用水的作用，产生了浓、淡、干、湿、深、浅不同的变化。中国画的书写线条的方法被称为“用笔”，中国画用水墨的方法，被称为“用墨”。</p>
            <p>什么是中锋、侧锋用笔
中锋用笔要执笔端正，笔锋在墨线的中间，用笔的力量要均匀，笔锋垂直于纸面，其效果圆浑稳重。 侧锋用笔执笔偏侧，笔锋在墨线的边缘，笔锋与纸面形成一定的角度，用力不均匀，时快、时慢、时 轻、时重，其效果毛、涩变化丰富。
什么是顺锋、逆锋用笔
顺锋：一般指笔锋的运行和笔杆的倾斜方向一致，其效果光洁、挺拔。逆锋：笔锋逆行(也就是说 习惯的运笔方向相反)，其效果干涩、稚拙。
什么是聚锋、散锋用笔
聚锋是指笔锋拢在一起，呈单一笔锋。散锋则指笔锋散开，呈多锋状(又称“开花笔”)，其效果枯 涩而多变化。
用笔的快慢影响画面效果
各种笔法的运用，主要依效果而定，当然也不排斥个人的特殊习惯，用笔的快慢，决定于纸的吸水程 度及笔中含水分的多少。画纸吸水快，用笔的速度相对也快些，但如笔中含水较少或极少，用笔速度 也就不同程度地放慢。如果纸吸水慢，但笔中含水较多，用笔的速度也要相应快一点，随着笔中水分 的减少，用笔的速度也逐渐放慢。
用笔的一些常用表现手法是什么</p>

        </div>
        <div class="content-foot">
            <span class="iconfont">
                &#xe7b5; 999+ &#xe669; 659
            </span> 
        </div>
    </div>
    <div class="comment">
        <!-- 评论 --> 
        <div class="com-item">
            <div class="usericon"></div>
            <div class="user"> 
                <span class="username">王小白</span>
                <span class="usercomment">不错不错，学到了</span>
            </div>
            <span class="agree"><i class='iconfont'>&#xe644;</i></span>
        </div>
         
    </div>
    <div class="setcomment">
        <!-- 编辑评论 -->
        <input type="text" placeholder="我有一个想法...">
        <span class="ty iconfont">&#xe668; </span>
        <span class="send iconfont">&#xe731;</span>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{ 
        }
    }
}
</script>

<style lang='stylus' scoped>
.content
    text-align left  
    .content-title
        padding 1rem 
        h2 
            line-height 1.5rem
            font-size 1.2rem
            padding 1rem 0
        .from 
            font-size .8rem
            color #888
            .username
                color #1976d2
    .content-text
        font-size 1rem
        padding 1rem
    .content-foot
        display flex 
        justify-content space-between
        padding  1rem
        font-size .9rem
        .iconfont 
            font-size 1rem 

.comment
    padding-bottom 15vh
    background #f9f9f9

    .com-item
        display flex 
        padding 1rem 
        padding-bottom 0
        .usericon
            width 12vw
            height 12vw  
            border-radius 50%  
            background-image url(./user/images/user.jpg)
            background-size 100%
        .user 
            text-align left 
            flex 1
            padding-left .5rem 
            .username
                color #353535
                font-weight 600
                font-size 1rem 
                display block
                padding-bottom .2em
            .usercomment
                font-size 1rem
        .agree 
            padding 0 .5rem 0 .5rem 
            i   
                padding .3rem
                border-radius 50%
                font-size 1.4rem
                // border 1px solid #2196f3

.setcomment
    width 100vw
    position fixed
    bottom 0
    display flex 
    justify-content space-between
    background #fff 
    padding 1rem 
    text-align left 
    font-size 1rem
    input 
        width 60vw
        background #eee
        padding .5rem
        border-radius 1rem
    span.iconfont  
        display flex 
        padding .2em .8em
        color #fff
        border-radius 1rem 
        font-size 1.5em
        background #2196f3
        justify-content space-around
        align-items center 
            

        
</style>