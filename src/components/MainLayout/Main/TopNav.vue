<template>
  
  <v-btn  variant="plain" size="s-large" class="hideDesk" ><v-icon size="x-large" icon="mdi-shark-fin-outline"> </v-icon> </v-btn>
  <v-btn  variant="plain" class="hideMobile" > <h2> SOCIAL<v-icon icon="mdi-shark-fin-outline"> </v-icon>HUB</h2></v-btn>



    <v-app-bar-title class="d-flex justify-center">

      <v-btn variant="text" class="hideMobile" to="/services"><v-icon size="x-large" icon="mdi-rocket-launch"></v-icon> Social Boost </v-btn>
        <v-btn variant="text"  disabled class="hideMobile" ><v-icon size="x-large" icon="mdi-incognito"></v-icon> Social Stalk </v-btn>
        <v-btn variant="text"  disabled class="hideMobile"><v-icon size="x-large" icon="mdi-store"></v-icon> Social Store </v-btn>

        <v-btn variant="text"  class="hideDesk" to="/services"><v-icon size="x-large" icon="mdi-rocket-launch"></v-icon>  </v-btn>
        <v-btn variant="text"  class="hideDesk" disabled ><v-icon size="x-large" icon="mdi-incognito"></v-icon> </v-btn>
        <v-btn variant="text"  class="hideDesk" disabled ><v-icon size="x-large" icon="mdi-store"></v-icon> </v-btn>
      

    </v-app-bar-title>
    <v-btn @click="GoToProfil" class="hideMobile"> <v-icon icon="mdi-account-details
"></v-icon> Client Portal  </v-btn>

<v-btn  @click="GoToProfil" class="hideDesk"> <v-icon size="x-large" icon="mdi-account-details
"></v-icon></v-btn>

  
  


  
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
      location.replace('https://billing.stripe.com/p/login/00g8zd0iB7KC2U8eUU')
    }
  },
    watch: {
      group () {
        this.drawer = false
      },
 
    },
  }
</script>

<style lang="scss" scoped>
@media screen and (max-width: 996px) {
.hideMobile{
display: none;
;
}

}
@media screen and (min-width : 996px) {
  .hideDesk{
display: none;

}
}
</style>