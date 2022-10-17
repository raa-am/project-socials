import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
// Create a new store instance.
const store = createStore({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
})],
  state: {
  cart : {price:'', quantity:'', totalPrice: '', name:''},
  client : {email : '', url:''}
  },

mutations: {
  ADD_CHECKOUT: (state, cart  ) => {
    state.cart.quantity = cart.quantity
    state.cart.price = cart.price
    state.cart.totalPrice = cart.totalPrice
    state.cart.name = cart.name



  },
  ADD_CLIENT: (state, client ) => {
  
    state.client.email = client.email
    state.client.url = client.url

  }
},

actions: {

AddtoCheckout( { commit }, cart ){
  commit( 'ADD_CHECKOUT', cart[0] );
},
AddtoClient( { commit }, client ){
  commit( 'ADD_CLIENT',  client );
}
},
getters:{
  checkOut(cart){
    return cart;
  },

  Client(client){
    return client;
  },


}

})


export default store;
// Install the store instance as a plugin
