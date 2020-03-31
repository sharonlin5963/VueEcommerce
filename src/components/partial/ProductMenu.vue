<template>
  <div class="col col-3 productMenu">
    <ul class="productMenu_item">
        <li><router-link :to="{name:'ItemList'}" @click.native="pathChangeClick('all')">商品總覽</router-link></li>
        <li><router-link :to="{name:'ItemList-homeDecoration'}" @click.native="pathChangeClick('homeDecoration')">家具擺設</router-link>
            <ul class="productMenu_item_subMenu">
                <li><router-link :to="{name:'ItemList-clock'}" @click.native="pathChangeClick('clock')">時鐘</router-link></li>
                <li><router-link :to="{name:'ItemList-vase'}" @click.native="pathChangeClick('vase')">花器</router-link></li>
                <li><router-link :to="{name:'ItemList-blanket'}" @click.native="pathChangeClick('blanket')">毛毯</router-link></li>
                <li><router-link :to="{name:'ItemList-pillow'}" @click.native="pathChangeClick('pillow')">抱枕</router-link></li>
            </ul>
        </li>
        <li><router-link :to="{name:'ItemList-lighting'}" @click.native="pathChangeClick('lighting')">照明</router-link>
            <ul class="productMenu_item_subMenu">
                <li><router-link :to="{name:'ItemList-light'}" @click.native="pathChangeClick('light')">燈泡</router-link></li>
                <li><router-link :to="{name:'ItemList-lampshade'}" @click.native="pathChangeClick('lampshade')">燈罩</router-link></li>
            </ul>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
    name:'ProductMenu',
    methods:{
        //傳遞資料到父層itemList
        pathChangeClick(value){
            this.$emit('pathChange',value);
        }
    }
}
</script>