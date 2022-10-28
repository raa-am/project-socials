<template>
   <v-layout  >
   
    <br>

    <v-alert
      type="success"
      v-if="SwichCgu == false"
      variant="outlined"

    >
 <h1>SUCCESS ! </h1>
<!--  {{OrderId}}
 -->
 
 <p>Your order as beed registred , you will recieve an email on : {{OrderData.email}}</p>
 <p> Your order will be delivered at this url: {{OrderData.url}} </p>

 <p> Follow all your orders here :   <v-icon  @click="GoToProfil()"  icon="mdi-account-details
"></v-icon>   </p>

    </v-alert>
    <v-alert
      type="warning"
      variant="outlined"
      v-if="!SwichCgu == false"
     
    >
 <h1>Oops ! </h1>
<!--  {{OrderId}}
 -->
 
 <p>Something where wrong , you will be redirected soon....</p>

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
      GoToProfil(){
      location.replace('https://billing.stripe.com/p/login/test_5kA3fh8kb4hk9VK3cc')
    },
      getOrder(){
             store.dispatch("getOrder", this.$route.params.id);
       },
       getSwitch(){
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

setTimeout(() => {
   
   if(!store.getters.switchCgu == false){
   console.log('ok')
   this.$router.push({path: "/services"})
}

}, 5000);

      this.getOrder()


      window.localStorage.removeItem('vuex')


  /*     window.addEventListener('unload', this.resetData) */



   },

}

</script>