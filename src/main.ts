import { createApp } from 'vue'
import App from './App.vue'
import initDirective from './plugins/directive-init'
import initElementPlusIcon from './plugins/element-plus-icon-init'
import initI18n from './plugins/i18n-init'
import initPinia from './plugins/pinia-init'
import initVueRouter from './plugins/vue-router-init'
import 'virtual:windi.css'
import '@/assets/css/root.css'
import 'virtual:svg-icons-register'

const app = createApp(App)

initPinia(app)
initElementPlusIcon(app)
initDirective(app)
initI18n(app)
initVueRouter(app)

app.mount('#app')
