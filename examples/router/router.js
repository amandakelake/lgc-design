import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/home/home.vue";

Vue.use(Router);

const router = new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/button",
      name: "button",
      component: resolve => require(["../pages/button/index.vue"], resolve)
    }
  ]
});

router.beforeEach((to, from, next) => {
  // do something
  next();
});

export default router;
