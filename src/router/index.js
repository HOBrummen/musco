import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Notices',
    component: () => import('../views/Notices.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/absences',
    name: 'Absences',
    component: () => import('../views/Absences.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('../views/Account.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      requiresAuth: false
    }
  }
]

const router = new VueRouter({ routes })

router.beforeEach(function (to, _, next) {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.user.user) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
