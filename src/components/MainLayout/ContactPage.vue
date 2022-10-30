<template >



   
      <v-col   class="d-flex flex-wrap justify-center mx-auto" >
       <v-card rounded  id="borderDemo" >

        <v-card class="d-flex flex-wrap justify-center "
      
      >
        <h2>Contact us</h2>
  
    
  
    
        <v-divider></v-divider>
    
        <v-card-actions >
          <v-spacer></v-spacer>
    

        </v-card-actions>
      </v-card>
    <v-card  class="d-flex flex-wrap justify-center "
    >
      <v-col >
        <v-text-field
           
          v-model="first"
          color="primary"
          label="Title"
          variant="underlined"
        ></v-text-field>
  
        <v-text-field
          v-model="last"
          color="primary"
          label="Object"
          variant="underlined"
        ></v-text-field>
  
        <v-text-field
          v-model="email"
          color="primary"
          label="Email"
          variant="underlined"
        ></v-text-field>
  
        <v-textarea label="Label" variant="outlined"></v-textarea>

  
        <v-checkbox
          v-model="terms"
          color="secondary"
          label="I agree to site terms and conditions"
        ></v-checkbox>
      </v-col>
  
      <v-divider></v-divider>
  
      <v-card-actions >
        <v-spacer></v-spacer>
  
        <v-btn variant="outlined">
          Send 
  
          <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>

  </v-card>
    

    </v-col>

  </template>
  <script>
    export default {

      data: () => ({
        first: null,
        last: null,
        email: null,
        password: null,
        terms: false,
      }),
    }
  </script>

<style lang="css">

.fade-enter-active, .fade-leave-active {
  display: none;
  transition: opacity .5s;

}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;

}

</style>
