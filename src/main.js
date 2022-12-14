import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/main.scss'
import {
    focusDirective,
    clickOutsideDirective,
  } from './directives'


const app = createApp(App)

app.directive('focus', focusDirective)
app.directive('click-outside', clickOutsideDirective)

app.use(router)

app.mount('#app')
