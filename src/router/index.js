import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import About from "@/views/AboutView.vue";
import Contact from "@/views/ContactView.vue";

const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/about",
    component: About,
    meta: {
      title: "About",
    },
  },
  {
    path: "/contact",
    component: Contact,
    meta: {
      title: "Contact",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  document.title = to.meta.title || "Vue-app";
});


export default router;
