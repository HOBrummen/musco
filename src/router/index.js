import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Notices",
    component: () => import("../views/Notices.vue"),
  },
  {
    path: "/absences",
    name: "Absences",
    component: () => import("../views/Absences.vue"),
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("../views/Account.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/Admin.vue"),
  },
]

export default new VueRouter({ routes })
