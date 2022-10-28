<template>

    <v-row >
    <v-card >
      <v-sheet class="d-flex flex-wrap justify-center " ><h1>FAQ:</h1> </v-sheet>
      <v-expansion-panels variant="popout" class="my-4" >

        <v-expansion-panel
          v-for="i in 10"
          :key="i"
          title="Question ?"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ></v-expansion-panel>
      </v-expansion-panels>
    </v-card>
</v-row>
  </template>

  
<script>
export default {
  props:['Component'],

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
