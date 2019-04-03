import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/home/home.vue";

Vue.use(Router);

const router = new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
	]
});

router.beforeEach((to, from, next) => {
  console.log('router.beforeEach');
  next();
});

export default router;
