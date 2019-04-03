import Vue from 'vue'
import router from "./router/router"
import App from './App.vue'
import LgcDesign from "../packages"

Vue.config.productionTip = false

Vue.use(LgcDesign)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
