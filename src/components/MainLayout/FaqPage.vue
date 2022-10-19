<template>
    <v-layout class="d-flex flex-wrap justify-center align-center ">
    <v-card max-width="80vh">
      <v-sheet class="d-flex flex-wrap justify-center align-center " height="50"><h1>FAQ:</h1> </v-sheet>
      <v-expansion-panels variant="popout" class="my-4" >

        <v-expansion-panel
          v-for="i in 10"
          :key="i"
          title="Question ?"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ></v-expansion-panel>
      </v-expansion-panels>
    </v-card>
</v-layout>
  </template>