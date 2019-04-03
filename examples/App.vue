<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <lgc-button>第一个button</lgc-button>
    <lgc-button-2 title="button2" />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LgcButton from "../packages/button"
import LgcButton2 from "../packages/button2"

export default {
  name: 'app',
  components: {
    HelloWorld,
    LgcButton,
    LgcButton2
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
