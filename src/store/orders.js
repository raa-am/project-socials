import {db} from '../firebase/firebaseinit'
import { getFirestore, collection, query, where, getDocs, orderBy, doc, setDoc, getDoc, onSnapshot, deleteDoc } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';



const state = {
    cart : {price:'', quantity:'', totalPrice: '', name:'' , units:''},
    client : {email : '', url:''},
    orderId:  uuidv4(),
    orderData:{email:''},
    switchCgu: true
    
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
          
      switchCgu(state){
        return state.switchCgu;
      },
}

const actions = {
      AddtoCheckout( { commit }, cart ){
        commit( 'ADD_CHECKOUT', cart[0] );
      },

      AddtoClient( { commit }, client ){
        commit( 'ADD_CLIENT',  client );
      },
    
      AddtoSwitch( { commit }, switchCgu ){
        commit( 'ADD_SWITCH',  switchCgu );
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
        email: getters.User.email,
        url: getters.User.url,
        name:  getters.Cart.name,
        units:getters.Cart.units,
        quantity: getters.Cart.quantity,
        totalPrice: getters.Cart.totalPrice
      }

          
       setDoc(doc(db, "Orders" , state.orderId), order)
       commit( 'ADD_ORDER',  state.orderId);

      },

    
      
    async getOrder({commit}, orderData){

     
      const docRef = doc(db, "Orders",state.orderId);
      const docSnap = await getDoc(docRef);
      const order = docSnap.data()

      orderData = {email: order.email, url: order.url} 

    

      commit( 'ADD_ORDERS',  orderData);
      
}
}
const mutations = {


        ADD_CHECKOUT: (state, cart  ) => {
          state.cart.quantity = cart.quantity
          state.cart.price = cart.price
          state.cart.totalPrice = cart.totalPrice
          state.cart.name = cart.name
          state.cart.units = cart.units

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
          state.orderData.url = orderData.url


        },

        ADD_SWITCH: (state, switchCgu) => {

          state.switchCgu = switchCgu
   
        },

      
}

export default {
    state,
    mutations,
    actions,
    getters
  };
