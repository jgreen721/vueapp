import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LoginView from "../views/LoginView.vue";
import MovieInfoView from "../views/MovieInfoView.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView,
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: LoginView,
  },
  {
    path: "/movieinfo/:title",
    component: MovieInfoView,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "login",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem("auth-user") && to.fullPath !== "/login") {
    console.log("not-authed");
    next("/login");
  } else if (localStorage.getItem("auth-user") && to.fullPath === "/login") {
    next("/home");
    console.log("auutthed!!!");
  } else {
    console.log(to, from);
    next();
  }
});

export default router;
