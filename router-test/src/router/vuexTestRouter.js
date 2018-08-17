const vuexTestRouter = [
  {
    path: '/vuex/index',
    meta: {
      title: 'vuex学习'
    },
    component: () => import('@/vuexTest/index')
  }
]

export default vuexTestRouter;
