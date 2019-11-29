<template>
  <div class="home_banner">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, i) in imglist" :key="i">
          <img :src="item" alt=""/>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
  import { Swipe, SwipeItem } from "mint-ui";

  export default {
    name: "DetaiBanner",
    data() {
      return {
      };
    },
    props: {
      imglist: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    components: {
      "mt-swipe": Swipe,
      "mt-swipe-item": SwipeItem
    },
    methods:{
    }
  };
</script>
<style lang="scss">
  @import "~assets/css/base.scss";
  .home_banner {
    img {
      width: 100%;
    }
  }
  .mint-swipe-indicators {
    .mint-swipe-indicator {
      opacity: 1;
      background-color: $color-background !important;
      &.is-active {
        background-color: $color-tint !important;
      }
    }
  }
</style>