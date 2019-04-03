import Vue from 'vue'
import App from './App.vue'

import LgcDesign from "../packages/index"
Vue.use(LgcDesign)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
