<template>
  <div class="tabbars">
    <tarber-item to="/home">
      <template #icon>
        <img src="~assets/img/tabar/home.svg" alt="">
      </template>
      <template #icon-active>
        <img src="~assets/img/tabar/home_active.svg" alt="">
      </template>
      <template #text>
        <b>首页</b>
      </template>
    </tarber-item>
    <tarber-item to="/cat">
      <template #icon>
        <img src="~assets/img/tabar/category.svg" alt="">
      </template>
      <template #icon-active>
        <img src="~assets/img/tabar/category_active.svg" alt="">
      </template>
      <template #text>
        <b>分类</b>
      </template>
    </tarber-item>
    <tarber-item to="/shop">
      <template #icon>
        <img src="~assets/img/tabar/cart.svg" alt="">
      </template>
      <template #icon-active>
        <img src="~assets/img/tabar/cart_active.svg" alt="">
      </template>
      <template #text>
        <b>购物车</b>
      </template>
      <template #numer>
        <i class="numer">0</i>
      </template>

    </tarber-item>
    <tarber-item to="/my">
      <template #icon>
        <img src="~assets/img/tabar/profile.svg" alt="">
      </template>
      <template #icon-active>
        <img src="~assets/img/tabar/profile_active.svg" alt="">
      </template>
      <template #text>
        <b>我的</b>
      </template>
    </tarber-item>
  </div>
</template>

<script>
  import tarberItem from 'components/common/tabbar/tabbar-item'

  export default {
    name: "tabbars",
    components: {
      tarberItem
    }
  }
</script>

<style lang="scss" scoped>
  .tabbars {
    height: 49px;
    display: flex;
    text-align: center;
    background-color: #fff;
    border-top: 1px solid #eee;

    .taritem {
      flex: 1;
    }
  }

</style>