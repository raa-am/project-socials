<template>

        <v-toolbar-title>Social Manager</v-toolbar-title>

        <v-spacer></v-spacer>
        
        <v-btn variant="text" to="/">Home</v-btn>
        <v-btn variant="text" @click="Service()">Services</v-btn>
        <v-btn variant="text" to="/about">About</v-btn>
<router-link :to="{ name: 'service'}">
 <v-btn variant="text" to="/about">About</v-btn>
</router-link>


        <v-btn variant="text" icon="mdi-filter"></v-btn>

        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
 

  
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