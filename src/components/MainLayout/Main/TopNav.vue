<template>
  
    <v-app-bar-nav-icon icon="mdi-shark-fin-outline"  size="x-large" to="/"> <v-icon>
      
    </v-icon></v-app-bar-nav-icon>
    <v-app-bar-title class="d-flex justify-center">

      <v-btn variant="text"  to="/services"><v-icon size="x-large" icon="mdi-rocket-launch"></v-icon>  </v-btn>
        <v-btn variant="text" disabled ><v-icon size="x-large" icon="mdi-incognito"></v-icon>  </v-btn>
        <v-btn variant="text" disabled ><v-icon size="x-large" icon="mdi-store"></v-icon>  </v-btn>

    </v-app-bar-title>
    <v-btn @click="GoToProfil" ><v-icon size="x-large" icon="mdi-account-details
"></v-icon>  </v-btn>

  
  


  
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