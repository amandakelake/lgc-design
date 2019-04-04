<template>
  <div id="app">
    <HeadBar />
    <div class="main">
      <SideBar />
      <div class="content">
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import HeadBar from "./components/head/bar";
import SideBar from "./components/side/bar";
export default {
  name: "app",
  components: { HeadBar, SideBar }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fff;
  min-height: 100%;
  padding-top: 60px;
  .main {
    padding: 40px 50px 50px 340px;
    .content {
      max-width: 800px;
      margin-left: 150px;
    }
  }
}
</style>
