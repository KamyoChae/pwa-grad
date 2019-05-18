<template>

<div class="wrapper">
    <div class="mom">
        <input class="email" @blur="sendMom" v-model="emailNum">
        <input class="qq" @blur="sendMom" v-model="qqNum"/>
    </div>
    
    <div class="info" v-if="this.showBtn">点击其他地方即可完成修改</div>
</div>
</template>

<script>
export default {
  data() {
    return {
        emailNum:'kamduo@126.com',
        qqNum: "12055454454",
        user_num: "546856",
        showBtn:false,
    };
  },
  watch:{
      emailNum(pro,old){
          if(pro !== old){
              this.showBtn = true 
          }else{
              this.showBtn = false
          } 
      },
      qqNum(pro,old){
          if(pro !== old){
              this.showBtn = true 
          }else{
              this.showBtn = false
          } 
      },
  },
  methods:{
      sendMom(){
          this.showBtn = false
          // axios
          this.$axios.post("/editConnect",{
                emailNum:this.emailNum,   
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
        input 
            padding .5em 1em
            width 100% 
    .info
         padding .5em 1em 
         color rgba(0,0,0,.3) 
         font-size .8em
         background rgba(0,0,0,.1) !important
         border-radius 1em !important
</style>
