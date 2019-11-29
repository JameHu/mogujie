<template>
  <div id="detail">
    <navigter :currIndex="textArr[currText]" :textArr="textArr" class="feids"/>
    <banner :imglist="bannerlistImg" class="banners"/>
    <div class="infos">
      <h4 class="info_title">{{ goods.title}}</h4>
      <div class="info_monery">
        <p class="maxmoney">{{goods.price}}</p>
        <p class="minmoney">{{goods.oldPrice}}</p>
        <b class="teshu">{{goods.discountDesc}}</b>
      </div>
      <div class="yoush">
        <p v-for="item in goods.columns">{{ item }}</p>
      </div>
      <div class="yoush">
        <p><i></i></p>
        <p><i></i></p>
        <p><i></i></p>
      </div>
    </div>
    <div class="dianjja">
      <p v-for="item in ShopInfo.score">
        {{ item.name}}：<span :class="{active:item.isBetter}"><b>{{ item.score }}</b><i>{{ item.isBetter?'高':'低' }}</i></span>
      </p>
    </div>
    <div class="deimgs">
      <img v-for="item in deimgs" :src="item.img" alt="" style="width:100%">
    </div>
    <div class="botom_bar">
      <button @click="addShopBox">加载购物车</button>
      <button >购买</button>
    </div>
  </div>
</template>

<script>
  import navigter from "./sibcompones/DetailNavigter";
  import banner from "./sibcompones/DetaiBanner";

  import {getData,Goods,ShopInfo} from "network/detail";

  export default {
    name: "detail",
    components:{
      navigter,
      banner
    },
    data(){
      return {
        iid:0,
        currText:0,
        textArr:['商品','参数','评论','推荐'],
        bannerlistImg:[],
        goods:{},
        ShopInfo:{},
        deimgs:{}
      }
    },
    created() {
      this.iid = this.$route.query.iid;

      // 获取数据
      this.getData(this.iid)
    },
    methods:{
      addShopBox(){
        var data = {
          id:this.iid,
          title:this.goods.title,
          number:1
        }
        this.$store.commit('addshop',data)
      },
      getData(iid){
        getData(iid).then(res=>{
          console.log(res);
          // banner 数据
          this.bannerlistImg = res.result.itemInfo.topImages
          // 商品数据
          var title = res.result.itemInfo;
          this.goods = new Goods(res.result.itemInfo,res.result.columns)
          this.ShopInfo = new ShopInfo(res.result.shopInfo)
          this.deimgs = res.result.skuInfo.skus
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  #detail{
    position: relative;
    z-index: 10;
    background: #fff;
    padding:44px 0;
  }

  .banners {
    height: 300px;
  }
  .dianjja{
    color:#666;
    span{
      b{
        color:#5ea732;
      }
      i{
        background-color: #5ea732;
        color:#fff;
      }
      &.active{
        b{
          color:#f00;
        }
        i{
          background-color: #f00;
          color:#fff;
        }
      }
    }
  }

  .feids{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:44px;

    z-index: 9;
  }
  .botom_bar{
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    height:44px;
    background-color:#3c2f2f;
    text-align:center;
  }
</style>