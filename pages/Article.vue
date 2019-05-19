<template>

<div class="wrapper">
    <div class="content">
        <!-- 文章内容 -->
        <div class="content-title">
            <h2>{{art.art_title}}</h2>
            <div class="from">
                <span class="username">{{art.art_gro_name}}</span> <span class="time">{{art.art_time}}</span>
            </div>
        </div>

        <div class="content-text">
            {{art.content}}
        </div>
        <div class="content-foot">
            <span class="iconfont">
                &#xe7b5; {{art.art_see}} &#xe669; {{art.art_like}}
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
import {mapState} from 'vuex'
export default {
    data(){
        return{
        }
    },
    computed:{
        ...mapState('articleStore', {
            art : state => state.art
        })
    },
    created(){
        var id = this.art.art_id
        this.$axios.get("/api/getArtCom?art_id=" + id).then((res)=>{
            console.log('获得评论数据')
            console.log(res)

        }).catch((err)=>{
            console.log("接口失效")
        })
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