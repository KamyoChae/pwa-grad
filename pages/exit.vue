<template>

    <div class="wrapper">
        <div>
            退出成功
        </div> 
    </div>
</template>

<script>
import getCookie from '../static/js/getCookie'
export default {
    data(){
        return{

        }
    },
    created(){
        this.$axios.get("/api/exitSystem").then((res)=>{
            
            console.log("退出成功")
        })
        
    }

}
</script>

<style lang='stylus' scoped>
.wrapper 
    div
        height 70vh
        line-height 70vh
        text-align center
        font-size 1.5rem 
</style>