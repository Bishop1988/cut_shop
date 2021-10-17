import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true,
  },
  {
    path: "/materials/:slug",
    name: "materialsDetails",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "MaterialsDetails" */ "../views/MaterialsDetails.vue"
      ),
  },
  {
    path: "/materials/:slug/:materialTypeSlug/orders",
    name: "materialOrder",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "MaterialOrder" */ "../views/MaterialOrder.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "cut-shop-active-class",
  routes,
});

export default router;
