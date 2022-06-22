export default {
  addProductToCart(context, payload) {
    // addToCart button basildiqda ancaq id goturur
    const prodId = payload.id;
    // diger moduldaki getter-den products-u goturur
    const products = context.rootGetters['products'];
    const product = products.find(prod => prod.id === prodId)
    // amma payloadi yene de tam produkt olaraq qaytarir
    context.commit('addProductToCart', product);
  },
  removeProductFromCart(context, payload) {
    context.commit('removeProductFromCart', payload);
  },
};
