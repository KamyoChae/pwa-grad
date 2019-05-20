<template>
  <div class="wrapper">
    <div class="about">
      <div class="addr">{{addr}}</div> 
    </div>
    <div class="info" v-if="this.showBtn">点击其他地方即可完成修改</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props:['addr'],
  data() {
    return {  
      showBtn:false,
    };
  }, 
  computed:{
    ...mapState('userStore',{
      user_num:state => state.userNum
    })
  }, 
  methods: {
    editAddress() {
        this.showBtn = false // 隐藏按钮
      this.$axios
        .post("/api/editAddress", {
          add: this.address,
          gro_num: this.user_num
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang='stylus' scoped>
.wrapper 
    .about
        // background red
        .addr 
            padding .5em 1em
            width 100% 
    .info
         padding .5em 1em 
         color rgba(0,0,0,.3) 
         font-size .8em
         background rgba(0,0,0,.1) !important
         border-radius 1em !important
</style>
