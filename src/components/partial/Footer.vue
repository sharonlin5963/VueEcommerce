<template>
  <div class="l-footer h-flexCenter">
    <div class="containerBox">
        <div class="logo">
            <router-link to="/">
              <font-awesome-icon :icon="['fas','home']"></font-awesome-icon>
            </router-link>
        </div>
        <div class="social h-flexCenter">
            <div class="socialLink">
                <a href="#">
                    <font-awesome-icon :icon="['fab', 'facebook-square']"></font-awesome-icon></a></div>
            <div class="socialLink">
                <a href="#">
                    <font-awesome-icon :icon="['fab','instagram']"></font-awesome-icon></a></div>
            <div class="socialLink">
                <a href="#">
                    <font-awesome-icon :icon="['fab','github']"></font-awesome-icon></a></div>
            <div class="socialLink">
                <a href="#">
                    <font-awesome-icon :icon="['fab','telegram-plane']"></font-awesome-icon></a></div>
        </div>
        <div class="info">
            <li>Calling 01-2345-6789</li>
            <li>jailulu@gmail.com</li>
            <li>台北市中山區長井路666巷66號</li>
            <div class="state">ⓒ 2019 Created by Sharon Lin .<br>僅個人練習使用，不做任何商業用途</div>
        </div>
    </div>
  </div>
</template>