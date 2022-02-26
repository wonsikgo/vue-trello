<template>
  <div>
    Card
    <div v-if="loading">loading card...</div>
    <div v-else>cid : {{ cid }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    cid() {
      return this.$route.params.cid;
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
};
</script>

<style></style>
