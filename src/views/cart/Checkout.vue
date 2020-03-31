<template>
<div class="max-1600">
  <div class="m-cartSpace">
    <CartStep :hasClass="false"/>
    <div class="m-list list-check">
      <div class="list-check_title list-check_item">
        <div class="name">品名</div>
        <div class="count">數量</div>
        <div class="price">小計</div>
      </div>
      <div v-for="(item,index) in cart" :key="index">
        <hr/>
        <div class="list-check_item">
          <div class="name">{{item.name}}</div>
          <div class="count">{{item.quantity}}</div>
          <div class="price">{{Math.round(item.price*item.discount)}}</div>
        </div>
      </div>
      <div class="total">
        <span>共</span>
        <span class="totalCount"> {{order[5]}} </span>
        <span>件商品</span>
        <span>    總計</span>
        <span class="totalPrice">  {{order[6]}}</span>
      </div>
      <div class="list-check_item">
        <div class="name">姓名</div>
        <div class="content">{{order[0]}}</div>
      </div>
      <hr/>
      <div class="list-check_item">
        <div class="name">聯絡電話</div>
        <div class="content">{{order[1]}}</div>
      </div>
      <hr/>
      <div class="list-check_item">
        <div class="name">收件地址</div>
        <div class="content">{{order[2]}}</div>
      </div>
      <hr/>
      <div class="list-check_item">
        <div class="name">郵件地址</div>
        <div class="content">{{order[3]}}</div>
      </div>
      <hr/>
      <div class="list-check_item">
         <div class="name">備註</div>
         <div class="content">{{order[4]}}</div>
      </div>
      <hr/>
      <div class="list-check_item">
        <div class="name">付款狀態</div>
        <div class="content">尚未付款</div>
      </div>
      <div class="nextBtn">
        <div @click="confirm()" class="e-btn" :to="{name:'Cart-orderCompleted'}">確認付款</div>
      </div>
    </div>
  </div>
  <Loading v-if="(loading)"/>
</div>
</template>
<script>
// @ is an alias to /src
import CartStep from '@/components/CartStep.vue';
import Loading from '@/components/Loading.vue';
import Vue from 'vue';
import $ from 'jquery';

export default {
  name:'Checkout',
  components:{
    CartStep,
    Loading
  },
  props:{
    cart:{
      type:Array,
      required:true
    },
    order:{
      type:Array,
      required:true
    },
  },
  data(){
    return{
      loading:false
    }
  },
  methods:{
    //訂單完成 清空購物車
    confirm(){
      this.loading=true;
      
      let cartId=[];
      this.cart.forEach(obj=>cartId.push(obj.id));
      
      for(let i=0;i<cartId.length;i++){
        let idx=cartId[i];
        Vue.axios.delete('https://ancient-dusk-35329.herokuapp.com/cart/'+idx).then(()=>{
          this.loading=false;
        }).catch((err)=>{
          console.log(err);
        })
      }
      
      this.loading=true;
      Vue.axios.put('https://ancient-dusk-35329.herokuapp.com/total',{item: 0}).then(()=>{
        this.loading=false;
        $('body,html').scrollTop(0);
        this.$router.push({name:'Cart-orderCompleted'});
      }).catch((err)=>{
        console.log(err);
      })

      this.$emit('total',0);
    }
  }
}
</script>