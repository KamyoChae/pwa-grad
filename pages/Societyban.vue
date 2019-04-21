<template>
<div class="wrapper">
    <div class="banner">
        <transition-group  tag="div"  name="list" class="divul"  >
            <div class="divli" 
            v-for="item in articleArr"
            :key="item.id"

            ><img :data="item.id" src="./user/images/ban.jpg" /></div>  
         </transition-group> 
         
    </div>
</div>

</template>

<script>
export default {
    data(){
        return{
            articleArr:[
                {id:1,src:"./user/images/ban.jpg"},
                {id:2,src:"./user/images/ban.jpg"},
                {id:3,src:"./user/images/ban.jpg"}
            ],
            currentIndex:0,

        }
    },
    methods:{
        go() {
            this.timer = setInterval(() => {
                this.autoPlay()
            }, 1000)
        },
        stop() {
            clearInterval(this.timer)
            this.timer = null
        },
        change(index) {
            this.currentIndex = index
            this.stop()
        },
        autoPlay() {
            this.currentIndex++
            if (this.currentIndex > this.articleArr.length - 1) {
                this.currentIndex = 0
            }
        }
    },
    mounted() {
      this.go()  
    },

}
</script>

<style lang='stylus' scoped>
.wrapper
    .banner
        width 100vw  
        background red 
        text-align left
        .divul 
            width 300vw
            overflow hidden
            font-size 0
            .divli 
                display inline-block 
                img 
                    width 100vw 
</style>