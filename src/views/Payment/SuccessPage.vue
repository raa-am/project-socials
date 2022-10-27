<template>
   <v-layout>
   
    <br>

    <v-alert
      type="success"
      variant="outlined"
    >
 <h1>SUCCESS ! </h1>
 {{OrderId}}
 {{Order}}


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
      data: ''
    }
   },
   methods:{
      getOrder(){
             store.dispatch("getOrder", this.$route.params.id);
       }
    },
    computed:{
      OrderId(){
           return store.getters.Order
       },
    },
   mounted(){


     this.getOrder()


   }
}

</script>