import { createStore } from 'vuex';

import authModule from './modules/auth/index';
import shopModule from './modules/shop/index';

const store = createStore({
  modules: {
    auth: authModule,
    shop: shopModule
  },
});

export default store;
