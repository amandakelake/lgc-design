<template>
  <div class="home-container">
    <lgc-button @click="gotoButton">去button页面</lgc-button>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    gotoButton() {
      this.$router.push("/button");
    }
  }
};
</script>

<style scoped>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
