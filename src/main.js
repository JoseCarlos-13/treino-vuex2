import Vue from 'vue'
import App from './App.vue'
import router from '../routes'
import axios from 'axios'
import store from '../store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

export const User = axios.create({
  baseURL: 'https://crud-usuarios-efa1b.firebaseio.com/'
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
