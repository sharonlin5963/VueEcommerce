<template>
  <div class="login h-flexCenter">
    <Alert v-if="alert.open" :title="alert.title" :btnMsg="alert.btnMsg"/>
    <div class="login_box h-flexCenter">
      <div class="logo_info">
        <div class="login_logo"><img src="../assets/img/jailuluLogo_dark.svg" alt="Jailulu宅家飾 logo"/></div>
        <div class="title">帳號:</div>
        <input id="account" type="text" name="username" placeholder="Email address"/>
        <div class="title">密碼:</div>
        <input id="password" type="password" name="password"/>
        <div class="title" id="fail"></div>
        <div class="loginBtn" @click="login()">登入</div>
        <div class="signUp"><a href="#">加入會員</a></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Alert from '@/components/Alert.vue'
import $ from 'jquery'
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
      }
    }
  },
  methods:{
    login(){
      let account = $('#account')
      let password = $('#password')
      let emailReg = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$/;
      let passwordReg = /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
      // 至少1個小寫英文字母，(?=.*?[a-z])
      // 至少1位數字，(?=.*?[0-9])
      // 最小8個長度.{8,}
      function fail(reason) {
        $('#fail').addClass('fail');
        $('#fail').text(reason);
      }

      if (account.val() === '' || password.val() === '') return fail('帳號及密碼不得為空白');
      if (!emailReg.test(account.val())) return fail('請輸入正確的Email格式');
      if (!passwordReg.test(password.val())) return fail('帳號或密碼輸入錯誤');

      account.val('');
      password.val('');
      this.alert.open=true;
    }
  }
}
</script>
