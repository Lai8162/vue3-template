import home from './home'
import layout from './layout'

const routes = [...home, ...layout]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
