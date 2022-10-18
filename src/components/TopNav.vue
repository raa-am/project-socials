<template>
  
    <v-app-bar-nav-icon to="/"><v-icon icon="mdi-shark-fin-outline" size="x-large"> </v-icon>  </v-app-bar-nav-icon>
    <v-app-bar-title class="d-flex justify-center">

      <v-btn variant="text"  to="/services"><v-icon icon="mdi-rocket-launch"></v-icon>  Services</v-btn>
        <v-btn variant="text" disabled ><v-icon icon="mdi-incognito"></v-icon>  Stalking</v-btn>
        <v-btn variant="text" disabled ><v-icon icon="mdi-store"></v-icon>  Stores</v-btn>

    </v-app-bar-title>

  
  


  
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

    }
  },
    watch: {
      group () {
        this.drawer = false
      },
 
    },
  }
</script>