<template>
    <v-layout>
    
     <br>
 
     <v-alert
       type="success"
       variant="outlined"
     >
  <h1>SUCCESS ! </h1>

     </v-alert>
 
     <br>
 
 
    </v-layout>
 </template>
 
 <script>
 import store from "../../store";
 
 export default {
 
       methods:{
      AddOrder(){
             store.dispatch("AddService");
       },

    },
 
    mounted(){


const email = store.getters.User.email

if(email){
   this.AddOrder(); 
}



         const data = store.getters.Order
         console.log(data)



      this.$router.push({ path: '/order/' + data})


    },
 }
 
 </script>