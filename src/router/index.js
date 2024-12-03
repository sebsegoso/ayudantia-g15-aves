import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/aves",
    name: "aves",
    component: () => import("../views/AvesView.vue"),
  },
  {
    path: "/ave/:id",
    name: "ave-detalle",
    component: () => import("../views/AveDetalleView.vue"),
  },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
