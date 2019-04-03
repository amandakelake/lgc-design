import Vue from "vue";
import router from "./router/router";
import App from "./App.vue";
import LgcDesign from "../packages";

Vue.use(LgcDesign);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
