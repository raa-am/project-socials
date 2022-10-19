<template>
        <v-row class="d-flex flex-wrap justify-center align-center ">

    <v-card
    
    class="d-flex flex-wrap justify-center mx-auto"
      title="Contact us"
      max-width="70vh"
      variant="outlined "
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
  
        <v-btn color="success" variant="outlined">
          Send 
  
          <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>

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