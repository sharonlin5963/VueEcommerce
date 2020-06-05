<template>
  <div class="max-1600">
    <Alert v-if="alert.open" :title="alert.title" :btnMsg="alert.btnMsg"/>
    <div class="m-cartSpace">
      <CartStep :hasClass="true"/>
      <div class="m-list shopList">
        <div class="title">購物清單</div>
        <hr/>
        <div class="noItem" 
             v-if="cartList.length===0" 
             key="cartList">購物車內沒有商品
        </div>
        <div v-else>
          <div v-for="(item,index) in cartList" :key="index">
            <div class="shopList_item" :class="(item.isDiscount)?'isSale':''">
              <div class="e-btn delete" @click="deleteItem(index)">X</div>
              <div class="item_pic"><img :src="require('../../assets/img/'+item.img_name+'.png')" alt=""/></div>
              <div class="item_name">{{item.name}}
                <br/>
                <span class="product_price">NT.{{item.price}}</span>
                <span class="product_salePrice">NT.{{Math.round(item.price*item.discount)}}</span>
              </div>
              <div class="quantity">
                <div class="symbol" @click="calculate(-1,index)">-</div>
                <div class="value">{{item.quantity}}</div>
                <div class="symbol" @click="calculate(1,index)">+</div>
              </div>
            </div>
            <hr/>
          </div>
          <div class="total">
            <span>共</span>
            <span class="totalCount"> {{addTotalItem}} </span>
            <span>件商品</span>
            <span>    總計</span>
            <span class="totalPrice">  NT.{{addTotalPrice}}</span>
          </div>
          <div class="nextBtn">
            <div class="e-btn goCheckout" @click="nextStep()">下一步</div>
          </div>
        </div>
      </div>
      <div class="m-list orderInfo">
        <div class="title">訂單資訊</div>
        <div class="orderInfo_info">
          <div class="row">
            <div :class="(check.name)?'fail':''" class="col col-md-6 col-12 orderInfo_title">姓名
              <div class="failState">*此為必填問題</div>
              <br/>
              <input @blur="checkHandler('name')" v-model="customerInfo.name" type="text"/>
            </div>
            <div :class="(check.phone)?'fail':''" class="col col-md-6 col-12 orderInfo_title ">聯絡電話
              <div class="failState">*電話必須為10位數字</div>
              <br/>
              <input @blur="checkHandler('phone')" v-model="customerInfo.phone" type="text"/>
            </div>
          </div>
          <div :class="(check.addr)?'fail':''" class="orderInfo_title">收件地址
            <div class="failState">*此為必填問題</div>
            <br/>
            <input @blur="checkHandler('addr')" v-model="customerInfo.addr" type="text"/>
          </div>
          <div :class="(check.mail)?'fail':''" class="orderInfo_title">郵件地址
            <div class="failState">*請輸入正確的Email格式</div>
            <br/>
            <input @blur="checkHandler('mail')" v-model="customerInfo.mail" type="text"/>
          </div>
          <div class="orderInfo_title">備註
            <br/>
            <textarea v-model="customerInfo.remark" name="text"></textarea>
          </div>
        </div>
        <div class="nextBtn">
          <div @click="checkOut()" class="e-btn">結帳</div>
        </div>
      </div>
    </div>
    <Loading v-if="(loading)"/>
  </div>
</template>
<script>
// @ is an alias to /src
import CartStep from '@/components/CartStep.vue';
import Alert from '@/components/Alert.vue';
import Loading from '@/components/Loading.vue';
import $ from 'jquery';
import Vue from 'vue';

export default {
  name:'Cart',
  components:{
    CartStep,
    Alert,
    Loading
  },
  data(){
    return{
      cartList:[],
      totalPrice:0,
      totalItem:0,
      alert:{
        open:false,
        title:'您的購物車沒有商品',
        btnMsg:'去逛逛'
      },
      number:'',
      loading:false,
      customerInfo:{
        name:'',
        phone:'',
        addr:'',
        mail:'',
        remark:''
      },
      check:{
        name:false,
        phone:false,
        addr:false,
        mail:false
      },
      checkOff:false
    }
  },
  created(){
    this.loading=true;
    Vue.axios.get('https://ancient-dusk-35329.herokuapp.com/cart')
    .then((res)=>{
      this.cartList=res.data;
      this.loading=false;
    })
    .catch((err)=>{
      console.log(err);
    })
  },
  methods:{
    //下一步按鍵
    nextStep(){
      let scrollTop = $('.orderInfo').offset().top
      $('body,html').stop().animate({ scrollTop: scrollTop });
    },
    //.quantity
    calculate(num_var,idx){
      let item=this.cartList[idx];
      let num=parseInt(item.quantity);
      this.number=parseInt(item.quantity);

      num = num + num_var;
      if (num < 1) return num = 1;
      item.quantity=num;

      let index=item.id;
      if(this.number!==num){
        this.loading=true;
        Vue.axios.patch('https://ancient-dusk-35329.herokuapp.com/cart/'+index,{"quantity": num}).then(()=>{
          this.loading=false;
        }).catch((err)=>{
          console.log(err);
        })
      }
    },
    //delete item
    deleteItem(idx){
      this.loading=true;
      let index=this.cartList[idx].id;
      Vue.axios.delete('https://ancient-dusk-35329.herokuapp.com/cart/'+index).then(()=>{
        this.loading=false;
        this.cartList.splice(idx,1);
      }).catch((err)=>{
        console.log(err);
      })
    },
    //結帳
    checkHandler(val){
      if(this.cartList.length===0)return this.alert.open=true;

      let {name,phone,addr,mail}=this.customerInfo;
      let phoneReg = /^0[0-9]{9}$/;
      let emailReg = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$/;
      if(val==='name'){
        if(!name) return this.check.name=true;
        this.check.name=false;
      }
      if(val==='addr'){
      if(!addr)return this.check.addr=true;
      this.check.addr=false;
      }
      if(val==='phone'){
      if(!phoneReg.test(phone))return this.check.phone=true;
      this.check.phone=false;
      }
      if(val==='mail'){
      if(!mail||!emailReg.test(mail))return this.check.mail=true;
      this.check.mail=false;
      }
    },
    checkOut(){
      let checkArr=Object.values(this.check);
      let orderList=Object.values(this.customerInfo);

      if(checkArr.every(item=>item===false)){
      this.loading=true;

      orderList.push(this.addTotalItem);
      orderList.push(this.addTotalPrice);

      this.$emit('sendList',orderList,this.cartList);
      Vue.axios.put('https://ancient-dusk-35329.herokuapp.com/orderList',{list:orderList}).then(()=>{
        this.loading=false;
      }).catch((err)=>{
        console.log(err);
      })

      //確定資料 到下一頁
        $('body,html').scrollTop(0);
        this.$router.push({name: 'Cart-checkout'});
      }
    }
  },
  computed:{
    //件數加總
    addTotalItem(){
      let cartList=this.cartList;
      let  totalItem=this.totalItem;
      totalItem=0
      for(let i=0;i<cartList.length;i++){
        totalItem+=parseInt(cartList[i].quantity); 
      }
      
      return totalItem;  
      
    },
    //價錢加總
    addTotalPrice(){
      let cartList=this.cartList;
      let  totalPrice=this.totalPrice;
      totalPrice=0
      for(let i=0;i<cartList.length;i++){
        totalPrice+=Math.round(cartList[i].price*cartList[i].discount)*cartList[i].quantity; 
      }
      return totalPrice; 
       
    }
  },
  watch:{
    addTotalItem(val){
      //傳遞到Home
      this.$emit('TotalItem',val);
      //
      this.loading=true;
      Vue.axios.put('https://ancient-dusk-35329.herokuapp.com/total',{item:this.addTotalItem}).then(()=>{
        this.loading=false;
      }).catch((err)=>{
      console.log(err);
      })
    }
  }


}
</script>