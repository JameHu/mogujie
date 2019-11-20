<template>
  <div class="taritem" @click="routerClick">
    <div v-show="!isactive">
      <slot name="icon"></slot>
    </div>
    <div v-show="isactive">
      <slot name="icon-active"></slot>
    </div>
    <slot name="numer"></slot>
    <slot name="text"></slot>
  </div>

</template>

<script>
  export default {
    name: "tabbar-item",
    props:['to'],
    computed:{
      isactive(){
        return this.$route.path.indexOf(this.to) != -1
      },
    },
    methods:{
      routerClick(){
        this.$router.push(this.to)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .taritem{
    position: relative;
    img{
      display: block;
      width: 24px;
      height: 24px;
      vertical-align: middle;
      margin:5px auto 0;
    }
    b{
      font-size: 12px;
      margin-top: 3px;
      color: #333;
    }
  
    .numer{
      position: absolute;
      top: 0;
      left:52%;
      color: #f00;
      font-size: 12px;
      background: #dad2d2;
      -webkit-border-radius: 80px;
      -moz-border-radius: 80px;
      border-radius: 80px;
      padding:3px;
      font-style:normal;
    }
  }
</style>