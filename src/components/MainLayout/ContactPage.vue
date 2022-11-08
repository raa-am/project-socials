<template >


  <v-row justify="center">

    <v-col xs="12" sm="12" md="10" lg="10" xl="10">

      <v-card rounded id="borderDemo">

        <v-sheet class="d-flex flex-wrap justify-center ">
          <h1>Contact Us</h1>
        </v-sheet>

        <v-card class="d-flex flex-wrap justify-center ">
          <v-col cols="12" sm="6" md="6" lg="6" xl="6">
            <v-avatar size="80px" color="#FFA500">
              <v-icon  size="80px" icon="mdi-shield-lock-outline"></v-icon>
            </v-avatar>
            <v-card-text> We always take our customers' safety into consideration. Therefore, we secured our website with an SSL certificate so that you can safely make transactions. We never ask for your password or any vital and personal information to use our services. </v-card-text>
 

            <v-avatar size="80px" color="#FFA500">
              <v-icon size="80px" icon="mdi-face-agent"></v-icon>
            </v-avatar>
            <v-card-text> We are always ready to help you with our live support. You can reach our support 24/7. We are ready to answer all of your questions. Answers times can go up to 3 working days. </v-card-text>
          </v-col>

          <v-divider vertical></v-divider>
          <v-col cols="12" sm="6" md="6" lg="6" xl="6">
            <v-text-field v-model="first" color="primary" label="Title" variant="outlined"></v-text-field>

            <v-text-field v-model="last" color="primary" label="Object" variant="outlined"></v-text-field>

            <v-text-field v-model="email" color="primary" label="Email" variant="outlined"></v-text-field>

            <v-textarea label="Message" variant="outlined"></v-textarea>

          </v-col>
        </v-card>




        <v-checkbox class="d-flex flex-wrap justify-center " v-model="terms" color="secondary"
          label="I agree to site terms and conditions"></v-checkbox>


        <v-card-actions class="d-flex flex-wrap justify-center ">

          <v-btn variant="outlined">
            Send ticket
            <v-icon icon="mdi-email-send"></v-icon>
          </v-btn>
        </v-card-actions>


      </v-card>


    </v-col>

  </v-row>
</template>
<script>
export default {

  data: () => ({
    first: null,
    last: null,
    email: null,
    password: null,
    terms: false,
  }),
}
</script>

<style lang="css">
.fade-enter-active,
.fade-leave-active {
  display: none;
  transition: opacity .5s;

}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;

}
</style>
