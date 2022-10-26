import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import {db} from './../firebase/firebaseinit'
import { getFirestore, collection, query, where, getDocs, orderBy, doc, setDoc, getDoc, onSnapshot, deleteDoc } from "firebase/firestore";
import orders from './orders'
import router from './../router'
import { useRoute } from 'vue-router'

const currentRoute = useRoute()

console.log(currentRoute)


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
