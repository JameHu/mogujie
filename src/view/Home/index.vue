<template>
  <div>
    <navigter />
    <banner :imglist="bannerlistImg" class="banners" />
  </div>
</template>

<script>
import navigter from "./sibcompones/navigter";
import banner from "./sibcompones/banner";

import { Axios } from "network/require";
export default {
  name: "index",
  components: {
    navigter,
    banner,
    Axios
  },
  data() {
    return {
      bannerlistImg: []
    };
  },
  created() {
    Axios({
      url: "v1/home/multidata"
    }).then(res => {
      console.log(res);
      this.bannerlistImg = res.data.banner.list;
    });
  },
  methods: {}
};
</script>

<style scoped>
.banners {
  height: 200px;
}
</style>