import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import NotFound from "../components/NotFound.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/Login",
      component: Login,
    },
    {
      path: "*",
      component: NotFound,
    },
  ],
});

export default router;
