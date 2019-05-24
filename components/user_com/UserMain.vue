<template>
    <div class="wrapper">
        <div class="canvas">
            <canvas ref="mcanvas1" ></canvas>
        </div>
        
        <div class="canvas">
            <canvas ref="mcanvas2" ></canvas>
        </div> 
        
        <div class="userIcon">
            
            <img src="./images/user.jpg" alt="" >
            <!-- <div class="btn1" v-if="showB">
                <input type="file" name="" id="" id="file" class="fileInput" >
                <button @click="updateIcon">上传</button>
            </div> -->
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
            showB:false
        }
    }, 
    methods:{
        showBtn(){
            this.showB = true
        },
        updateIcon(){
            var file = document.getElementById("file").files[0]
            console.log(file)
            var imgType = file.type.split('/')[0]
            if(imgType == "image"){
                console.log("上传的是图片")
                var form = new FormData()
                form.append("file", file)
                console.log(file)

                var xhr = new XMLHttpRequest()
                xhr.open("post", "/api/upload", true)
                xhr.onload = function () {
                    alert("上传成功")
                } 
                xhr.send(form)
                new Promise((resolve)=>{
                    setTimeout(resolve, 1000)
                })
                 this.showB = false
            }else{
                alert("请上传图片！")
            }
            
        }
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
        width 80vw
        height 30vw
        margin 2rem auto 0 auto
        left 0
        right 0 
        text-align center
        font-size 1rem
        img
            width 30vw 
            height 30vw  
            border none
            margin-bottom 1em
            border-radius 50% 
        div.btn1
            position absolute 
            display flex 
            justify-content center
            align-items center
            left 0 
            right 0 
            margin auto
            .fileInput   
                width 10em
            button 
                padding .2em 1em
                border none 
                background #1976d2
                margin 1em
                color #fff 
                border-radius 5px

</style>