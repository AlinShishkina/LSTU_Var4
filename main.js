import { createApp } from 'vue'
import './style.css'
import App from './app.vue'

import { createPinia } from 'pinia'

const app = createApp(App)


.use(createPinia())
app.mount('#app')