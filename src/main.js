import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BaseAlert from './components/BaseAlert.vue'
import Loader from "./components/Loader.vue";
import BaseCard from "./components/BaseCard";

import './assets/css/styles.scss'
import filters from "./Filters.ts";


const app = createApp(App)
app.use(store)
app.use(router)
app.component('base-alert', BaseAlert)
app.component('loader', Loader)
app.component('base-card', BaseCard)

app.config.globalProperties.$filters = filters

app.mount('#app')
