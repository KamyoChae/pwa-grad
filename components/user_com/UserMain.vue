<template>
    <div class="wrapper">
        <div class="canvas">
            <canvas ref="mcanvas1" ></canvas>
        </div>
        
        <div class="canvas">
            <canvas ref="mcanvas2" ></canvas>
        </div> 
        
        <div class="userIcon">
            <img src="./images/user.jpg" alt=""> 
        </div>


    </div>

</template>

<script>
import {mapState} from 'vuex'
import water from '@/static/js/util'
export default {
    props:["color1", "color2"],
    data(){
        return{

        }
    }, 
    methods:{
    },
    created(){
    },
    mounted(){ 
        water(this.$refs.mcanvas1, this.color1, 50 ,0.01 ) 
        water(this.$refs.mcanvas2, this.color2, 30 , 0.03)   
        console.log(this.userName,this.userType, this.userNum)
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
        margin 2rem auto 0 auto
        left 0
        right 0 
        text-align center
        font-size 1rem
        img
            width inherit 
            height inherit  
            border none
            margin-bottom 1em
            border-radius 50%
        span 
            font-size 1.2rem 
            font-weight 400

</style>