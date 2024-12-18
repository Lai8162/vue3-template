import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

function initPinia(app: any) {
  const pinia = createPinia()
  pinia.use(piniaPluginPersistedstate)
  app.use(pinia)
}

export default initPinia
