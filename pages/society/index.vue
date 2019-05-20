<template>

<div class="wrapper"> 
    <div class="checklist">
        <router-link tag="div" :to="{name:'societyCount', params: { count: 1}}" ><img src="http://img.52z.com/upload/news/image/20181108/20181108204521_83402.jpg" alt=""> 
        <span>
            萤火虫书画
        </span> 
        </router-link >  
                <router-link tag="div" :to="{name:'societyCount', params: { count: 1}}" ><img src="http://img.52z.com/upload/news/image/20181108/20181108204521_83402.jpg" alt=""> 
        <span>
            萤火虫书画
        </span> 
        </router-link >  
                <router-link tag="div" :to="{name:'societyCount', params: { count: 1}}" ><img src="http://img.52z.com/upload/news/image/20181108/20181108204521_83402.jpg" alt=""> 
        <span>
            萤火虫书画
        </span> 
        </router-link >  
                <router-link tag="div" :to="{name:'societyCount', params: { count: 1}}" ><img src="http://img.52z.com/upload/news/image/20181108/20181108204521_83402.jpg" alt=""> 
        <span>
            萤火虫书画
        </span> 
        </router-link >  
        
        
    </div> 

</div>

</template>

<script>
export default {    
    data(){
        return {

        }
    },
    methods:{
        checkSocBan(route){
            // 动态路由配置 通过传参跳转路由
            this.$route.push(route) 
        }
    },
    created(){
        this.$axios.get("/api/getAllSociety").then((res)=>{
            console.log(res)
            console.log('成功拉取数据') 
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
            span 
                padding 0 .5em 
        
</style>