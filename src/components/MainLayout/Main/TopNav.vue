<template>
  

    <v-app-bar-nav size="x-large"  icon="mdi-shark-fin-outline" ><v-btn variant="text" > <v-icon size="x-large" icon="mdi-shark-fin-outline"></v-icon> <h1> SH </h1> </v-btn></v-app-bar-nav>

    <v-app-bar-title class="d-flex justify-center">

      <v-btn variant="text"   to="/services"><v-icon size="x-large" icon="mdi-rocket-launch"></v-icon> Social Boost </v-btn>
        <v-btn variant="text" disabled ><v-icon size="x-large" icon="mdi-incognito"></v-icon> Social Stalk </v-btn>
        <v-btn variant="text" disabled ><v-icon size="x-large" icon="mdi-store"></v-icon> Social Store </v-btn>

    </v-app-bar-title>
    <v-btn @click="GoToProfil" > <v-icon size="x-large" icon="mdi-account-details
"></v-icon> Client Portal  </v-btn>

  
  


  
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
    }),
  methods:{
    Service(){

      this.$router.push({ path: '/services' })

    },
    GoToProfil(){
      location.replace('https://billing.stripe.com/p/login/test_5kA3fh8kb4hk9VK3cc')
    }
  },
    watch: {
      group () {
        this.drawer = false
      },
 
    },
  }
</script>