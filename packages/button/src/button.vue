<template>
  <div
    class="component-button"
    :style="{ color: color, backgroundColor: bgColor }"
    @click="clickHandle"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LgcButton",
  props: {
    color: {
      type: String,
      default: "#333"
    },
    bgColor: {
      type: String,
      default: "#C1C1C1"
    }
  },
  methods: {
    clickHandle(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style scoped>
.component-button {
  /* width: 300px; */
  /* height: 100px; */
  text-align: center;
  margin-left: 10px;
  padding: 5px 10px;
  /* font-size: 36px; */
  /* line-height: 100px; */
  border-radius: 50px;
  cursor: pointer;
}
</style>
