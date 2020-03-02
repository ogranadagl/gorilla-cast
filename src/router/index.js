import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/home/home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Home,
  },
  {
    path: '/details/:id',
    name: 'details',
    component: () => import('../views/details/details.vue'),
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () =>
      import(
        /* webpackChunkName: "list-all-favorites" */ '../views/list-all-favorites/list-all-favorites.vue'
      ),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about/about.vue'),
  },
  {
    path: '/podcasts/:category?',
    name: 'podcasts',
    component: () =>
      import(
        /* webpackChunkName: "list-all-podcast" */ '../views/list-all-podcast/list-all-podcast.vue'
      ),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
