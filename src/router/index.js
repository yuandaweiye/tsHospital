import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index'
import Header from './components/header/header'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Index },
    { path: '/header', component: Header }
  ]
})
