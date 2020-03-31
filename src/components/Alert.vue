<template>
    <div class="alert">
        <div>{{title}}</div>
        <router-link class="e-btn" :to="{name:'ItemList'}">{{btnMsg}}</router-link>
    </div>
</template>
<script>
export default {
    name:'Alert',
    props:{
        title:String,
        btnMsg:String
    }
}
</script>