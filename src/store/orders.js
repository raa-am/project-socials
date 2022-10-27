import {db} from '../firebase/firebaseinit'
import { getFirestore, collection, query, where, getDocs, orderBy, doc, setDoc, getDoc, onSnapshot, deleteDoc } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import {useRoute} from 'vue-router'
import router from '../router'

const route = useRoute()

console.log( router.currentRoute.value.params.id)

const state = {
    cart : {price:'', quantity:'', totalPrice: '', name:''},
    client : {email : '', url:''},
    orderId:  uuidv4(),
    orderData:{email:''}
    
}

const getters = {

  Orders(state){
    return state.orderData
  },

      Order(state){
        return state.orderId
      },

      Cart(state){
        return state.cart;
      },
    
      User(state){
        return state.client;
      },
}

const actions = {
      AddtoCheckout( { commit }, cart ){
        commit( 'ADD_CHECKOUT', cart[0] );

      },


      AddtoClient( { commit }, client ){
        commit( 'ADD_CLIENT',  client );
      },
    
  
  
      AddService({commit, getters}, orderId){
      
/*      /!\  Temporary workaround /!\ 
      todo: replace uuid with the real 
        payment_intent id to match with Stripe
 */      
    

      const dateNow = Date.now()
      const dateTime = new Date(dateNow)


     const order = {
        id: state.orderId ,
        createdAt: dateTime.toUTCString() ,
        name:  getters.Cart.name,
        email: getters.User.email,
        url: getters.User.url,
        quantity: getters.Cart.quantity,
        totalPrice: getters.Cart.totalPrice
      }

    
      
      console.log(state.orderId )
      
       setDoc(doc(db, "Orders" , state.orderId), order)
       commit( 'ADD_ORDER',  state.orderId);

      },

    
      
    async getOrder({commit}, orderData){

     
      const docRef = doc(db, "Orders",state.orderId);
      console.log(state.orderId)
      const docSnap = await getDoc(docRef);

      orderData = {email: docSnap.data().email}

      console.log(orderData)
    

      commit( 'ADD_ORDERS',  orderData);


      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data().email);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
      
}
}
const mutations = {


        ADD_CHECKOUT: (state, cart  ) => {
          state.cart.quantity = cart.quantity
          state.cart.price = cart.price
          state.cart.totalPrice = cart.totalPrice
          state.cart.name = cart.name
        },

        ADD_CLIENT: (state, client ) => {
        
          state.client.email = client.email
          state.client.url = client.url
      
        },

        ADD_ORDER: (state, orderId ) => {
        
          state.orderId = orderId
  
        },

        ADD_ORDERS: (state, orderData) => {

          state.orderData.email = orderData.email

        }

      
}

export default {
    state,
    mutations,
    actions,
    getters
  };
