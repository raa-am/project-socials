<template >
  <stripe-checkout ref="checkoutRef" mode="payment" :customerEmail="client.email" :clientReferenceId="client.url"
    :pk="publishableKey" :line-items="lineItems" :success-url="successURL" :cancel-url="cancelURL" />
  <v-card class="d-flex justify-center" min-height="80vh">

    <v-col sm="4" xs="8" offset-sm="12">
      <v-card>
        <v-card-text>
          <!-- <div>Word of the Day</div> -->
          <p class="text-h4 text--primary">Commmand:</p>
          <div class="text--primary">
            <!-- quantity:{{lineItems[0]}}<br> -->
          </div>

          <v-table>
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
        </v-card-text>
        <v-card-text>
          <!-- <div>Word of the Day</div> -->
          <p class="text-h4 text--primary">Delivery:</p>
          <div class="text--primary">
            <!-- quantity:{{lineItems[0]}}<br> -->
          </div>
          <v-text-field variant="underlined" type="text" v-model="client.email" label="Your email*" readonly required>
          </v-text-field>
          <v-text-field variant="underlined" type="text" v-model="client.url" :session-id="'test'"
            label="Your Tiktok url*" readonly>
          </v-text-field>
          <br />
        </v-card-text>
        <v-card-actions class="d-flex justify-center">
          <v-btn @click="CheckOut" class="pricing-item-cta"> Order Now </v-btn>
          <v-btn @click="Cancel" class="pricing-item-cta"> Cancel </v-btn>

        </v-card-actions>
      </v-card>
    </v-col>
  </v-card>
</template>

<script>
import { StripeCheckout } from "@vue-stripe/vue-stripe";
import store from "../../store";

export default {
  name: "CheckoutComponent",
  components: {
    "stripe-checkout": StripeCheckout,
  },
  data() {
    return {
      publishableKey:
        "pk_test_51LjZHQKp9Uk9dS5lUK6gZ29C1v169gcxs4ocD7mhO3bzTUpoAdA9R7Gv4KlIkfQn2QTRCbmwQL4J4O4wjSZZH3OM00KB3Uq5So",
      lineItems: [{ quantity: "", price: "" }],
      client: { email: store.getters.Client.client.email, url: store.getters.Client.client.url },
      successURL: "http://localhost:5173/success",
      cancelURL: "http://localhost:5173/error",

    };
  },
  methods: {
    CheckOut() {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
    Cancel() {
      location.replace("services");
    },
  },

  computed: {
    Client() {
      return store.getters.Client.client
    },
    Cart() {
      return store.getters.checkOut.cart
    }
  },
  mounted() {
    const quantity = store.getters.checkOut.cart.quantity;
    const price = store.getters.checkOut.cart.price;
    const email = store.getters.Client.client.email;
    console.log(email)


    this.lineItems[0].quantity = quantity;
    this.lineItems[0].price = price;



    if (this.lineItems[0].price) {
      console.log(this.lineItems[0].price);
    } else {
      location.replace("services");
    }

    // window.onbeforeunload = () => "Are you sure you want to leave?";
  },
};
</script>
