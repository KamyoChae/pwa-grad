<template>

<div class="wrapper">
    <div class="content">
        <!-- 文章内容 -->
        <div class="content-title">
            <h2>这里是文章标题可以这么超过一行就会自动换行比如现在这个样子</h2>
            <div class="from">
                <span class="username">王大锤</span> | 搞笑工作者 <span class="time">9小时前</span>
            </div>
        </div>

        <div class="content-text">
            <p>中国书法家协会（CHINESE CALLIGRAPHERS ASSOCIATION）是中国共产党领导的全国各民 书法家组成的人民团体，是由国家级的书法家、篆刻家、书法理论家、书法教育家和书法活动组织、管理工作者组成的全国性专业组织，是中国文学艺术 联合会的团体会员。</p>
            <p>中国书法家协会（CHINESE CALLIGRAPHERS ASSOCIATION）是中国共产党领导的全 组成的人民团体，是由国家级的书法家、篆刻家、书法理论家、书法教育家和书法活动组织、管理工作者组成的全国性专业组织，是中国文学艺术界联合会的团体会员。</p>
            <p>中国书法家协会（CHINESE CALLIGRAPHERS ASSOCIATION）是中国共产党领导的全国 家组成的人民团体，是由国家级的书法家、篆刻家、书法理论家、书法教育家和书法活动组织、管理工作者组成的全国性专业组织，是中国文学艺术界联合会的团体会员。</p>
            <p>中国书法家协会（CHINESE CALLIGRAPHERS ASSOCIATION）是中国共产党领导 体，是由国家级的书法家、篆刻家、书法理论家、书法教育家和书法活动组织、管理工作者组成的全国性专业组织，是中国文学艺术界联合会的团体会员。</p>
            <p>中国书法家协会（CHINESE CALLIGRAPHERS ASSOCIATION）是中国共产党领导 书法家组成的人民团体，是由国家级的书法家、篆刻家、书法理论家、书法教育家和书法活动组织、管理工作者组成的全国性专业组织，是中国文学艺术界联合会的团体会员。</p>
            <p>中国书法家协会（CHINESE CALLIGRAPHERS ASSOCIATION）是中国共产党领 家组成的人民团体，是由国家级的书法家、篆刻家、书法理论家、书法教育家和书法活动组织、管理工作者组成的全国性专业组织，是中国文学艺术界联合会的团体会员。</p>

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
                <span class="username">用户名</span>
                <span class="usercomment">评论一句话评论一句话评论一句话评论一句话评论一句话评论一句话评论一句话评论一句话评论一句话评论一句话评论一句话评论一句话</span>
            </div>
            <span class="agree"><i class='iconfont'>&#xe644;</i></span>
        </div>
        <div class="com-item">
            <div class="usericon"></div>
            <div class="user"> 
                <span class="username">用户名</span>
                <span class="usercomment">评论一句话评论一句话评论一句话评论一句话评论一句话评论一句话评论一句话评论一句话评论一句话评论一句话评论一句话评论一句话</span>
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