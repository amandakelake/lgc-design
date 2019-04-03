<template>
  <div class="component-button" :style="{ color: color, backgroundColor: bgColor }">{{ title }}</div>
</template>

<script>
export default {
  name: "LgcButton2",
  props: {
    title: {
      type: String
    },
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
  font-size: 36px;
  line-height: 100px;
  border-radius: 20px;
}
</style>
