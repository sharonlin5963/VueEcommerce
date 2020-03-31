<template>
    <div class="m-step h-flexCenter">
        <div class="step_block e-btn" :class="(hasClass)?'active':''">
          <span>01</span><span> 輸入訂單資料</span></div>
        <div class="step_arrow">►</div>
        <div class="step_block e-btn" :class="(!hasClass)?'active':''">
          <span>02</span><span> 確認付款</span></div>
        <div class="step_arrow">►</div>
        <div class="step_block e-btn"> 
          <span>03</span><span> 完成訂單</span></div>
      </div>
</template>
<script>
export default {
  name:'CartStep',
  props:{
      hasClass: Boolean
  }
}
</script>