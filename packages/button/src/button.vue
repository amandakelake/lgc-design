<template>
  <div class="component-button" :style="{ color: color, backgroundColor: bgColor }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LgcButton",
  props: {
    color: {
      type: String,
      default: "white"
    },
    bgColor: {
      type: String,
      default: "yellow"
    }
  }
}
</script>

<style scoped>
.component-button {
  width: 300px;
  height: 100px;
  text-align: center;
  margin: 10px 20px;
  font-size: 36px;
  line-height: 100px;
  border-radius: 20px;
  cursor: pointer;
}
</style>
