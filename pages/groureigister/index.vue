<template>
  <div class="wrapper">
    <div class="title">社团组织认证</div>
    <div class="body">
      <input type="text" placeholder="认证社团/组织账号" v-model="gro_num">
      <input type="text" placeholder="认证社团/组织名" v-model="gro_name">
      <input type="text" placeholder="负责人" v-model="gro_leader">
      <input type="number" name id placeholder="手机号码" v-model="gro_phone">
      <input type="text" name id placeholder="qq" v-model="gro_qq">
      <input type="password" placeholder="设置密码" v-model="gro_pw">
      <input type="password" placeholder="确认密码" v-model="gro_pw2">
      <button @click="groRegister">申请认证</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gro_name: "",
      gro_num: "",
      gro_leader: "",
      gro_phone: "",
      gro_qq: "",
      gro_pw: ""
    };
  },
  methods: {
    groRegister() {
      // 申请认证
      if(this.gro_pw != this.gro_pw2){
        alert("两次密码不一致！")
      }else{
          if(this.gro_name != '' && this.gro_num != '' && this.gro_leader != '' && this.gro_phone != '' && this.gro_qq != '' && this.gro_pw!= '' ){
              this.$axios
              .post("/api/groRegister", {
                gro_num: this.gro_num,
                gro_name: this.gro_name,
                gro_pw: this.gro_pw,
                gro_leader: this.gro_leader,
                gro_phone: this.gro_phone,
                gro_qq: this.gro_qq
              })
              .then(res => {
                console.log(res);
                if (res.data == "OK") {
                  alert("注册成功！")
                  this.$router.push("/login");
                } else {
                  alert("用户名已存在");
                }
              })
              .catch(err => {
                console.log(err);
                console.log("接口失效");
              });
          }else{
            alert("输入不能为空！")
          }
      }

      
    }
  }
};
</script>

<style lang='stylus' scoped>
.wrapper {
  width: 100vw;
  background: red;

  .title {
    font-size: 5rem;
    padding: 2rem 0 0 0;
  }

  .body {
    display: flex;
    flex-direction: column;
    padding: 5vw;

    input, button {
      padding: 1rem 1.5rem;
      margin: 0.5rem 0;
      font-size: 1.2rem;
      border: 1px solid #ddd;
      border-radius: 5px;
    }

    button {
      background: #1976d2;
      color: #fff;
    }
  }
}
</style>
