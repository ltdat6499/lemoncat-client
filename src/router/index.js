import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Login from "@/views/Login";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      meta: {
        requiresAuth: false
      },
      component: Home
    },
    {
      path: "/login",
      name: "Login",
      meta: {
        requiresAuth: false
      },
      component: Login
    }
  ]
});
