<template>
<div class="wrapper"> 
    <div class="articlebox">
        <div v-for="item in items" :key="item.art_id"  class="article" @click="toArticle(item.art_id)">
            <div class="top">
                <span class="user">{{item.art_gro_name}}</span>
                
            </div>
            <div class="body">
                <span class="title">{{item.art_title}}</span>
                <span class="text">{{item.content}}</span>
            </div>
            <div class="foot">
                <span class="see">{{item.art_see}} 浏览</span>
                <span class="hand">{{item.art_like}} 赞</span>
                <span class="comment">{{item.art_time}}</span>
            </div>
         </div> 
         
    </div>
</div>

</template>

<script>
export default {
    data(){
        return {
            items:[ ]
        }
    },
    methods:{
        toArticle(id){
            var thisArticle = this.items.filter((el, index)=>{
                return el.art_id == id
            })
            // console.log(thisArticle)
            this.$store.commit('articleStore/clickArt',thisArticle)
            this.$router.push({name:'articleArticleId', params:{articleId:id}})
        }
    },
    created(){
        this.$axios({
            method: 'get',
            url: '/api/getIndex',
            data: {
                name: 'xiaoming',
                info: '12'
            }
        }).then((res)=>{
            console.log(res)
            this.items = res.data
        }).catch((err)=>{
            console.log(err)
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
                max-height 4.5em 
                overflow hidden
        .foot
            font-size .8em
            color #888
            line-height 2em
            span 
                margin-right 1em 

</style>
