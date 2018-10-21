import Vue from 'vue';
import Vuex from 'vuex';

import VueMuxy from 'shared/js/muxy-plugin';

import globals from 'shared/js/globals';
import store from 'shared/js/store';

export function createExtension(app, opts) {
  Vue.use(VueMuxy, {
    client_id: globals.CLIENT_ID,
    ...opts
  });
  Vue.use(Vuex);

  new Vue({
    render: h => h(app),
    store: new Vuex.Store(store)
  }).$mount('#app');
}