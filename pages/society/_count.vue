<template>
<div class="wrapper">
    <div class="carousel-wrap" id="carousel"> 
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
        <p>中国书法家协会（CHINESE CALLIGRAPHERS ASSOCIATION）是中国共产党领导的全国各民族书法家组成的人民团体，是由国家级的书法家、篆刻家、书法理论家、书法教育家和书法活动组织、管理工作者组成的全国性专业组织，是中国文学艺术界联合会的团体会员。</p>
        <p>中国书法家协会（CHINESE CALLIGRAPHERS ASSOCIATION）是中国共产党领导的全国各民族书法家组成的人民团体，是由国家级的书法家、篆刻家、书法理论家、书法教育家和书法活动组织、管理工作者组成的全国性专业组织，是中国文学艺术界联合会的团体会员。</p>
        <p>中国书法家协会（CHINESE CALLIGRAPHERS ASSOCIATION）是中国共产党领导的全国各民族书法家组成的人民团体，是由国家级的书法家、篆刻家、书法理论家、书法教育家和书法活动组织、管理工作者组成的全国性专业组织，是中国文学艺术界联合会的团体会员。</p>
        <p>中国书法家协会（CHINESE CALLIGRAPHERS ASSOCIATION）是中国共产党领导的全国各民族书法家组成的人民团体，是由国家级的书法家、篆刻家、书法理论家、书法教育家和书法活动组织、管理工作者组成的全国性专业组织，是中国文学艺术界联合会的团体会员。</p>

        <div class="about">

            <div>
                <span class="label">地址</span>
                <span>桂林航天工业学院12栋209</span>
            </div> 
            <div>
                <span class="label">联系方式</span>
                <span class="email">kamduo@126.com</span>
                <span class="email">QQ1001121212</span>
            </div>
        
        </div>
    </div>
</div>

</template>

<script>
export default {
    data(){
        return{
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
    methods:{
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

.society-con
    width 100vw
    text-align left 
    font-size 1.2rem 
    color #454545
    padding 0 1rem
    h2 
        font-size 1.5rem
        line-height 3em
    .about
        display flex 
        flex-direction column 
        font-size 1rem 
        .label 
            font-weight 800
            font-size 1.02rem
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
  background #607d8b
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