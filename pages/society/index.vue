<template>

<div class="wrapper"> 
    <div class="checklist">
        <div  v-for="gro in gro_list" @click="toGroInfo(gro.gro_id, gro.gro_num)" :key="gro.gro_id"  ><img src="http://img.52z.com/upload/news/image/20181108/20181108204521_83402.jpg" alt=""> 
        <div class="gro_info">
            <span>{{gro.gro_name}}</span>
            <div class="about">

                <span>{{Number(gro.gro_fans)}} 关注</span>
                <span>{{Number(gro.art_count)}} 篇文章</span>
            </div>
        </div> 
         </div>
        
        
    </div> 

</div>

</template>

<script>
export default {    
    data(){
        return {
            gro_list:[], 
        }
    },
    methods:{
        checkSocBan(route){
            // 动态路由配置 通过传参跳转路由
            this.$route.push(route) 
        },
        toGroInfo(id, num){ 
            var gro = {
                GROID:id,
                GRONUM:num 
            }

            localStorage.setItem('clickGro', JSON.stringify(gro))
            this.$router.push({name:'societyCount', params: { count: id}})
        }
    },
    created(){
        this.$axios.get("/api/getAllSociety").then((res)=>{
            console.log(res)
            console.log('成功拉取数据') 
            this.gro_list = res.data
        }).catch((err)=>{
            console.log(err)
            console.log('接口失效')
        }) 
    }
}
</script>

<style lang='stylus' scoped>
.wrapper 
    .checklist 
        font-size 1.2rem
        text-align left 
        padding 2rem
        div 
            border-bottom 1px solid #ddd
            padding 1em .5em 
            display flex
            align-items center
            img 
                width 3em
                height 3em
                border 1px solid #ddd 
                border-radius 50%
            div.gro_info
                
                padding 0 .5em 
                display flex
                flex-direction column
                justify-content center
                align-items flex-start
                border none
                .about 
                    padding 0
                    border none
                .about span 
                    display inline-block
                    font-size .8rem
                    padding-right 1em
                    color #888


</style>