<template>
<div class="wrapper">
    <div class="carousel-wrap" id="carousel"> 
        <div class="bg"></div>
        <transition-group tag="ul" class='slide-ul' name="list">
        <li v-for="(list,index) in slideList" :key="list.desc" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go" >
            <a :href="list.clickUrl" >
            <img src="../user/images/004.jpg" :alt="list.desc">
            </a>
        </li>
        </transition-group> 
        <div class="carousel-items">
            <span v-for="(item,index) in slideList.length" :class="{'active':index===currentIndex}" :key="item.desc" @mouseover="change(index)"></span>
        </div>
    </div>

    <div class="society-con">
        <h2>萤火虫书画协会</h2>

        <div class="navBar">
            <span class="active" ref="one" @click="navHandle('one')">社团简介</span>
            <span ref="two" @click="navHandle('two')">联系方式</span>
            <span ref="three" @click="navHandle('three')">最近动态</span>
            <span ref="four" @click="navHandle('four')">原创文章</span>
        </div>

        
        <keep-alive> 
        <!-- 社团简介 -->
            <socAbout v-show="actArr[0].state" /> 
        </keep-alive>
        <keep-alive> 
        <!-- 联系方式 -->
            <socAdress v-show="actArr[1].state" />  
        </keep-alive>
        <keep-alive> 
        <!-- 最近动态 -->
            <socMovement v-show="actArr[2].state" />  
        </keep-alive>
        <keep-alive> 
        <!-- 原创文章 -->
            <socArticle v-show="actArr[3].state" /> 
        </keep-alive>
    </div>
    
</div>

</template>

<script>
import socAbout from '@/components/society_com/about'
import socAdress from '@/components/society_com/adress'
import socArticle from '@/components/society_com/article'
import socMovement from '@/components/society_com/movement'
export default {
    data(){
        return{
            actArr:[{state:true,name:"one"}, {state:false, name:"two"},{state:false,name:"three"}, {state:false, name:"four"}], 
            slideList: [
                {
                    "clickUrl": "#",
                    "desc": "nhwc",
                    "image": "http://dummyimage.com/1745x492/f1d65b"
                },
                {
                    "clickUrl": "#",
                    "desc": "hxrj",
                    "image": "http://dummyimage.com/1745x492/40b7ea"
                },
                {
                    "clickUrl": "#",
                    "desc": "rsdh",
                    "image": "http://dummyimage.com/1745x492/e3c933"
                }
            ],
        currentIndex: 0,
        timer: ''

        }
    },
    components:{
        socAbout,
        socAdress,
        socArticle,
        socMovement
    },
    methods:{
        navHandle(str){
              
            let dom = this.$refs[str]   
            for(let prop in this.actArr){ 
                let temp = this.actArr[prop]  
                let name = temp.name
                if(name == str){ 
                    dom.classList.add("active")
                    temp.state = true 
                }else{ 
                    let dom = this.$refs[name] 
                    dom.className = ""
                    temp.state = false 
                }
            }
            
             
        },
        /** 轮播图封装 */
        go() {
            this.timer = setInterval(() => {
                this.autoPlay()
            }, 3000)
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
            if (this.currentIndex > this.slideList.length - 1) {
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
    position relative
.carousel-wrap
    .bg   
        position absolute
        width 100vw
        height 56.25vw
        background-image url(../user/images/3.jpg)  
        background-repeat repeat
        filter blur(10px)
.society-con
    z-index 0
    position absolute
    top 56vw
    width 100vw
    border-top-left-radius 1rem
    border-top-right-radius 1rem 
    text-align left 
    font-size 1.2rem 
    color #454545
    padding 0 1rem 
    margin auto 
    background #fff
    h2 
        font-size 1.5rem
        line-height 3em
    .navBar
        display flex 
        justify-content space-around  
        border-bottom 1px solid #eee
        margin-bottom 3rem
        span  
            padding .8rem 0
        .active
            color #1976d2
            border-bottom 2px solid #1976d2
    .about
        display flex 
        flex-direction column 
        font-size 1rem 
        .label 
            font-weight 800 
        span 
            margin-right .5rem

.carousel-wrap {
  position: relative;
  height: 56.25vw;
  width: 100%;  
  background-color: #fff;
}

.slide-ul {
  width: 100%;
  height: 100%;
  li {
    position: absolute;
    width: 100%;
    height: 100%;
    padding 2.5%
    img {
      width: 95%;
      height: 95%;
      border-radius 1rem
    }
  }
}

.carousel-items {
  position: absolute;
  z-index: 10;
  top: 45vw;
  width: 100%; 
  margin: 0 auto;
  text-align: center;
  font-size: 0; 
  span {
    display: inline-block;
    height: 6px;
    width: 30px;
    margin: 0 3px;
    background-color: #b2b2b2;
    cursor: pointer;
  }
  .active {
    background-color: #454545;
  }
}



.list-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.list-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%)
}

.list-enter {
  transform: translateX(100%)
}

.list-leave {
  transform: translateX(0)
}
 
 
</style>