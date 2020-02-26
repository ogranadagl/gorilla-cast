import Vue from 'vue';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

import '@/api';
import App from './app/app.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
  vuetify,
}).$mount('#app');
