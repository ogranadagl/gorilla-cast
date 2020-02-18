import Vue from 'vue';

import api from '@/api/index';

import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;

console.log(api);


new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
