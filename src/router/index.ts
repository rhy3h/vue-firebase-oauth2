import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/admin",
    name: "admin",
    component: () =>
      import(/* webpackChunkName: "admin" */ "../views/AdminView.vue"),
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: () =>
      import(/* webpackChunkName: "sign-up" */ "../views/SignUpView.vue"),
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: () =>
      import(/* webpackChunkName: "sign-in" */ "../views/SignInView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
