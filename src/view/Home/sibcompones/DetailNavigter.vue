<template>
  <navigter class="navigters">
    <template #left>
      <i class="onUpicon"></i>
    </template>
    <template #center>
      <div class="ternd">
        <p v-for="item in textArr" :class="{active:item===currIndex}">{{item}}</p>
      </div>
    </template>
  </navigter>
</template>

<script>
  import navigter from "components/common/Head/heads";

  export default {
    name: "DetailNavigter",
    data(){
      return {
      }
    },
    props:{
      currIndex:String,
      textArr:Array
    },
    components:{
      navigter
    }
  }
</script>

<style lang="scss" scoped>
  .navigters{
    background:#fff;
    border-bottom:1px solid #ddd;
  .ternd{
    display: flex;
    padding: 0 20px;
    font-size: 14px;
    text-align: center;
  p{
    flex:1;
    line-height:44px;
    &.active{
      color:#f00;
    }
  }
  }
  .onUpicon{
    display: block;
    height:44px;
    background:url("~assets/img/back.svg") no-repeat center;
  }
  }
</style>