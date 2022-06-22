import { createStore } from 'vuex';

import authModule from './modules/auth/index';
import cartModule from './modules/cart/index';
import productModule from './modules/product/index';

const store = createStore({
  modules: {
    auth: authModule,
    cart: cartModule,
    product: productModule,
  },
});

export default store;
