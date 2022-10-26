<template>
   <v-layout>
   
    <br>

    <v-alert
      type="success"
      variant="outlined"
    >
 <h1>SUCCESS ! </h1>
      {{Order}}
    </v-alert>

    <br>


   </v-layout>
</template>

<script>
import store from '../../store';


export default {
   data() {
    return {
      data: ''
    }
   },
   methods:{
      getOrder(){
             store.dispatch("getOrder");
       }
    },
    computed:{
      Order(){
           return store.getters.Order
       }
    },
   mounted(){
      localStorage.removeItem('vuex');
      localStorage.clear();
      const uid = store.getters.Order

      console.log(uid)


   }
}

</script>