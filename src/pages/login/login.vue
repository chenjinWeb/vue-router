<template>

  <div class="login">
    <div class="title">
      <div class="login_logo"><img src="../../assets/img/login_logo.png" alt=""></div>
      <div class="phone">联系电话：<span>4008203697</span></div>
    </div>
    <div class="login-wrap">
      <div class="login-form">
        <div class="col">
          <input name="email" v-model="username" type="text" @keydown.enter="login()" class="login-input" placeholder="管理员账号" title="管理员账号" />
          <label class="icon user"></label>
        </div>
        <div class="col">
          <input type="password" v-model="password" @keydown.enter="login()" class="login-input" placeholder="管理员密码" title="管理员密码" />
          <input type="hidden" name="pwd" id="pwd" />
          <label class="icon pwd"></label>
        </div>
        <div class="col">
          <input type="button" value="登 录" id="submit_btn" @click="login()" class="login-btn" />
        </div>
      </div>
      <div class="login_tips hidden" id="login_tips">
        <div class="l"></div><div class="c" id="login_tips_content"></div><div class="r"></div>
      </div>
    </div>
    <div class="copy-right">
      <p>© 2014 -2018 lcinc.cn. All rights reserved 乐橙互联 <a href="http://www.miitbeian.gov.cn" target="_blank">沪ICP备15032233号-3</a></p>
    </div>

  </div>

</template>

<script>

  import {MessageBox} from "mint-ui"

  import {mapActions,mapMutations} from "vuex"

  import md5  from "../../md5"

    export default {
        name: "login",
        data() {
            return {
              username:"",
              password:""
            }
        },
        computed: {},
        methods: {
          ...mapActions([
            'loginApi_'
          ]),
          ...mapMutations([

          ]),
          login(){
            if(!this.username){
              MessageBox.alert("请输入用户名")
              return
            }
            let user={
              username:this.username,
              password:md5(this.username + md5(this.password))
            }

            this.loginApi_(user).then((res)=>{
              if(res.success==200){
                this.$router.push({name:"profiledata"})
              }
            })
          }
        },
        mounted() {

        }

    }

</script>

<style>

  @import "../../assets/css/login.css";

</style>
