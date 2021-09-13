import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueSimpleAlert from 'vue-simple-alert'
import Login from './components/Login.vue'
import DeployFile from './components/DeployFile.vue'

Vue.use(VueRouter)
Vue.use(VueSimpleAlert)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/deployfiles',
    name: 'DeployFile',
    component: DeployFile
  }
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  VueSimpleAlert,
  render: h => h(App),
}).$mount('#app')
