import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { vGettext } from '@/lang/v-gettext'

const pinia = createPinia()

const app = createApp(App).use(pinia).use(router)

app.directive('gettext', vGettext)

app.mount('#app')
