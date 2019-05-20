<template>
<div class="wrapper">
    <div class="listBox" v-if="forkList.length">
        <router-link class="com-item" v-for="item in forkList" :key="item.gro_id"  :to="{name:'societyCount', params: { count: item.gro_id}}">
            <img src="./user/images/user.jpg" class="usericon" /> 
            <div class="user"> 
                <div> 
                    <span class="username">{{item.gro_name}}</span>
                    <span class="usercomment">{{item.gro_id}}</span>
                </div> 
                <!-- <span class="focus"><i>关注</i></span> -->
            </div> 
        </router-link> 
    </div>

     
</div>

</template>

<script>
import { mapState } from 'vuex';
export default {
    data(){
        return{
            forkList:[]
        }
    },
    computed:{
        ...mapState('userStore', {
            stuName : state => state.userName
        })
    },
    created(){
        

        this.$axios.get('/api/getForkGro?stuName=' + this.stuName).then((res)=>{
            if(res.data == "Fail"){

            }else{

                this.forkList =  res.data
                console.log(res)
            }
        })
    }
}
</script>

<style lang='stylus' scoped>

.wrapper 
    padding 1rem 0
.com-item
        display flex 
        padding 0 1.5rem  
          
        .usericon, img
            width 15vw
            height 15vw  
            border-radius 50%  
            background-image url(./user/images/user.jpg)
            background-size 100% 
            border none
        .user 
            display flex
            align-items center
            justify-content space-between
            border-bottom 1px solid #eee
            text-align left 
            flex 1
            padding 1rem 0
            padding-left .5rem 
            div
                display inline-block
                .username
                    color #353535 
                    font-size 1.2rem 
                    display block
                    padding-bottom .2em
                .usercomment
                    font-size 1.1rem
                    color #888
        .focus  
            display inline-block 
            align-items center 
            i
                border 1px solid #2196f3
                font-size 1rem
                display inline-block
                vertical-align middle
                padding .2rem 1rem
                border-radius 1rem
                color #2196f3

</style>