<template>
  <div text-align="center"></div>
  <!-- <v-img
          height="200"
          width="600"
          src="https://upload.wikimedia.org/wikipedia/fr/thumb/7/7f/TikTok_Logo.svg/2560px-TikTok_Logo.svg.png"
        >
        </v-img> -->
  <v-layout style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px">
    <v-row no-gutters>
      <v-card elevation="0" class="mx-auto" min-height="100vh" max-width="75vh">
        <v-carousel hide-delimiters>
          <v-carousel-item
            v-for="(item, index) in images"
            :key="index"
            :src="item.src"
            cover
          ></v-carousel-item>
        </v-carousel>

        <!-- <v-card-title class="d-flex mb-6" max-width="100"
              >Tiktok Services</v-card-title
            > -->
        <br />
        <v-card elevation="0">
          <v-tabs v-model="tab" background-color="primary">
            <v-tab value="one"> Description :</v-tab>
            <v-tab value="two">Deadlines</v-tab>
            <v-tab value="three">Account requirements</v-tab>
          </v-tabs>

          <v-card-text>
            <v-window v-model="tab">
              <v-window-item value="one">
                <p class="text--primary">
                  The quality of subscribers / likes depends on the selected
                  category.
                </p>
                <p>
                  You can choose the category of subscribers that suits your
                  needs.
                </p>
                <p>
                  For a detailed description of the subscriber categories, see
                  the "Additional Information" below.
                </p>
              </v-window-item>

              <v-window-item value="two">
                <div>
                  <br />

                  The processing of your order will start within 1 minute to 12
                  hours. You will receive a notification about this. Working of
                  an order can take from 1 minute to 14 days, sometimes more,
                  depending on the amount of the order and workload. Likes \
                  Subscriptions \ Views, etc. will go at different speeds, you
                  can see the exact speed in the "Additional Information"
                  section The amount of services you have paid will be provided
                  to you in any case, in full and with an additional bonus of
                  1-25%. At the end of the subscription, you can ask for a
                  screenshot of the work done.
                </div>
              </v-window-item>

              <v-window-item value="three">
                <br />
                <div class="text-left" justify-content="center">
                  <p class="text-left">
                    1) You must have a live account with a profile photo and at
                    least 1 post on the wall.
                  </p>
                  <p class="text-left">
                    2) The profile must be open (Not Private).
                  </p>
                  <p class="text-left">
                    3) Before receiving a message about the complete fulfillment
                    of your order and during the entire warranty period:
                  </p>
                  <p>a. DO NOT CLOSE THE PROFILE (DO NOT INCLUDE "PRIVACY");</p>
                  <p>b. DO NOT CHANGE LOGIN (NICK = URL);</p>
                  <p>
                    c. DO NOT CHANGE THE INFORMATION IN THE PROFILE
                    (description, contacts, links);
                  </p>
                  <p>d. DO NOT CHANGE THE THEME OF YOUR PUBLICATIONS;</p>
                  <p>e. DO NOT ORDER SUBSCRIBERS IN OTHER SERVICES.</p>
                </div>
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>

        <br />
        <v-card-subtitle>
          <br />
        </v-card-subtitle>

        <v-card-text class="pt-0"> </v-card-text>
      </v-card>
      <v-col>
        <br />
        <v-sheet class="d-flex justify-center">
          <v-card elevation="0" style="width: 30vh" outlined>
            <v-card-title>Choose your plan</v-card-title>
            <!-- <v-card-subtitle class="pt-4"> </v-card-subtitle> -->

            <v-card-text id="checkout" >

              <v-select
                :on-change="Selected()"
                :items="items"
                v-model="selected"
                label="Choose your plan"
                :item-value="'prices'"
              >
              </v-select>
              <br />
              <p>Choose your quantity:</p>
              <v-slider
                step="25"
                :max="5000"
                :min="200"
                :ticks="tickLabels"
                v-model="slider"
                tick-size="10"
              ></v-slider>
              <br />

      <v-text-field
                variant="underlined"
                type="text"
                v-model="client.email"
                label="Your email*"
                required
              >
              </v-text-field>
              <v-text-field
                variant="underlined"
                type="text"
                v-model="client.url"
                label="Your Tiktok url*"
              >
              </v-text-field>
              <div>
              {{selected}}

              </div>
             
              <div>{{cart[0].totalPrice}}$/{{cart[0].quantity}} units</div>
            {{test}}
            </v-card-text>

            <v-card-actions class="pricing-item-cta d-flex justify-center">
              <v-btn class="pricing-item-cta" to="/checkout" @click="AddtoCheckout">
                Order Now
              </v-btn>
         
            </v-card-actions>
          </v-card>
        </v-sheet>
      </v-col>

    </v-row>
  </v-layout>
</template>

<script>
import store from '../../store'
export default {

  name:"ServicePage",
    props: ['foo'],
  data() {
    return {
      selected: '0.10$ per unit',
      slider: 200,
      loading: false,
      tab: null,
      items: [
        { title: "Tiktok Viewers", prices: "0.10$ per unit" },
        { title: "Tiktok Likes", prices: "0.25$ per unit" },
        { title: "Tiktok Followers", prices: "0.50$ per unit" },
      ],
      publishableKey:
        "pk_test_51LjZHQKp9Uk9dS5lUK6gZ29C1v169gcxs4ocD7mhO3bzTUpoAdA9R7Gv4KlIkfQn2QTRCbmwQL4J4O4wjSZZH3OM00KB3Uq5So",
 
      cart: [{ quantity: "", price: "" , totalPrice: "", name:"" }],
      client : {email:"", url:""},
      successURL: "http://localhost:5173/success",
      cancelURL: "http://localhost:5173/error",
      images: [
        {
          src: "https://www.meilleure-innovation.com/wp-content/uploads/2021/12/signification-logo-tik-tok-1.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },

  methods: {
 

    AddtoCheckout(){
      store.dispatch('AddtoCheckout', this.cart)
      store.dispatch('AddtoClient', this.client)

    },

    Selected() {
      if (this.selected === "0.10$ per unit") {
        this.priceID = "price_1Lq06BKp9Uk9dS5lQwGIFftt";
        const name = this.items[0].title
        const slider = this.slider;
        const totalPrice = this.slider * 0.005
        // this.priceID = 'price_1LpwpdKp9Uk9dS5lvnGNrLJy';

        this.cart[0].quantity = slider;
        this.cart[0].totalPrice = totalPrice.toFixed(2);
        this.cart[0].name = name;
        this.cart[0].price = this.priceID;
      }

      if (this.selected === "0.25$ per unit") {
        this.priceID = "price_1LpyZ3Kp9Uk9dS5lkn3W56km";
        const name = this.items[1].title
        const slider = this.slider;
        const totalPrice = this.slider * 0.008;
        // this.priceID = 'price_1LpwpdKp9Uk9dS5lvnGNrLJy';

        this.cart[0].quantity = slider;
        this.cart[0].totalPrice = totalPrice.toFixed(2);
        this.cart[0].price = this.priceID;
        this.cart[0].name = name;

      }
      if (this.selected === "0.50$ per unit") {
        this.priceID = "price_1LlEvuKp9Uk9dS5lDOzF52Gr";
        const name = this.items[2].title
        const slider = this.slider;
        const totalPrice = this.slider * 0.01;
        // this.priceID = 'price_1LpwpdKp9Uk9dS5lvnGNrLJy';

        this.cart[0].quantity = slider;
        this.cart[0].totalPrice = totalPrice.toFixed(2);
        this.cart[0].price = this.priceID;
        this.cart[0].name = name;

      }
    },
  },

};
</script>
