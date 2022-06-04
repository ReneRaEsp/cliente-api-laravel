import { createRouter, createWebHashHistory } from "vue-router";
import Articulos from "../views/Articulos.vue";

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Articulos,
  },
  {
    path: "/articulos",
    name: "Articulos",
    component: Articulos,
  },
  {
    path: "/agregar-articulo",
    name: "AgregarArticulo",
    component: () =>
      import(
        /* webpackChunkName: "agregarArticulo" */ "../views/AgregarArticulo.vue"
      ),
  },
  {
    path: "/editar-articulo/:id",
    name: "EditarArticulo",
    component: () =>
      import(
        /* webpackChunkName: "editarArticulo" */ "../views/EditarArticulo.vue"
      ),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
