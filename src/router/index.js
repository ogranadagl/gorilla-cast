import Vue from 'vue';
import VueRouter from 'vue-router';

import Detail from '@/views/Detail/Detail.vue';
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
    component: Detail,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/list/:category?',
    name: 'List',
    component: () => import(/* webpackChunkName: "about" */ '../views/list-all-podcast/list-all-podcast.vue'),
  },
];

const router = new VueRouter({
  routes,
});

// eslint-disable-next-line arrow-parens
router.afterEach(to => {
  document.title = `GorillaCast | ${to.name}`;
});

export default router;
