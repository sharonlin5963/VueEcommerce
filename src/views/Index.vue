<template>
  <div>
    <div class="section0Carousel">
      <div class="carousel slide max-1600" id="carouselExampleIndicators" data-ride="carousel">
          <ol class="carousel-indicators">
              <li class="active" data-target="#carouselExampleIndicators" data-slide-to="0"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <div class="carousel-inner">
              <div class="carousel-item active"><img class="d-block w-100" src="../assets/img/carousel/index-carousel-001.png" alt="living room" /></div>
              <div class="carousel-item"><img class="d-block w-100" src="../assets/img/carousel/index-carousel-002.png" alt="bookshelf" /></div>
              <div class="carousel-item"><img class="d-block w-100" src="../assets/img/carousel/index-carousel-003.png" alt="living room" /></div>
              <div class="carousel-item"><img class="d-block w-100" src="../assets/img/carousel/index-carousel-004.png" alt="dining table" /></div>
          </div>
      </div>
    </div>
    <div class="section1Slogan container-fluid">
      <div class="max-1600 h-flexCenter">
        <div class="pic"><img src="../assets/img/home/home-sec1-pic.jpg" alt="light"/></div>
        <div class="text text-lg"><img src="../assets/img/home/home-sec1-text.png" alt="slogan text"/></div>
        <div class="text text-sm"><img src="../assets/img/home/home-sec1-text-sm.png" alt="slogan text"/></div>
      </div>
    </div>
    <div class="section2Product">
      <div class="container">
        <div class="col col-12 productPic">
          <div class="row">
            <router-link :to="{name:'ItemList'}" 
                         @click.native="goTop()"
                         class="col col-lg-4 col-12" href="#">
              <div class="pic"><img class="blanket" src="../assets/img/home/home-sec2-blanket.jpg" alt="blanket"/></div>
              <div class="productName">芥黃米白灰撞色拼接針織毯</div></router-link>
            <router-link :to="{name:'ItemList'}" 
                         @click.native="goTop()"
                         class="col col-lg-4 col-12" href="#">
              <div class="pic"><img class="vase" src="../assets/img/home/home-sec2-vase.jpg" alt="vase"/></div>
              <div class="productName">陶製小可愛圓圓虎紋小器</div></router-link>
            <router-link :to="{name:'ItemList'}" 
                         @click.native="goTop()"
                         class="col col-lg-4 col-12" href="#">
              <div class="pic"><img class="pillow" src="../assets/img/home/home-sec2-pillow.jpg" alt="pillow"/></div>
              <div class="productName">Oh deer!我親愛的梅花鹿抱枕</div></router-link>
          </div>
        </div>
        <div class="col col-12 h-flexCenter">
          <router-link class="more" 
                       :to="{name:'ItemList'}"
                       @click.native="goTop()">more...</router-link>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import $ from 'jquery'

export default {
  name: 'Index',
  mounted(){
    //bootstrap輪播
    $('.carousel').carousel({
        pause: false
    });
  },
  methods:{
    goTop(){
      $('body,html').scrollTop(0);
    }
  }
}
</script>
