<template >


<v-row justify="center">

      <v-col cols="8">
   
       <v-card rounded  id="borderDemo" >

        <v-sheet class="d-flex flex-wrap justify-center " ><h1>Contact Us</h1> </v-sheet>

        <v-card class="d-flex flex-wrap justify-end "  >
          <v-col cols="6">
       
   
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque debitis, veritatis doloremque explicabo assumenda inventore aliquid neque autem. Adipisci fugit magnam nihil neque dolorum natus vel dolor perspiciatis voluptatibus maxime!</p>
 
        </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="6">
          <v-text-field
           
           v-model="first"
           color="primary"
           label="Title"
          variant="outlined"
         ></v-text-field>
   
         <v-text-field
           v-model="last"
           color="primary"
           label="Object"
          variant="outlined"
         ></v-text-field>
   
         <v-text-field
           v-model="email"
           color="primary"
           label="Email"
          variant="outlined"
         ></v-text-field>
   
         <v-textarea  label="Message" variant="outlined"></v-textarea>
 
        </v-col>
        </v-card>


  
  
        <v-checkbox class="d-flex flex-wrap justify-center "  
          v-model="terms"
          color="secondary"
          label="I agree to site terms and conditions"
        ></v-checkbox>
  
  
      <v-card-actions class="d-flex flex-wrap justify-center "  >
  
        <v-btn variant="outlined">
          Send ticket 
          <v-icon icon="mdi-email-send"></v-icon>
        </v-btn>
      </v-card-actions>


  </v-card>
    

    </v-col>
    
  </v-row>
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
