<template>
  <div class="button-page-container">
    <lgc-button @click="gotoHome">回首页</lgc-button>
    <div class="btn-container">
      <lgc-button color="#333" bgColor="red">button1</lgc-button>
      <lgc-button-2 title="button2" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gotoHome() {
      this.$router.replace("/");
    }
  }
};
</script>

<style scoped>
.button-page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
