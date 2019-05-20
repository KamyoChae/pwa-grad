<template>

<div class="wrapper">
     
    <div class="mom">
        <div class="phone">{{phone}}</div>
        <div class="qq">{{qq}}</div> 
    </div>

    
    <div class="info" v-if="this.showBtn">点击其他地方即可完成修改</div>
</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    props:['phone', 'qq'],
  data() {
    return {
        phoneNum: this.phone,
        qqNum: this.qq,
        // user_num: "546856",
        showBtn:false,
    };
  },
  computed:{
      ...mapState('userStore',{
          user_num: state => state.userNum 
      })
  },

  methods:{
      sendMom(){
          this.showBtn = false
          // axios
          this.$axios.post("/api/editConnect",{
                phone:this.phone,   
                qqNum: this.qqNum,
                user_num: this.user_num,
          }).then((res)=>{
              console.log(res)
          }).catch((err)=>{
              console.log(err)
          })
      }
  }
}
</script>

<style lang='stylus' scoped>
.wrapper 
    .mom
        // background red
        .phone, .qq 
            padding .5em 1em
            width 100% 
    .info
         padding .5em 1em 
         color rgba(0,0,0,.3) 
         font-size .8em
         background rgba(0,0,0,.1) !important
         border-radius 1em !important
</style>
