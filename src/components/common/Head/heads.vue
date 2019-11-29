<template>
  <div class="headtop">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "heads"
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/base.scss";
  .headtop {
    display: flex;
    height: 44px;
    background:$color-tint;
    .left{
      width:10%;
    }
    .center{
      width:80%;
    }
    .right{
      width:10%;
    }
  }
</style>