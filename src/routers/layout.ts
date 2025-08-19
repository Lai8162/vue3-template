export default [
  {
    path: '/lr',
    component: () => import('@/layouts/left-right/left-right-layout.vue'),
  },
  {
    path: '/tb',
    component: () => import('@/layouts/top-bottom/top-bottom-layout.vue'),
  },
]
