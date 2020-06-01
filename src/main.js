import Vue from 'vue'
import App from './App.vue'
import './SCSS/main.scss'
// import Router from 'vue-router'
import { store } from './store/'


// Vue.use(Router)

// // const router = new Router({
// //   routes: [
// //     {
// //       path: '/',
// //       component: Auth,
// //     },
// //     {
// //       path: '/account',
// //       component: Account,
// //     }
// //   ]
// // })

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
