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

      const docRef = collection(db, "Services"  );
      const docSnap = await getDocs(docRef)


      docSnap.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id , '>' , doc.data())

        serviceData =  [{id: doc.id, title: doc.data()}]

        commit( 'ADD_SERVICE',  serviceData);


      });

        const querySnapshot =  await getDocs(collection(db, "Services"))


        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id , '>' , doc.data())

          serviceData =  [{id: doc.id, title: doc.data()}]

          commit( 'ADD_SERVICE',  serviceData);


        });

        console.log(serviceData)

  
  
  
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