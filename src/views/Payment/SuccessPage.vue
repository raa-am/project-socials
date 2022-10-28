<template>
   <v-layout  >
   
    <br>

    <v-alert
      type="success"
      variant="outlined"
      v-if="SwichCgu == false"
     
    >
 <h1>SUCCESS ! </h1>
<!--  {{OrderId}}
 -->
 
 <p>Your order as beed registred , you will recieve email on : {{OrderData.email}}</p>
 <p> And your delivery will given at this url:{{OrderData.url}} </p>
 {{SwichCgu}}
    </v-alert>
    <v-alert
      type="warning"
      variant="outlined"
      v-if="!SwichCgu == false"
     
    >
 <h1>warning ! </h1>
<!--  {{OrderId}}
 -->
 
 <p>this is error page</p>

    </v-alert>
    <br>


   </v-layout>
</template>

<script>
import { useRoute } from 'vue-router';
import store from '../../store';


export default {
   data() {
    return {
      data: false,
      isEditing: true,

    }
   },
   methods:{
      getOrder(){
             store.dispatch("getOrder", this.$route.params.id);
       },
       SwichCgu(){
             store.dispatch("switchCgu");
       },
       resetData(){
         window.localStorage.removeItem('vuex')
       }
    },
    computed:{
      OrderId(){
           return store.getters.Order
       },
       OrderData(){
           return store.getters.Orders
       },
       SwichCgu(){
           return store.getters.switchCgu
       },
    },
   mounted(){

      this.getOrder()
      window.localStorage.removeItem('vuex')


  /*     window.addEventListener('unload', this.resetData) */



   },

}

</script>