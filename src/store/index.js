import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import orders from './orders'



// Create a new store instance.
const store = createStore({
  plugins: [createPersistedState({
    })],
  state: {
    appName: 'Social Mana',
  },
mutations: {
},
actions: {
},
getters:{
},
modules: {
  orders,

},

})


export default store;
// Install the store instance as a plugin
