import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/'&'/#/',
    redirect: '/home',

  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/server',
    name: 'server',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ServeurView.vue')
  },
  {
    path:'/PVE',
    name:'PVE',
    component: () => import(/* webpackChunkName: "about" */ '../views/PveView.vue')
  },
  {
    path:'/Etat',
    name:'Etat',
    component: () => import(/* webpackChunkName: "about" */ '../views/EtatView.vue')
  },
  {
    path:'/action',
    name:'action',
    component: () => import(/* webpackChunkName: "about" */ '../views/ActionView.vue')
  }


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
