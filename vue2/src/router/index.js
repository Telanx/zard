import Vue from 'vue';
import Router from 'vue-router';
import Views from '@/components/';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Views.Index,
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Views.Gallery,
    },
    {
      path: '/music',
      name: 'Music',
      component: Views.Music,
    },
    {
      path: '/more',
      name: 'More',
      component: Views.More,
    },
  ],
});
