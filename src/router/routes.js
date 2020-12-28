
const StaticRoutes = [
  {
    path: '/',
    name: 'main',
    title: '主页',
    component: () => import('@/views/Main')
  },
  {
    path: '/login',
    name: 'login',
    title: '登录',
    component: () => import('@/views/Login')
  },
  {
    path: '/drag',
    name: 'drag',
    title: '拖拽顺序',
    component: () => import('@/views/DragView')
  },
  {
    path: '/d3',
    name: 'd3',
    title: 'd3',
    component: () => import('@/views/D3')
  },
  {
    path: '/test',
    name: 'test',
    title: '测试',
    component: () => import('@/views/Test')
  }
]

export default StaticRoutes
