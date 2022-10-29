import {db} from '../firebase/firebaseinit'
import { getFirestore, collection, query, where, getDocs, orderBy, doc, setDoc, getDoc, onSnapshot, deleteDoc } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';



const state = {
    serviceData : [],
    
}

const getters = {

    getService(state){
        return state.serviceData
      },


}

const actions = {


    
    async getService({commit}, serviceData){

     


        const querySnapshot =  await getDocs(collection(db, "Services"))


        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots

        serviceData = [doc.id]
        console.log(doc.id)
        commit( 'ADD_SERVICE',  serviceData);

        });
      
  
  
  
  }
}
const mutations = {


    ADD_SERVICE: (state, serviceData ) => {

        state.serviceData = serviceData


      },
      
}

export default {
    state,
    mutations,
    actions,
    getters
  };
