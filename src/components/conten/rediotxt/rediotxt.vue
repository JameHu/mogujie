<template>
  <div class="redios">
    <a :href="d.link">
      <img :src="d.image" alt="" :title="d.title" />
      <p>{{ d.title }}</p>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    d: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.redios {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center;
  img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
    border-radius: 100%;
  }
  p {
    color: #333;
    text-decoration: none;
  }
}
</style>