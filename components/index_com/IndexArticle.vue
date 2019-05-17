<template>
<div class="wrapper"> 
    <div class="articlebox">
        <router-link tag="div" v-for="item in items" :key="item.id" :to="{name:'articleArticleId', params:{articleId:1}}" class="article">
            <div class="top">
                <span class="user">{{item.user}}</span>
                
            </div>
            <div class="body">
                <span class="title">{{item.title}}</span>
                <span class="text">{{item.text}}</span>
            </div>
            <div class="foot">
                <span class="see">{{item.see}}</span>
                <span class="hand">{{item.hand}}</span>
                <span class="comment">{{item.comment}}</span>
            </div>
         </router-link> 
         
    </div>
</div>

</template>

<script>
export default {
    data(){
        return {
            items:[
                {
                    'id':'11',
                    'user':'博学君',
                    'title':'从皴擦点染中领悟国画的精美',
                    'text':'所有高级的美，都应当是这样子的。',
                    'see':'2654浏览',
                    'hand':'56赞',
                    'comment':'656评论'
                },
                {
                    'id':'12',
                    'user':'博学君',
                    'title':'三个和尚与三头毛驴',
                    'text':'有一天，胖和尚在路上遇到了一头毛驴。',
                    'see':'1234浏览',
                    'hand':'562赞',
                    'comment':'6256评论'
                }
            ]
        }
    },
    methods:{

    },
    created(){
        this.$axios({
            method: 'get',
            url: '/getIndex',
            data: {
                name: 'xiaoming',
                info: '12'
            }
        })
    }

}
</script>

<style lang='stylus' scoped>
.wrapper
    width 100%
    min-height 10vh
    background #fff 
    padding .5rem 0 8vh 0
    text-align left  
    background #f9f9f9
    .article
        width 95vw
        display flex
        flex-direction column
        padding 1em 1.5em 
        background #fff 
        margin .5rem auto 
        border-radius 1rem

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
