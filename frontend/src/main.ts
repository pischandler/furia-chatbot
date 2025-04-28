import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vuetify/styles' 
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Cria instâncias
const app = createApp(App)
const vuetify = createVuetify({
  components,
  directives,
})

// Usa as bibliotecas
app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
