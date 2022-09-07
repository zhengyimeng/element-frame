import { RouteRecordRaw } from "vue-router";
import routeNames from "./routeNames";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/components/HelloWorld.vue"),
  },
  {
    path: "/login",
    name: routeNames.LOGIN,
    component: () => import("@/templates/login/Login.vue"),
  },
];

export default routes;
