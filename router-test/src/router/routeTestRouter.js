const routerTestRouter = [
  {
    path: '/router/index',
    meta: {
      title: '首页'
    },
    component: () => import('@/routerTest/index')
  },
  {
    path: '/router/about',
    meta: {
      title: '关于'
    },
    component: () => import('@/routerTest/about')
  },
  {
    path: '/router/user',
    meta: {
      title: '个人主页'
    },
    component: () => import('@/routerTest/user')
  }
]

export default routerTestRouter
