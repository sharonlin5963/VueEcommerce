<template>
  <div>
    <Header @pathChange="pathHandler" ref="total"/>
    <router-view @getTotalItem="itemListTotalItem"
                 @TotalItem="CartTotalItem"
                 @total="CheckTotalItem"
                 @sendList="getList"
                 :order="orderList"
                 :cart="cartList"
                 ref="msg"/>
    <Footer />
    <Loading v-if="(loading)"/>
  </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/partial/Header.vue';
import Footer from '@/components/partial/Footer.vue';
import Loading from '@/components/Loading.vue';
import Vue from 'vue';

export default {
  name: 'Home',  
  components: {
    Header,
    Footer,
    Loading
  },
  data(){
    return {
      total:0,
      orderList:[],
      cartList:[],
      loading:false
    }
  },
  created(){
    this.loading=true;
    Vue.axios.get('https://ancient-dusk-35329.herokuapp.com/orderList').then((res)=>{
        this.orderList=res.data.list;
        this.loading=false;
    }).catch((err)=>{
        console.log(err);
    })
    Vue.axios.get('https://ancient-dusk-35329.herokuapp.com/cart').then((res)=>{
        this.cartList=res.data;
        this.loading=false;
    }).catch((err)=>{
        console.log(err);
    })
  },
  methods:{
    //傳遞資料到子層itemList
    pathHandler(value){
      this.$refs.msg.getPath(value);
    },
    //傳遞資料到子層Header
    itemListTotalItem(val){
      this.$refs.total.getTotal(val);
    },
    CartTotalItem(val){
      this.$refs.total.getTotal(val);
    },
    CheckTotalItem(val){
      this.$refs.total.getTotal(val);
    },
    getList(orderList,cartList){
      this.orderList=orderList;
      this.cartList=cartList;
    }
  }
}
</script>
