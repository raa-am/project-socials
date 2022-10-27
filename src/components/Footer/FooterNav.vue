<template>
  <v-footer  
>

    <v-card
      elevation="0"
      rounded="0"
      width="100%"
      class="text-center"
    
    >
      <v-card-text>
        <v-btn
          class="mx-4"
          icon="mdi-home"
          variant="plain"
          to="/"
        ></v-btn>


        <v-btn
          class="mx-4"
          icon="mdi-frequently-asked-questions"
          variant="plain"
          to="/faq"
        ></v-btn>
        <router-link to="/contact">
          <v-btn
          class="mx-4"
          icon="mdi-email"
          variant="plain"
          to="/contact"
        ></v-btn>
        </router-link>
  
        <v-btn
          class="mx-4"
          icon="mdi-information-outline"
          variant="plain"
          to="/cgu"
        ></v-btn>

      </v-card-text>

      <v-divider></v-divider>

      <v-card-text>
        {{ new Date().getFullYear() }} — <strong>Social Manager</strong>
      </v-card-text>
    </v-card>
  </v-footer>

</template>