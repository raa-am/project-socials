<template>
    <v-card
      elevation="0"
      rounded="0"
      width="100%"
      class="bg-white text-center"
    >
      <v-card-text>
        <v-btn
          class="mx-4"
          icon="mdi-home"
          variant="plain"
        ></v-btn>
        <v-btn
          class="mx-4"
          icon="mdi-email"
          variant="plain"
        ></v-btn>
        <v-btn
          class="mx-4"
          icon="mdi-calendar"
          variant="plain"
        ></v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text>
        {{ new Date().getFullYear() }} — <strong>Social Manager</strong>
      </v-card-text>
    </v-card>
</template>