import { createRouter, createWebHashHistory } from "vue-router";
import ComingSoon from "../views/ComingSoon.vue";

/**
 * @type Array<RouteRecordRaw>
 **/
const routes = [
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
