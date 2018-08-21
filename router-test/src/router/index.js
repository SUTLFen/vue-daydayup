import Vue from 'vue'
import Router from 'vue-router'
import routerRoute from './routeTestRouter'
import vuexRoute from './vuexTestRouter'
import sassRoute from './sassTestRouter'
import quesDemoRoute from './quesDemoTest'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    ...routerRoute,
    ...vuexRoute,
    ...sassRoute,
    ...quesDemoRoute,

    {
      path: '/index',
      component: () => import('@/index')
    },

    {
      path: '*',
      redirect: '/index'
    }
  ]
});

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
});

export default router
