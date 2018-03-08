import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Notes from './Notes.vue'
import Login from './Login.vue'

Vue.use(VueRouter)

var router = new VueRouter({
  routes: [{
    path: '/',
    component: Notes
  }, {
    path: '/Login',
    component: Login
  }, ]
})


export default router;