<template>
    <heads>
      <template #center>
        <h2 class="centers">购物街</h2>
      </template>
    </heads>
</template>

<script>
  import heads from 'components/common/Head/heads'

  export default {
    name: "navigter",
    components:{
      heads
    }
  }
</script>

<style scoped>
  .centers{
    width:100%;
    color:#fff;
    text-align:center;
    line-height: 44px;
    text-align: center;
    font-weight: 700;
    color: #fff;
    font-size: 16px;
  }
</style>