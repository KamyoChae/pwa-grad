<template>
    <div class="wrapper">
        <div class="canvas">
            <canvas ref="mcanvas1" ></canvas>
        </div>
        
        <div class="userIcon">
            <img src="./images/user.jpg" alt="">
            <span>王大锤</span>
        </div>
        <div class="canvas">
            <canvas ref="mcanvas2" ></canvas>
        </div> 
    </div>

</template>

<script>
// import water from '@/webviews/util/util'
export default {
    data(){
        return{

        }
    },
    methods:{

    },
    mounted(){ 
        // water(this.$refs.mcanvas1, "#03a9f4", 50 ,0.01 ) 
        // water(this.$refs.mcanvas2, "#2196f3", 30 , 0.03)  
    }
}
</script>

<style lang='stylus' scoped>
.wrapper
    position relative
    width 100%
    height 20vh
     
    .canvas
        position absolute  

    .userIcon
        position absolute
        width 30vw
        height 30vw
        margin 5em auto 0 auto
        left 0
        right 0
        background blue
        text-align center
        img
            width inherit 
            height inherit  
            border none
            margin-bottom 1em

</style>