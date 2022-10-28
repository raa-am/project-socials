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
          icon="mdi-frequently-asked-questions"
          variant="plain"
          @click="GoToFaq()"
        ></v-btn>

          <v-btn
          class="mx-4"
          icon="mdi-email"
          variant="plain"
          @click="GoToContact()"
        ></v-btn>
     
  
        <v-btn
          class="mx-4"
          icon="mdi-information-outline"
          variant="plain"
          @click="GoToCgu()"
        ></v-btn>

      </v-card-text>

      <v-divider></v-divider>

      <v-card-text>
        {{ new Date().getFullYear() }} — <strong>Social Manager</strong>
      </v-card-text>
    </v-card>
  </v-footer>

</template>

<script>
export default {

methods: {
  GoToCgu(){
    this.$router.push({ path: '/cgu' })

  },
  GoToFaq(){
    this.$router.push({ path: '/faq' })

  },
  GoToContact(){
    this.$router.push({ path: '/contact' })

  }
}

}
</script>