import Vue from 'vue'
import moment from "moment";
import VueMomentJS from "vue-momentjs";
import VueRouter from 'vue-router';
import Vuex from 'vuex';

Vue.use(VueRouter, Vuex);
Vue.prototype.moment = moment


import router from './router.js'
import store from './store.js'

import Card from './Card.vue';  Vue.component("Card", Card);
import App from './App.vue';    Vue.component("App", App);


window.appVue = new Vue({
  el: '#app',
  router,
  store,
  moment,
  template: '<App/>',
  data: {
    uid: ""
  }
})
