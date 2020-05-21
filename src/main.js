import Vue from 'vue'
import App from './App.vue'
import './SCSS/main.scss'
import Router from 'vue-router'
import Auth from '@/components/Auth.vue'
import Account from '@/components/Account.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Auth,
    },
    {
      path: '/account',
      component: Account,
    }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
