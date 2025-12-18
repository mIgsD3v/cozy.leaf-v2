// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

import About from "../views/About.vue";
import Menu from "../views/Menu.vue";
import Home from "../views/Home.vue";
import Catering from "../views/Catering.vue";
import ContactUs from "../views/ContactUs.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about-us", name: "About Us", component: About },
  { path: "/menu", name: "Menu", component: Menu },
  { path: "/catering", name: "Catering", component: Catering },
  { path: "/contact-us", name: "Contact Us", component: ContactUs },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
