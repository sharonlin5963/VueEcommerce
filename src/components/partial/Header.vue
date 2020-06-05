<template>
  <div id="nav" class="header">
      <div class="navbar max-1600">
        <div class="nav_toggle nav-item nav_bar" @click="menuOpen=!menuOpen;">{{(menuOpen)?'×':'≡'}}</div>
        <div class="navbar-brand">
          <router-link to="/">
            <img src="@/assets/img/jailuluLogo_light.svg" alt="宅家飾jailulu logo"/>
          </router-link>
        </div>
        <div class="nav_toggle nav-item nav_cart">
          <div class="cartCount">{{total}}</div>
          <router-link :to="{name:'Cart'}">
            <font-awesome-icon :icon="['fas','shopping-cart']"></font-awesome-icon>
          </router-link>
        </div>
        <div class="nav-menu" :class="(menuOpen)?'menuOpen':''">
          <div class="nav-item">
            <router-link to="/">首頁</router-link>
          </div>
          <div class="nav-item productList" :class="(allListOpen)?'allListOpen':`${(allItemOpen)?'allItemOpen':''}`" @mouseover="(!menuOpen)?allItemOpen=true:''" @mouseout="allItemOpen=false">
            <a class="allItem" @click="listOpen()">商品列表{{(menuOpen)?`${(allListOpen)?'-':'+'}`:''}}</a>
            <ul>
              <div class="triangle triDown">▾</div>
              <li><router-link :to="{name:'ItemList'}" @click.native="pathChangeClick('all')">商品總覽</router-link></li>
              <li class="dropdown" id="homeDecoration" :class="(homeDecorationOpen)?'dropdownOpen':''" @mouseover="(!menuOpen)?homeDecorationOpen=true:''" @mouseout="homeDecorationOpen=false">
                <div class="triangle triRight">▸</div>
                <router-link class="type" :to="{name:'ItemList-homeDecoration'}" @click.native="pathChangeClick('homeDecoration')">家具擺設</router-link>
                <ul class="productItem">
                  <li><router-link :to="{name:'ItemList-clock'}" @click.native="pathChangeClick('clock')">時鐘</router-link></li>
                  <li><router-link :to="{name:'ItemList-vase'}" @click.native="pathChangeClick('vase')">花器</router-link></li>
                  <li><router-link :to="{name:'ItemList-blanket'}" @click.native="pathChangeClick('blanket')">毛毯</router-link></li>
                  <li><router-link :to="{name:'ItemList-pillow'}" @click.native="pathChangeClick('pillow')">抱枕</router-link></li>
                </ul>
              </li>
              <li class="dropdown" id="light" :class="(lightOpen)?'dropdownOpen':''" @mouseover="(!menuOpen)?lightOpen=true:''" @mouseout="lightOpen=false">
                <div class="triangle triRight">▸</div>
                <router-link class="type" :to="{name:'ItemList-lighting'}" @click.native="pathChangeClick('lighting')">照明</router-link>
                <ul class="productItem">
                  <li><router-link :to="{name:'ItemList-light'}" @click.native="pathChangeClick('light')">燈泡</router-link></li>
                  <li><router-link :to="{name:'ItemList-lampshade'}" @click.native="pathChangeClick('lampshade')">燈罩</router-link></li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="nav-item sale">
            <router-link :to="{name:'ItemList-sale'}" @click.native="pathChangeClick('sale')">sale</router-link>
          </div>
          <div class="nav_member nav-item nav-font">
            <router-link :to="{name:'Login'}">{{(menuOpen)?'會員登入':""}}
              <font-awesome-icon :icon="['fas','user-circle']"></font-awesome-icon>
            </router-link>
          </div>
          <div class="nav_cart nav-item nav-font">
            <div class="cartCount">{{total}}</div>
            <router-link :to="{name:'Cart'}">
              <font-awesome-icon :icon="['fas','shopping-cart']"></font-awesome-icon>
            </router-link>
          </div>
        </div>
      </div>
      <div v-show="fixBtn" class="fixBtn h-flexCenter" @click="goTop">
          <font-awesome-icon :icon="['fas','caret-up']"></font-awesome-icon>
      </div>
      <Loading v-if="(loading)"/>
  </div>  
</template>
<script>
import Loading from '@/components/Loading.vue';
import Vue from 'vue'
import $ from 'jquery'
export default {
  name: 'Header',
  components:{
    Loading
  },
  data(){
    return {
      total:'',
      loading:false,
      fixBtn:false,
      menuOpen:false,
      allListOpen:false,
      allItemOpen:false,
      homeDecorationOpen:false,
      lightOpen:false
    }
  },
  created(){
    this.loading=true;
    Vue.axios.get('https://ancient-dusk-35329.herokuapp.com/total')
    .then((res)=>{
       this.total=res.data.item
       this.loading=false;
    })
    .catch((err)=>{
      console.log(err);
    })
  },
  mounted(){
    // fixBtn顯示隱藏
    $(window).scroll(()=> {
        if ($(window).scrollTop() > 0) return this.fixBtn=true;
        this.fixBtn=false;
    })
  },
  methods:{
    //.fixBtn
    goTop(){
      $('body,html').stop().animate({ scrollTop: 0 });
    },
    //商品列表.productList open
    listOpen(){
      if(this.menuOpen)return this.allListOpen=!this.allListOpen;
      this.$router.push({name: 'ItemList'});
    },
    //傳遞資料到父層Home
    pathChangeClick(value){
      this.$emit('pathChange',value);
      this.menuOpen=false;
      this.allListOpen=false;
    },
    //接收父層Home資料Home更改total
    getTotal(val){
      this.total=val;
    }
  }, 
}

</script>