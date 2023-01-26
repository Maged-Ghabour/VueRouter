import { createApp } from "vue";
import App from "./App.vue";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import AboutComponent from "./components/AboutComponent.vue";
import ContactComponent from "./components/ContactComponent.vue";
import SingleComponent from "./components/SingleComponent.vue";
import HandleComponent from "./components/HandleComponent.vue";
import ProductsComponent from "./components/ProductsComponent.vue";

let routes = [
  {
    path: "/",
    component: HomeComponent,
  },
  {
    path: "/about",
    component: AboutComponent,
  },
  {
    path: "/products",
    component: ProductsComponent,
  },
  {
    path: "/contact",
    component: ContactComponent,
  },
  {
    path: "/products/:productId",
    props: true,
    component: SingleComponent,
  },
  {
    path: "/:catchAll(.*)",
    component: HandleComponent,
  },
];

const route = createRouter({ history: createWebHistory(), routes });

createApp(App).use(route).mount("#app");
