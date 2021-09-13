import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueSimpleAlert from 'vue-simple-alert'
import Login from './components/Login.vue'
import Navbar from './components/Navbar.vue'
import RequestComponent from './components/RequestComponent'
import DeployComponent from './components/DeployComponent'

Vue.use(VueSimpleAlert)
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/navbar',
    name: 'Navbar',
    component: Navbar
  },
  {
    path: '/request',
    name: 'request',
    component: RequestComponent,
  },
  {
    path: '/deploy',
    name: 'deploy',
    component: DeployComponent
  }
]
Vue.config.productionTip = false

const router = new VueRouter({routes})

new Vue({
  VueSimpleAlert,
  router,
  render: h => h(App),
}).$mount('#app')
