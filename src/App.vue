<template>
  <div id="app">
    <router-view></router-view>
    <tarbar class="footTar" />
  </div>
</template>

<script>
import tarbar from "components/common/tabbar/tabbars";
export default {
  name: "app",
  components: {
    tarbar
  }
};
</script>

<style lang="scss">
.footTar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
}
</style>
