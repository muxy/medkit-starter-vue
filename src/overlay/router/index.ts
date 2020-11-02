import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import ComingSoon from "../views/ComingSoon.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Splash",
    component: ComingSoon,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
