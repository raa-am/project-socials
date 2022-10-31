import {db} from '../firebase/firebaseinit'
import { getFirestore, collection, query, where, getDocs, orderBy, doc, setDoc, getDoc, onSnapshot, deleteDoc } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';



const state = {
    serviceData : {},
    
}

const getters = {

    Plans(state){
        return state.serviceData
      },


}

const actions = {


    
    async getPlans({commit}, serviceData){


        const querySnapshot =  await getDocs(collection(db, "Services"))
       const datas = querySnapshot.docs

     datas.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          serviceData =  [{id: datas[0].id},{id: datas[1].id},{id: datas[2].id}]



        });

        commit( 'ADD_SERVICE',  serviceData);
        console.log(serviceData)

        console.log(datas[1].id)
  
  
  
  }
}
const mutations = {


    ADD_SERVICE: (state, serviceData ) => {

        state.serviceData.id = serviceData.id


      },
      
}

export default {
    state,
    mutations,
    actions,
    getters
  };