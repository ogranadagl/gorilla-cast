import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/home/home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Home,
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/details/details.vue'),
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: () => import(/* webpackChunkName: "list-all-favorites" */ '../views/list-all-favorites/list-all-favorites.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/about/about.vue'),
  },
  {
    path: '/list/:category?',
    name: 'List',
    component: () => import(/* webpackChunkName: "list-all-podcast" */ '../views/list-all-podcast/list-all-podcast.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

export const DETAIL_PATH = 'detail';
