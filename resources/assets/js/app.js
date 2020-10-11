
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';
import Meta from 'vue-meta';
import VeeValidate from 'vee-validate';
import VueAnalytics from 'vue-analytics';

import router from './router';
import store from './store';

import App from './components/App.vue';

Vue.use(Meta);

Vue.use(VeeValidate);

Vue.use(VueAnalytics, {
  id: 'UA-XXX-X',
  checkDuplicatedScript: true,
  router,
  debug: {
    enabled: false,
    sendHitTask: false
  }
});

Vue.use(router);

var app = new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
