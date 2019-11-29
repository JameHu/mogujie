<template>
  <div :class="classObject">
    <div class="tabcolr">
      <div v-for="(txt,index) in text" :class="{'active':selcetd==index}" @click="activeclick(index)">
        <p>{{ txt }}</p>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "tabCorle",
    props:{
      text:Array,
      isFied:{
        type:Boolean,
        default() {
          return false;
        }
      }
    },
    data(){
      return{
        selcetd:0,
      }
    },
    computed: {
      classObject() {
        return {
          'fexid': this.isFied ,
          'tabColrBox': true
        }
      }
    },
    methods:{
      activeclick(tindex){
        this.selcetd = tindex;
        this.$emit('getActive',tindex)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/base.scss";
  .tabcolr{
    display: flex;
    background-color: #fff;
    z-index: 9;
    &>div{
      flex:1;
      text-align:center;
      line-height: 40px;
      font-size: 15px;
      border-bottom:2px solid #fff;
      &.active{
        border-color:$color-high-text;
      }
    }
  }

  .tabColrBox{
    width:100%;
    height:44px;

  &.fexid{
    position: static;
    .tabcolr{
      position: fixed;
      left: 0;
      top: 44px;
      width: 100%;
    }
  }}
</style>