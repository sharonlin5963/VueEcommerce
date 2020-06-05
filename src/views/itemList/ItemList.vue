<template src="./itemTemplate.html"></template>

<script>
import ProductMenu from '@/components/partial/ProductMenu.vue';
import Loading from '@/components/Loading.vue';
import Vue from 'vue';
import $ from 'jquery';

export default {
  name:'ItemList',
  components:{
    ProductMenu,
    Loading
  },
  data(){
    return{
      items:[],
      path: {
        text: 'all',
        itemClass:'商品總覽'
      },
      nowItem:{
        id: 0,
        name: '14吋金屬靜音掛鐘-玫瑰金',
        description: '超安靜!掃描機芯，無滴答聲，無數字設計，簡約百搭，時尚簡約，百搭裝潢，適合客廳、臥房、書房等 . . .',
        price: 599,
        isDiscount: false,
        discount: 0.85,
        img_name: 'clock/clock_01'
      },
      itemQuantity: 1,
      totalItem:'',
      loading:false,
      itemOpen:false
    }
  },
  created(){
    this.loading=true;
    Vue.axios.get('https://ancient-dusk-35329.herokuapp.com/post').then((res)=>{
      this.items=res.data;
      this.loading=false;
    }).catch((err)=>{
      console.log(err);
    })

    this.loading=true;
    Vue.axios.get('https://ancient-dusk-35329.herokuapp.com/total').then((res)=>{
      this.totalItem=parseInt(res.data.item);
      this.loading=false;
    }).catch((err)=>{
      console.log(err);
    })
  },
  methods:{
    //點擊ProducMenu/Header選項
    //傳遞資料到父層itemList/Home改變this.items
    pathHandler(value){
      this.path.text = value;
    },
    //從父層Home傳遞資料過來
    getPath(value){
      this.path.text=value;
    },
    //點擊打開商品
    openItem(idx){
      this.nowItem=this.newItems[idx];
      this.itemOpen=true;
    },
    //點擊關閉商品
    closeItem(){
      this.itemOpen=false;
      this.itemQuantity=1;
    },
    //加入購物車
    addItem(idx){
      let addItem=this.items[idx];
      let quantity=parseInt(this.itemQuantity);
      let totalItem=parseInt(this.totalItem);
      
      this.totalItem=totalItem+quantity;
      this.loading=true;
      Vue.axios.get('https://ancient-dusk-35329.herokuapp.com/cart').then((res)=>{
        let cart=res.data
        let cartName=Object.values(cart).map(item => item.name);
        let idx=cartName.indexOf(addItem.name)

        if(idx===-1){
          addItem.quantity=quantity;
          addItem.id=0;
          
          Vue.axios.post('https://ancient-dusk-35329.herokuapp.com/cart',addItem).then(()=>{
            this.loading=false;
            this.bought();
          }).catch((err)=>{console.log(err);})
        }else{
          let newQuantity=cart[idx].quantity+quantity;
          let index=idx+1;
           
           addItem.quantity=newQuantity;
           Vue.axios.put('https://ancient-dusk-35329.herokuapp.com/cart/'+index,addItem).then(()=>{
             this.loading=false;
             this.bought();
           }).catch((err)=>{console.log(err);})
        }
      }).catch((err)=>{
        console.log(err);
      })
      
      this.itemQuantity=1;
    },
    //加入購物車數量.quantity
    calculate(num_var){
      let num=parseInt(this.itemQuantity)
      num = num + num_var;
      if (num < 1) return num = 1;
      this.itemQuantity=num;
    },
    //.bought動畫
    bought(){
      $('.bought').fadeIn();
      setTimeout(function() {
        $('.bought').fadeOut()
      }, 1500);
    }
  },
  mounted(){
    //網址綁定
    let pathText=this.$route.params.pathText;
    this.path.text=pathText;
  },
  watch:{
    //mounted網址綁定
    $route(){
      let pathText=this.$route.params.pathText;
      this.path.text=pathText;
    },
    'path.text':function(){
      if (this.path.text === 'all') return this.path.itemClass='商品總覽';
      if (this.path.text === 'sale') return this.path.itemClass='sale';
      if (this.path.text === 'homeDecoration') return this.path.itemClass='家具擺設';
      if (this.path.text === 'clock') return this.path.itemClass='時鐘';
      if (this.path.text === 'vase') return this.path.itemClass='花器';
      if (this.path.text === 'blanket') return this.path.itemClass='毛毯';
      if (this.path.text === 'pillow') return this.path.itemClass='抱枕';
      if (this.path.text === 'lighting') return this.path.itemClass='照明';
      if (this.path.text === 'light') return this.path.itemClass='燈泡';
      if (this.path.text === 'lampshade') return this.path.itemClass='燈罩';

    },
    totalItem(val){
      //傳遞到Home
      this.$emit('getTotalItem',val);
      //
      this.loading=true;
      Vue.axios.put('https://ancient-dusk-35329.herokuapp.com/total',{item:this.totalItem}).then(()=>{
        this.loading=false;
      }).catch((err)=>{
      console.log(err);
      })
    }
  },
  computed:{
    newItems(){
      let path=this.path.text;
      let items=this.items;
      if (path === 'all') return items;

      if (path === 'sale') return items.filter((obj)=> {
          return obj.isDiscount === true;
      })

      if (path === 'homeDecoration'||path ==='lighting') return items.filter((obj)=> {
          return obj.bigGroupName === path;
      })

      return items.filter((obj)=> {
          return obj.groupName === path;
      })
    }
  }
}
</script>
