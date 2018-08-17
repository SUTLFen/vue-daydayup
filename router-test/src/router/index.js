import Vue from 'vue'
import Router from 'vue-router'
import routerTest from './routeTestRouter'
import vuexTest from './vuexTestRouter'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    ...routerTest,
    ...vuexTest,
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
