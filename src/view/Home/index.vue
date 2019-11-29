<template>
  <div id="home">
    <navigter class="fexid" />

    <div class="page-infinite-wrapper" ref="wrapper">
      <div v-infinite-scroll="loadBottom"
           infinite-scroll-disabled="false"
           infinite-scroll-distance="10"
           infinite-scroll-immediate-check="false">
        <banner :imglist="bannerlistImg" class="banners" @bannerLoad="bannerLoad"/>
        <cominredio :listData="listData" />
        <img
          src="~assets/img/home/recommend_bg.jpg"
          alt=""
          style="width:100%"
        />
        <tab-corle :isFied="tabcolrFiexBoolear" :text="tabCorleText" @getActive="getActive" ref="tabcolr"/>
        <goodlist :goodsdata="showGoodscurr"/>

      <p v-show="loading" class="page-infinite-loading loadStryle">
        <mt-spinner type="fading-circle"></mt-spinner>加载中...
      </p>
      </div>
    </div>
  </div>
</template>

<script>
import navigter from "./sibcompones/navigter";
import banner from "./sibcompones/banner";
import cominredio from "./sibcompones/comminredio";
import tabCorle from "components/conten/tabao/tabCorle";
import goodlist from "components/conten/goods/goosImgs";

import { getHomeAllData, getHomeGoods } from "network/home";

export default {
  name: "index",
  components: {
    navigter,
    banner,
    cominredio,
    tabCorle,
    goodlist
  },
  data() {
    return {
      bannerlistImg: [],
      listData: [],
      tabCorleText: ["流行", "新款", "精选"],
      tabCorleEnglish: "pop",
      goodsdata: {
        pop: {
          page: 1,
          list: []
        },
        new: {
          page: 1,
          list: []
        },
        sell: {
          page: 1,
          list: []
        }
      },
      tabcolrTop:0,
      tabcolrFiexBoolear:false,

      loading: false
    };
  },
  created() {
    // 获取头部信息
    this.getHomeAllData();

    // 获取商品列表信息
      this.getHomeGoods("pop");
      this.getHomeGoods("new");
      this.getHomeGoods("sell");
  },
  computed: {
    showGoodscurr() {
      return this.goodsdata[this.tabCorleEnglish].list;
    }
  },
  mounted() {
  },
  methods: {
    // 方法
    loadBottom() {
      this.getHomeGoods(this.tabCorleEnglish)
    },
    bannerLoad(){
      let elent = this.$refs.tabcolr.$el;

      this.tabcolrTop = elent.getBoundingClientRect().top-elent.clientHeight
    },
    scrollfns(){
      let scrollTop = document.documentElement.scrollTop ||
          document.body.scrollTop;

      // console.log(scrollTop);
      this.tabcolrFiexBoolear = scrollTop>this.tabcolrTop

    },

    // 获取请求数据
    getHomeAllData() {
      getHomeAllData().then(res => {
        this.bannerlistImg = res.data.banner.list;
        this.listData = res.data.recommend.list;

      });
    },
    getHomeGoods(type) {
      this.loading = true;
      let goods = this.goodsdata[type],
        page = goods.page;
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        goods.list.push(...res.data.list);
        goods.page++;

        this.loading = false;
        window.addEventListener('scroll',this.scrollfns,true)

      });
    },
    getActive(data) {
      let curr = "";
      switch (data) {
        case 0:
          curr = "pop";
          break;
        case 1:
          curr = "new";
          break;
        case 2:
          curr = "sell";
      }
      this.tabCorleEnglish = curr;
    }
  }
};
</script>

<style scoped>
#home {
  padding: 44px 0 50px;
}

.fexid {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 44px;
  z-index: 2;
}

.banners {
  height: 200px;
}

  .loadStryle{
    text-align:center;
    display: flex;
    justify-content:center;
    line-height:26px;
  }
  .loadStryle>span{
    margin-right:6px;
  }
</style>