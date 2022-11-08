<template>
    <v-layout>
        <v-alert
      variant="outlined"
      type="error"
      prominent
      border="top"
    >
    <h1>ERROR !</h1>
    <p>Something were wrong , you will be redirected soon....</p>
    </v-alert>
    </v-layout>
</template>


<script>
export default {
  

  mounted(){
    setTimeout(() => {

if (!store.getters.switchCgu == false) {
   this.$router.push({ path: "/services" })
}

}, 2000);
  }
}
</script>