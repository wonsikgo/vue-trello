<template>
  <div>
    Board
    <div v-if="loading">Loading board...</div>
    <div v-else>
      <div>bid : {{ bid }}</div>
      <pre>{{ board }}</pre>
      <router-link :to="`/b/${bid}/c/1`">Card 1</router-link> |
      <router-link :to="`/b/${bid}/c/2`">Card 2</router-link>
      <hr />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      bid: 0,
      loading: false,
    };
  },
  created() {
    this.fetchData();
  },
  computed: {
    ...mapState(["board"]),
  },
  methods: {
    ...mapActions(["FETCH_BOARD"]),
    fetchData() {
      this.loading = true;
      this.FETCH_BOARD({ id: this.$route.params.bid }).then(() => {
        this.loading = false;
      });
    },
  },
};
</script>

<style></style>
