import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import RequestComponent from './components/RequestComponent'
import DeployComponent from './components/DeployComponent'

Vue.use(VueRouter)
const routes = [
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
  router,
  render: h => h(App),
}).$mount('#app')
