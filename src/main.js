import '@/assets/styles/main.scss'
import { MotionPlugin } from '@vueuse/motion'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import { defaultLocale, languages } from './i18n'
import router from './router'

const messages = Object.assign(languages)
const i18n = createI18n({
	legacy: true,
	locale: defaultLocale,
	fallbackFormat: 'en',
	messages,
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(MotionPlugin)
app.mount('#app')
