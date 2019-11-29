<template>
  <div>
    <ul class="goodsStyle">
      <li v-for="(item,index) in goodsdata" @click="skip(item.iid)">
        <img :key="index" alt="" v-lazy="item.show.img || item.image || item.img">
        <div class="descir">
          <h6>{{ item.title}}</h6>
          <span class="blocks">
          <b class="monery">{{ item.price}}</b><i class="xing"></i>{{ item.cfav }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: "goosImgs",
    props:{
      goodsdata:Array
    },
    methods:{
      skip(iid){
        this.$router.push({path: '/detail', query: {iid}})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .goodsStyle{
    padding: 8px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    justify-content: space-between;
    li{
      width:49%;
      position: relative;
      padding-bottom: 40px;
      img{
        width:100%;
      }
      img[lazy=loading] {
        width: 100%;
        background: url("~assets/img/placeholder.png") no-repeat center;
      }
    }
  .descir{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
    h6{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 3px;
    }
    .monery{
      color:#666;
      margin-right: 20px;
    }
    .xing{
      display: inline-block;
      width: 14px;
      height: 14px;
      background: url(~assets/img/home/collect.svg) 0 0/14px 14px;
      vertical-align: -2px;
    }
  }
  }
</style>