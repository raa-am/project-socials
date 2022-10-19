<template>
  <!-- <v-img
          height="200"
          width="600"
          src="https://upload.wikimedia.org/wikipedia/fr/thumb/7/7f/TikTok_Logo.svg/2560px-TikTok_Logo.svg.png"
        >
        </v-img> -->
  <v-row class="d-flex justify-center ">

  <v-layout class="d-flex flex-wrap justify-center align-center" >
      <v-card  class="respLayout" max-width="100vh" min-height="100vh" >
        <v-carousel hide-delimiters >
          <v-carousel-item 
          
            v-for="(item, index) in images"
            :key="index"
            :src="item.src"
            cover
        
          >  </v-carousel-item>
        </v-carousel>

        <v-card-title class="d-flex justify-center align-center mb-2" 
              >Tiktok Service</v-card-title
            >
            <v-divider></v-divider>

          <v-tabs class="d-flex justify-center"  v-model="tab" >
            <v-tab value="one"> Description </v-tab>
            <v-tab value="two">Additional Information</v-tab>
            <v-tab value="three">Account requirements</v-tab>
          </v-tabs>

          <v-card-text class="d-flex align-center " >
            <v-window class="d-flex justify-center align-center "  v-model="tab"  >
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
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </v-layout>


<v-layout  class="d-flex flex-wrap justify-center align-center"   >
          <v-card elevation="0" outlined class="respPayOut" variant="outlined"  >
            <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >

        <v-card-text>
          <v-card-title>Choose your plan:</v-card-title>
          <br>

          <v-select variant="outlined"
            :on-change="Selected()" :items="items" v-model="selected" label="Service:"
            :item-value="'prices'">
          </v-select>
    
          <h5>Quantity:</h5>  
          <p class="d-flex justify-center"> {{cart[0].quantity}} units * {{selected}}</p>
          <v-slider       color="#F44764"
        hint="test" label="Service:" step="25" :max="10000" :min="200" v-model="slider" tick-size="10"></v-slider>

          <v-divider></v-divider>

          <v-card-title>Your delivery information:</v-card-title>
          <br>


          <v-text-field  variant="outlined" clearable  type="text" v-model="client.email" label=" Email " :rules="emailRules" required>
          </v-text-field>
          <v-text-field variant="outlined"  type="text"  v-model="client.url" label=" Url "  hint="Enter the url of your profile or your video"
 :rules="urlRules" required>
          </v-text-field>
        </v-card-text>

        <v-sheet class="d-flex justify-center align-center" >
        <h1>{{cart[0].totalPrice}}  $</h1> 
        </v-sheet>
      <br>
        <v-card-actions class="d-flex justify-center">
          <v-btn  variant="outlined"  :disabled="!valid" to="/checkout"  @click="AddtoCheckout">
            <h2>Order now</h2> 
          </v-btn>
        </v-card-actions>
      <br>

      </v-form>
          </v-card>
        </v-layout>

        
      </v-row>

</template>

<script>
import store from '../../../store'
export default {

  name:"ServicePage",
    props: ['foo'],
  data() {
    return {
      valid:true,
      selected: '0.05$ per unit',
      slider: 200,
      loading: false,
      tab: null,
      items: [
        { title: "Tiktok Viewers", prices: "0.05$ per unit" },
        { title: "Tiktok Likes", prices: "0.10$ per unit" },
        { title: "Tiktok Followers", prices: "0.20$ per unit" },
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
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      urlRules: [
        v => !!v || 'Url is required',
        v => (v && v.length >= 10) || 'Url must be at least 13 characters',
      ],
    };
  },

  methods: {
 

    AddtoCheckout(){
      this.$refs.form.validate()

      store.dispatch('AddtoCheckout', this.cart)
      store.dispatch('AddtoClient', this.client)

    },

    Selected() {
      if (this.selected === "0.05$ per unit") {
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

      if (this.selected === "0.10$ per unit") {
        this.priceID = "price_1LpyZ3Kp9Uk9dS5lkn3W56km";
        const name = this.items[1].title
        const slider = this.slider;
        const totalPrice = this.slider * 0.01;
        // this.priceID = 'price_1LpwpdKp9Uk9dS5lvnGNrLJy';

        this.cart[0].quantity = slider;
        this.cart[0].totalPrice = totalPrice.toFixed(2);
        this.cart[0].price = this.priceID;
        this.cart[0].name = name;

      }
      if (this.selected === "0.20$ per unit") {
        this.priceID = "price_1LlEvuKp9Uk9dS5lDOzF52Gr";
        const name = this.items[2].title
        const slider = this.slider;
        const totalPrice = this.slider * 0.02;
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

<style lang="css">

@media screen and (width > 900px) {
  .respLayout {

    min-width:100vh;
  }
  }


  

</style>