<template>
  <div class="wrapper">
    <div class="about">
      <input type="text" @blur="editAddress" v-model="address">
    </div>
    <div class="info" v-if="this.showBtn">点击其他地方即可完成修改</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      address: "桂林航天工业学院12栋209",
      user_num: "546856",
      showBtn:false,
    };
  },
  watch:{
      address(pro,old){
          if(pro !== old){
              this.showBtn = true 
          }else{
              this.showBtn = false
          } 
      }
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
