<template>
  <div>
    <div class="btn-container">
      <lgc-button color="#333" bgColor="red">button1</lgc-button>
      <lgc-button-2 title="button2" />
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
