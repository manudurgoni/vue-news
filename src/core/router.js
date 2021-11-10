import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Single from "../pages/Single.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/news/:id",
    component: Single,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router
