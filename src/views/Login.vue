<template>
  <div class="login h-flexCenter">
    <Alert v-if="alert.open" :title="alert.title" :btnMsg="alert.btnMsg"/>
    <div class="login_box h-flexCenter">
      <div class="logo_info">
        <div class="login_logo"><img src="../assets/img/jailuluLogo_dark.svg" alt="Jailulu宅家飾 logo"/></div>
        <div class="title">帳號:</div>
        <input v-model="account" @blur="checkHandler()" type="text" name="username" placeholder="Email address"/>
        <div class="title">密碼:</div>
        <input v-model="password" @blur="checkHandler()" type="password" name="password"/>
        <div class="title fail" id="fail">{{failText}}</div>
        <div class="loginBtn" @click="login()">登入</div>
        <div class="signUp"><a href="#">加入會員</a></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Alert from '@/components/Alert.vue'
export default {
  name:'Login',
  components:{
    Alert
  },
  data(){
    return {
      alert:{
        open:false,
        title:'登錄成功',
        btnMsg:'回到商品頁'
      },
      failText:'',
      account:'',
      password:'',
      checkOff:false
    }
  },
  methods:{
    checkHandler(){
      let account = this.account;
      let password = this.password;
      let emailReg = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$/;
      let passwordReg = /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
      // 至少1個小寫英文字母，(?=.*?[a-z])
      // 至少1位數字，(?=.*?[0-9])
      // 最小8個長度.{8,}
      if (!account || !password) return this.failText='帳號及密碼不得為空白';
      if (!emailReg.test(account)) return this.failText='請輸入正確的Email格式';
      if (!passwordReg.test(password)) return this.failText='帳號或密碼輸入錯誤';

      this.failText='';
      this.checkOff=true;
    },
    login(){
      if(this.checkOff){
        this.account='';
        this.password='';
        this.alert.open=true;
        return;
      }
      return;
    }
  }
}
</script>
