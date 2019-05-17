<template>

<div class="wrapper">
    <div class="checkbox">
        <div>文艺类</div>
        <div class="checklist">
            <router-link tag="span" :to="{name:'societyCount', params: { count: 1}}" > 萤火虫书画</router-link > 
            <span>八月摄影</span> 
            <span>相声协会</span>
            <span>棋艺社</span> 
            <span>八月摄影</span> 
            <span>相声协会</span> 
            <span>萤火虫书画</span>
            <span>棋社</span> 
            <span>相声会</span>
            <span>社</span> 
            <span>八月影</span> 
            <span>相声协会</span> 
            <span>萤火虫书画</span>
            <span>棋社</span> 
            
        </div>
    </div>
    <div class="checkbox">
        <div>逻辑类</div>
        <div class="checklist">
            
            <span>棋艺社</span> 
            <span>八月摄影</span> 
            <span>八月摄影</span> 
            <span>相声协会</span> 
            <span>棋社</span> 
            <span>计算机协会</span>
            <span>棋艺社</span> 
            <span>八月摄影</span> 
            <span>八月摄影</span> 
            <span>相声协会</span> 
            <span>棋社</span> 
            <span>计算机协会</span>
            <span>棋艺社</span> 
            <span>八月摄影</span> 
            <span>八月摄影</span> 
            <span>相声协会</span> 
            <span>棋社</span> 
            <span>计算机协会</span>
            
        </div>
    </div>
    <div class="checkbox">
        <div>文艺类</div>
        <div class="checklist">
            <span>萤火虫书画</span>
            <span>八月摄影</span> 
            <span>相声协会</span>
            <span>棋艺社</span> 
            <span>八月摄影</span> 
            <span>相声协会</span> 
            <span>萤火虫书画</span>
            <span>棋社</span> 
            <span>相声会</span>
            <span>社</span> 
            <span>八月影</span> 
            <span>相声协会</span> 
            <span>萤火虫书画</span>
            <span>棋社</span> 
            
        </div>
    </div>
    <div class="checkbox">
        <div>逻辑类</div>
        <div class="checklist">
            
            <span>棋艺社</span> 
            <span>八月摄影</span> 
            <span>八月摄影</span> 
            <span>相声协会</span> 
            <span>棋社</span> 
            <span>计算机协会</span>
            <span>棋艺社</span> 
            <span>八月摄影</span> 
            <span>八月摄影</span> 
            <span>相声协会</span> 
            <span>棋社</span> 
            <span>计算机协会</span>
            <span>棋艺社</span> 
            <span>八月摄影</span> 
            <span>八月摄影</span> 
            <span>相声协会</span> 
            <span>棋社</span> 
            <span>计算机协会</span>
            
        </div>
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
        this.$axios.get("/getSociety").then((res)=>{
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
.checkbox
    width 100vw 
    min-height 10vh 
    font-size 1rem 
    display flex 
    flex-direction column
    padding 1.5rem 
    div 
        line-height 3rem 
        font-weight 800
        font-size 1.3rem
    .checklist
        line-height 1.2rem
        font-weight 400
        font-size 1rem
        display flex 
        flex-wrap wrap 
        justify-content space-between 
        padding 2rem 0 
        border 0px solid #eee 
        border-bottom 1px solid #eee  
        span 
            border 1px solid #82c1f3
            padding .5rem 1rem
            margin .5rem 0
            border-radius .5rem
            color #353535
</style>