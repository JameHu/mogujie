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
      width:20%;
    }
    .center{
      width:60%;
    }
    .right{
      width:20%;
    }
  }
</style>