import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from "pinia";

loadFonts()

const pinia = createPinia()

createApp(App).use(pinia).use(vuetify).use(router).mount('#app')
