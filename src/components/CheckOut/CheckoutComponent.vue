<template  >
  <stripe-checkout
    ref="checkoutRef"
    mode="payment"
    :customerEmail="client.email"
    :clientReferenceId="client.url"
    :pk="publishableKey"
    :line-items="lineItems"
    :success-url="successURL"
    :cancel-url="cancelURL"
  />

<v-row class="d-flex justify-center ">


   
    <v-card class="respCheckout">
        <v-card-text  >
          <!-- <div>Word of the Day</div> -->
          <p class="text-h4 text--primary">Commmand:</p>
          <div class="text--primary">
            <!-- quantity:{{lineItems[0]}}<br> -->
          </div>

          <v-table >
            <thead>
              <tr>
                <th class="text-left">Product</th>
                <th class="text-left">Quantity</th>
                <th class="text-left">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <th class="text-left"> {{Cart.name}}</th>
                  <th class="text-left"> {{Cart.quantity}}</th>
                  <th class="text-left"> {{Cart.totalPrice}}$</th>

              </tr>
            </tbody>
          </v-table>
          <v-btn variant="outlined" @click="Cancel" class="pricing-item-cta"><h6> Remove </h6></v-btn>

        </v-card-text>
      </v-card>

<v-card class="respDelivery" >

        <v-card-text>
          <!-- <div>Word of the Day</div> -->
          <p class="text-h4 text--primary">Delivery:</p>
          <div class="text--primary">
            <!-- quantity:{{lineItems[0]}}<br> -->
          </div>
          <v-text-field
            variant="underlined"
            type="text"
            v-model="client.email"
            label="Your email*"
            readonly
            required
          >
          </v-text-field>
          <v-text-field
            variant="underlined"
            type="text"
            v-model="client.url"
            label="Your Tiktok url*"
            readonly

          >
          </v-text-field>
          <v-card-actions class="d-flex flex-wrap justify-center">

            <v-switch
              v-model="Access"
              label="CGU"
              color="green"
              hide-details
              @click="Switch" 
            ></v-switch>
            <v-btn :disabled="isDisabled" variant="outlined" @click="CheckOut" ><h2> Pay {{Cart.totalPrice}}$ </h2></v-btn>



          </v-card-actions>
        </v-card-text>
   
  </v-card>
</v-row>
  
</template>


<script>
    const GenUid = uuidv4()

import { uuidv4 } from "@firebase/util";
import { StripeCheckout } from "@vue-stripe/vue-stripe";
import router from "../../router";
import store from "../../store";

export default {
  name: "CheckoutComponent",
  components: {
    "stripe-checkout": StripeCheckout,

  },
  data() {
    return {
      Access: true,
      isDisabled: false,
      authAccess: true,
      publishableKey:
        "pk_test_51LjZHQKp9Uk9dS5lUK6gZ29C1v169gcxs4ocD7mhO3bzTUpoAdA9R7Gv4KlIkfQn2QTRCbmwQL4J4O4wjSZZH3OM00KB3Uq5So",
      lineItems: [{ quantity: "", price: "" }],
      client: { email: store.getters.User.email, url: store.getters.User.url},
      successURL: "http://localhost:5173/payout/" + GenUid,
      cancelURL: "http://localhost:5173/services",
      uid : ""
    };
  },


  

  methods: {

    AddtoSwitch(){
             store.dispatch("AddtoSwitch", this.isDisabled);
       },

    CheckOut() {
      // You will be redirected to Stripe's secure checkout page
       this.$refs.checkoutRef.redirectToCheckout();
        this.AddtoSwitch()
    },

 

    Cancel() {

      location.replace("services");
    },
    Switch(){
      if(this.Access == true){
      this.isDisabled = true 
      console.log(this.isDisabled)
    }else {
      this.isDisabled = false 
      console.log(this.isDisabled)
    }
    }
  },

  computed: {

    Cart(){
      return store.getters.Cart
    }
  },

  mounted() {

    const quantity = store.getters.Cart.quantity;
    const price = store.getters.Cart.price;

    this.lineItems[0].quantity = quantity;
    this.lineItems[0].price = price;

 


    if (this.lineItems[0].price) {
      console.log(this.lineItems[0].price);
    } else {
    window.localStorage.removeItem('vuex')
      location.replace("services");
    }
    window.onpopstate = function() {
      location.replace("");

   };
  },
};
</script>


<style lang="scss">

@media screen and (width > 940px) {
  .respCheckout {

    min-width:70vh;
    
  }
  .respDelivery {

min-width:30vh;

}
  
  }
</style>