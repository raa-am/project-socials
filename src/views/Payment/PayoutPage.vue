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
import { useRoute } from 'vue-router'
 
 export default {
 
       methods:{
      AddOrder(){
             store.dispatch("AddService");
       },

    },
 
    mounted(){
    const route = useRoute()

       this.AddOrder();

       const id = store.getters.Order
      route.params.id = id

       console.log(id)

       this.$router.push({ path: 'order/' + route.params.id})


    },
 }
 
 </script>