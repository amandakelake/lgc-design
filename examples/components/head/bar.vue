<template>
  <div class="head-bar">
    <div class="icon-container">
      <img alt="Lgc Design" class="icon" src="../../assets/logo.png" />
      <div class="name">Lgc Design</div>
    </div>
    <div class="nav-container"></div>
  </div>
</template>

<style lang="scss" scoped>
.head-bar {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #eaecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  .icon-container {
    display: flex;
    align-items: center;
    .icon {
      width: 50px;
      height: 50px;
    }
    .name {
      font-size: 26px;
      color: #2c3e50;
      font-weight: 600;
      margin-left: 10px;
    }
  }
}
</style>
