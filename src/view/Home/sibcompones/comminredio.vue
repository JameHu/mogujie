.<template>
  <div class="rediosbox">
    <rediotxt v-for="(item, ind) in listData" :key="ind" :d="item" />
  </div>
</template>

<script>
import rediotxt from "components/conten/rediotxt/rediotxt";
export default {
  props: {
    listData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    rediotxt
  }
};
</script>

<style lang="scss" scoped>
.rediosbox {
  display: flex;
  margin-top: 10px;
  font-size: 14px;
  padding-bottom: 30px;
  border-bottom: 10px solid #eee;
}
</style>