import { RouteRecordRaw } from "vue-router";
import routeNames from "./routeNames";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: routeNames.HOME,
    component: () => import("@/templates/x/X.vue"),
  },
];

export default routes;
