<template>
  <!-- <v-img
            height="200"
            width="600"
            src="https://upload.wikimedia.org/wikipedia/fr/thumb/7/7f/Instagram_Logo.svg/2560px-Instagram_Logo.svg.png"
          >
          </v-img> -->
  <v-row justify="center">



    <v-col sm="12" md="8" lg="9" xl="8" >

      <v-card id="borderDemo" min-height="100vh">
        <v-card-title class="d-flex justify-center align-center mb-2"><h2>Instagram Service</h2></v-card-title>
        <v-divider></v-divider>
          <v-row>
            <v-col v-for="image in images" class="d-flex child-flex" cols="4">
              <v-img :src="image.src" :lazy-src="image.src" aspect-ratio="1" cover class="bg-grey-lighten-2">
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" justify="center">
                    <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-col>
          </v-row>
          <v-divider></v-divider>


        <v-tabs class="d-flex justify-center" v-model="tab">
          <v-tab value="one"> Description </v-tab>
          <v-tab value="two">Additional Information</v-tab>
          <v-tab value="three">Account requirements</v-tab>
        </v-tabs>

        <v-card-text class="d-flex align-center ">
          <v-window class="d-flex justify-center align-center " v-model="tab">
            <v-window-item value="one">
              <p class="text--primary">
                Social media is giving more exposure to individuals. It has become a very popular platform to get success in your desired field. But due to competition, it had become harder to get anywhere without using external support. Instagram viewsYes if you have talent you will eventually get success. But do you have one or two years before you start making something out of it? How will you reach your targeted audience if they do not even know you exist? Individuals who already have settled on this platform and have a good audience do not let newbies get through them in their category. It becomes risky for them. The best way to get ahead in the competition is to be one step ahead of everyone. Use our real Instagram views packages to get a better Instagram rank. These packages will give you nice views that will definitely help you to get settled in the field. Along with this, it will be helpful to attract a new audience to your channel. If there are already so many views then people will put faith in you to watch your video which will lead them to follow your channel. Give your 100% to your work and we will help you get viral!
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
              <p class="text-left">

                The processing of your order will start within 1 minute to 12
                hours. You will receive a notification about this. Working of
                an order can take from 1 minute to 14 days, sometimes more,
                depending on the amount of the order and workload. 
              </p>
              <p class="text-left">
                Likes \
                Subscriptions \ Views, etc. will go at different speeds, you
                can see the exact speed in the "Additional Information"
                section The amount of services you have paid will be provided
                to you in any case, in full and with an additional bonus of
                1-25%. At the end of the subscription, you can ask for a
                screenshot of the work done.
              </p>
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
    </v-col>




    <v-col sm="12" md="4" lg="3" xl="2" justify="end">

      <v-card rounded id="borderDemo" class="sticky" outlined>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-card-title class="d-flex justify-center align-center">Choose your package:</v-card-title>

          <v-card-text>
            
            <br>

            <v-select variant="outlined" :on-change="Selected()" :items="itemsService" v-model="selectedService"
              label="SERVICES:" :item-value="'title'">
            </v-select>

            <!--             <v-select variant="outlined"
             :items="itemsPackage" v-model="selectedPackage" label="Quantity:"
              :item-value="'quantity'">
            </v-select>
       -->

            <v-chip class="d-flex justify-center" color="#FFA500" label text-color="white">
              <v-icon start icon="mdi-account-group"></v-icon>
              <h2 class="d-flex justify-center"> {{ units }} units</h2>
            </v-chip>
            <v-slider color="#FFA500" label="Service:" :max="7" step="1" show-ticks="always" tick-size="4"
              v-model="slider"></v-slider>

            <v-divider></v-divider>

            <br>


            <v-text-field prepend-icon="mdi-at" variant="outlined" type="text" v-model="client.email" label=" EMAIL "
              :rules="emailRules" required>
            </v-text-field>
            <v-text-field prepend-icon="mdi-link-variant" variant="outlined" type="text" v-model="client.url"
              label=" URL" hint="Enter the url of your profile/post" :rules="urlRules" required>
            </v-text-field>
          </v-card-text>

          <v-sheet class="d-flex justify-center align-center">
            <h1>{{ cart[0].totalPrice }} $</h1>
          </v-sheet>
          <br>
          <v-card-actions class="d-flex justify-center">
            <v-btn variant="outlined" :disabled="!valid" to="/checkout" @click="AddtoCheckout">
              <h2>Order now</h2>
            </v-btn>
          </v-card-actions>
          <br>

        </v-form>
      </v-card>

    </v-col>

  </v-row>

</template>
  
<script>
import store from '../../../store'
export default {

  name: "ServicePage",
  data() {
    return {
      isSticky: false,
            stickyClass: 'is_sticky',
           scrollPosition:0,
      valid: true,
      selectedService: 'Instagram Viewers',
      selectedPackage: '250',
      slider: 0,
      units: 0,
      loading: false,
      tab: null,
      itemsService: [
        { title: "Instagram Viewers" },
        { title: "Instagram Likes" },
        { title: "Instagram Followers" },
      ],
      itemsPackage: [
        { title: '250', quantity: "250" },
        { title: '500', quantity: "500" },
        { title: '1000', quantity: "1000" },
        { title: '2500', quantity: "2500" },
        { title: '5000', quantity: "5000" },
        { title: '10000', quantity: "10000" },
        { title: '25000', quantity: "25000" },

      ],
      publishableKey:
        "pk_test_51LjZHQKp9Uk9dS5lUK6gZ29C1v169gcxs4ocD7mhO3bzTUpoAdA9R7Gv4KlIkfQn2QTRCbmwQL4J4O4wjSZZH3OM00KB3Uq5So",

      cart: [{ quantity: "", price: "", totalPrice: "", name: "", units: "" }],
      client: { email: "", url: "" },
      images: [
        {
          src: "https://firebasestorage.googleapis.com/v0/b/socialmanager-7c8fd.appspot.com/o/Instagram%2FCL6djqS15vcCEAE%3D.webp?alt=media&token=8df2f294-ebc6-496d-849a-7f4f19d3a875",
        },
        {
          src: "https://firebasestorage.googleapis.com/v0/b/socialmanager-7c8fd.appspot.com/o/Instagram%2Finstagram-followers-1200x675.jpg?alt=media&token=aa5c3bbc-f01f-4b7f-a9fd-20424e7f1273",
        },
        {
          src: "https://firebasestorage.googleapis.com/v0/b/socialmanager-7c8fd.appspot.com/o/Instagram%2F1.png?alt=media&token=a70ea75c-8b8e-4ef9-9bad-9df320b679a7",
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
  created () {
            window.addEventListener('scroll', this.handleScroll);
    },

  methods: {
    handleScroll(event){
                this.scrollPosition = window.scrollY
                if(this.scrollPosition>=100){
                    this.isSticky=true
                }else{
                    this.isSticky=false
                }
    },

    AddtoCheckout() {
      this.$refs.form.validate()

      store.dispatch('AddtoCheckout', this.cart)
      store.dispatch('AddtoClient', this.client)

    },

    Selected() {
      if (this.selectedService === "Instagram Viewers" && this.slider === 0) {
        this.priceID = "price_1LynSZKp9Uk9dS5lO2j8LScl";
        const name = this.itemsService[0].title
        /*      const slider = this.slider; */
        /*    const totalPrice = this.slider * 0.01; */

        const totalPrice = 2
        const units = 250

        this.units = units
        /*   this.cart[0].quantity = slider; */
        this.cart[0].units = units;
        this.cart[0].totalPrice = totalPrice.toFixed(2);
        this.cart[0].name = name;
        this.cart[0].price = this.priceID;
      }

      if (this.selectedService === "Instagram Viewers" && this.slider === 1) {
        this.priceID = "price_1LynDQKp9Uk9dS5l7NKnc3cQ";
        const name = this.itemsService[1].title
        /*   const slider = this.slider; */
        /*    const totalPrice = this.slider * 0.01; */
        const totalPrice = 3.50
        const units = 500
        this.units = units
        /*   this.cart[0].quantity = slider; */
        this.cart[0].units = units;
        this.cart[0].totalPrice = totalPrice.toFixed(2);
        this.cart[0].price = this.priceID;
        this.cart[0].name = name;

      }
      if (this.selectedService === "Instagram Viewers" && this.slider === 2) {
        this.priceID = "price_1LynDQKp9Uk9dS5l7NKnc3cQ";
        const name = this.itemsService[1].title
        /*   const slider = this.slider; */
        /*    const totalPrice = this.slider * 0.01; */
        const totalPrice = 5.50
        const units = 1000
        this.units = units
        /*   this.cart[0].quantity = slider; */
        this.cart[0].totalPrice = totalPrice.toFixed(2);
        this.cart[0].price = this.priceID;
        this.cart[0].name = name;

      }
      if (this.selectedService === "Instagram Viewers" && this.slider === 3) {
        this.priceID = "price_1LynDQKp9Uk9dS5l7NKnc3cQ";
        const name = this.itemsService[1].title
        /*   const slider = this.slider; */
        /*    const totalPrice = this.slider * 0.01; */
        const totalPrice = 7.50
        const units = 2500
        this.units = units
        /*   this.cart[0].quantity = slider; */
        this.cart[0].totalPrice = totalPrice.toFixed(2);
        this.cart[0].price = this.priceID;
        this.cart[0].name = name;

      }
      if (this.selectedService === "Instagram Viewers" && this.slider === 4) {
        this.priceID = "price_1LynDQKp9Uk9dS5l7NKnc3cQ";
        const name = this.itemsService[1].title
        /*   const slider = this.slider; */
        /*    const totalPrice = this.slider * 0.01; */
        const totalPrice = 10.00
        const units = 5000
        this.units = units
        /*   this.cart[0].quantity = slider; */
        this.cart[0].totalPrice = totalPrice.toFixed(2);
        this.cart[0].price = this.priceID;
        this.cart[0].name = name;

      }
      if (this.selectedService === "Instagram Viewers" && this.slider === 5) {
        this.priceID = "price_1LynDQKp9Uk9dS5l7NKnc3cQ";
        const name = this.itemsService[1].title
        /*   const slider = this.slider; */
        /*    const totalPrice = this.slider * 0.01; */
        const totalPrice = 20.00
        const units = 10000
        this.units = units
        /*   this.cart[0].quantity = slider; */
        this.cart[0].totalPrice = totalPrice.toFixed(2);
        this.cart[0].price = this.priceID;
        this.cart[0].name = name;

      }
      if (this.selectedService === "Instagram Viewers" && this.slider === 6) {
        this.priceID = "price_1LynDQKp9Uk9dS5l7NKnc3cQ";
        const name = this.itemsService[1].title
        /*   const slider = this.slider; */
        /*    const totalPrice = this.slider * 0.01; */
        const totalPrice = 30.00
        const units = 25000
        this.units = units
        /*   this.cart[0].quantity = slider; */
        this.cart[0].totalPrice = totalPrice.toFixed(2);
        this.cart[0].price = this.priceID;
        this.cart[0].name = name;

      }
      if (this.selectedService === "Instagram Viewers" && this.slider === 7) {
        this.priceID = "price_1LynDQKp9Uk9dS5l7NKnc3cQ";
        const name = this.itemsService[1].title
        /*   const slider = this.slider; */
        /*    const totalPrice = this.slider * 0.01; */
        const totalPrice = 30.00
        const units = 50000
        this.units = units
        /*   this.cart[0].quantity = slider; */
        this.cart[0].totalPrice = totalPrice.toFixed(2);
        this.cart[0].price = this.priceID;
        this.cart[0].name = name;

      }

      if (this.selectedService === "Instagram Likes" && this.slider === 0) {
        this.priceID = "price_1LynDQKp9Uk9dS5l7NKnc3cQ";
        const name = this.itemsService[1].title
        /*   const slider = this.slider; */
        /*    const totalPrice = this.slider * 0.01; */
        const totalPrice = 30.00
        const units = 250
        this.units = units

        /*   this.cart[0].quantity = slider; */
        this.cart[0].totalPrice = totalPrice.toFixed(2);
        this.cart[0].price = this.priceID;
        this.cart[0].name = name;

      }
      if (this.selectedService === "Instagram Likes" && this.slider === 1) {
        this.priceID = "price_1LynDQKp9Uk9dS5l7NKnc3cQ";
        const name = this.itemsService[1].title
        /*   const slider = this.slider; */
        /*    const totalPrice = this.slider * 0.01; */
        const totalPrice = 30.00
        const units = 500
        this.units = units
        /*   this.cart[0].quantity = slider; */
        this.cart[0].totalPrice = totalPrice.toFixed(2);
        this.cart[0].price = this.priceID;
        this.cart[0].name = name;

      }
      if (this.selectedService === "Instagram Likes" && this.slider === 2) {
        this.priceID = "price_1LynDQKp9Uk9dS5l7NKnc3cQ";
        const name = this.itemsService[1].title
        /*   const slider = this.slider; */
        /*    const totalPrice = this.slider * 0.01; */
        const totalPrice = 30.00
        const units = 1000
        this.units = units
        /*   this.cart[0].quantity = slider; */
        this.cart[0].totalPrice = totalPrice.toFixed(2);
        this.cart[0].price = this.priceID;
        this.cart[0].name = name;

      }
      if (this.selectedService === "Instagram Likes" && this.slider === 3) {
        this.priceID = "price_1LynDQKp9Uk9dS5l7NKnc3cQ";
        const name = this.itemsService[1].title
        /*   const slider = this.slider; */
        /*    const totalPrice = this.slider * 0.01; */
        const totalPrice = 30.00
        const units = 2500
        this.units = units
        /*   this.cart[0].quantity = slider; */
        this.cart[0].totalPrice = totalPrice.toFixed(2);
        this.cart[0].price = this.priceID;
        this.cart[0].name = name;

      }
      if (this.selectedService === "Instagram Likes" && this.slider === 4) {
        this.priceID = "price_1LynDQKp9Uk9dS5l7NKnc3cQ";
        const name = this.itemsService[1].title
        /*   const slider = this.slider; */
        /*    const totalPrice = this.slider * 0.01; */
        const totalPrice = 30.00
        const units = 5000
        this.units = units
        /*   this.cart[0].quantity = slider; */
        this.cart[0].totalPrice = totalPrice.toFixed(2);
        this.cart[0].price = this.priceID;
        this.cart[0].name = name;

      }
      if (this.selectedService === "Instagram Likes" && this.slider === 5) {
        this.priceID = "price_1LynDQKp9Uk9dS5l7NKnc3cQ";
        const name = this.itemsService[1].title
        /*   const slider = this.slider; */
        /*    const totalPrice = this.slider * 0.01; */
        const totalPrice = 30.00
        const units = 10000
        this.units = units
        /*   this.cart[0].quantity = slider; */
        this.cart[0].totalPrice = totalPrice.toFixed(2);
        this.cart[0].price = this.priceID;
        this.cart[0].name = name;

      }

      if (this.selectedService === "Instagram Likes" && this.slider === 6) {
        this.priceID = "price_1LynDQKp9Uk9dS5l7NKnc3cQ";
        const name = this.itemsService[1].title
        /*   const slider = this.slider; */
        /*    const totalPrice = this.slider * 0.01; */
        const totalPrice = 30.00
        const units = 25000
        this.units = units
        /*   this.cart[0].units = slider; */
        this.cart[0].totalPrice = totalPrice.toFixed(2);
        this.cart[0].price = this.priceID;
        this.cart[0].name = name;

      }
      if (this.selectedService === "Instagram Likes" && this.slider === 7) {
        this.priceID = "price_1LynDQKp9Uk9dS5l7NKnc3cQ";
        const name = this.itemsService[1].title
        /*   const slider = this.slider; */
        /*    const totalPrice = this.slider * 0.01; */
        const totalPrice = 30.00
        const units = 50000
        this.units = units
        /*   this.cart[0].units = slider; */
        this.cart[0].totalPrice = totalPrice.toFixed(2);
        this.cart[0].price = this.priceID;
        this.cart[0].name = name;

      }

      if (this.selectedService === "Instagram Followers" && this.slider === 0) {
        this.priceID = "price_1LynDQKp9Uk9dS5l7NKnc3cQ";
        const name = this.itemsService[1].title
        /*   const slider = this.slider; */
        /*    const totalPrice = this.slider * 0.01; */
        const totalPrice = 10.00
        const units = 250
        this.units = units
        /*   this.cart[0].units = slider; */
        this.cart[0].totalPrice = totalPrice.toFixed(2);
        this.cart[0].price = this.priceID;
        this.cart[0].name = name;

      }

      if (this.selectedService === "Instagram Followers" && this.slider === 1) {
        this.priceID = "price_1LynDQKp9Uk9dS5l7NKnc3cQ";
        const name = this.itemsService[1].title
        /*   const slider = this.slider; */
        /*    const totalPrice = this.slider * 0.01; */
        const totalPrice = 10.00
        const units = 500
        this.units = units
        /*   this.cart[0].quantity = slider; */
        this.cart[0].totalPrice = totalPrice.toFixed(2);
        this.cart[0].price = this.priceID;
        this.cart[0].name = name;

      }
      if (this.selectedService === "Instagram Followers" && this.slider === 2) {
        this.priceID = "price_1LynDQKp9Uk9dS5l7NKnc3cQ";
        const name = this.itemsService[1].title
        /*   const slider = this.slider; */
        /*    const totalPrice = this.slider * 0.01; */
        const totalPrice = 10.00
        const units = 1000
        this.units = units
        /*   this.cart[0].units = slider; */
        this.cart[0].totalPrice = totalPrice.toFixed(2);
        this.cart[0].price = this.priceID;
        this.cart[0].name = name;

      }
      if (this.selectedService === "Instagram Followers" && this.slider === 3) {
        this.priceID = "price_1LynDQKp9Uk9dS5l7NKnc3cQ";
        const name = this.itemsService[1].title
        /*   const slider = this.slider; */
        /*    const totalPrice = this.slider * 0.01; */
        const totalPrice = 10.00
        const units = 2500
        this.units = units
        /*   this.cart[0].units = slider; */
        this.cart[0].totalPrice = totalPrice.toFixed(2);
        this.cart[0].price = this.priceID;
        this.cart[0].name = name;

      }
      if (this.selectedService === "Instagram Followers" && this.slider === 4) {
        this.priceID = "price_1LynDQKp9Uk9dS5l7NKnc3cQ";
        const name = this.itemsService[1].title
        /*   const slider = this.slider; */
        /*    const totalPrice = this.slider * 0.01; */
        const totalPrice = 10.00
        const units = 5000
        this.units = units
        /*   this.cart[0].units = slider; */
        this.cart[0].totalPrice = totalPrice.toFixed(2);
        this.cart[0].price = this.priceID;
        this.cart[0].name = name;

      }
      if (this.selectedService === "Instagram Followers" && this.slider === 5) {
        this.priceID = "price_1LynDQKp9Uk9dS5l7NKnc3cQ";
        const name = this.itemsService[1].title
        /*   const slider = this.slider; */
        /*    const totalPrice = this.slider * 0.01; */
        const totalPrice = 10.00
        const units = 10000
        this.units = units
        /*   this.cart[0].units = slider; */
        this.cart[0].totalPrice = totalPrice.toFixed(2);
        this.cart[0].price = this.priceID;
        this.cart[0].name = name;

      }
      if (this.selectedService === "Instagram Followers" && this.slider === 6) {
        this.priceID = "price_1LynDQKp9Uk9dS5l7NKnc3cQ";
        const name = this.itemsService[1].title
        /*   const slider = this.slider; */
        /*    const totalPrice = this.slider * 0.01; */
        const totalPrice = 10.00
        const units = 25000
        this.units = units
        /*   this.cart[0].units = slider; */
        this.cart[0].totalPrice = totalPrice.toFixed(2);
        this.cart[0].price = this.priceID;
        this.cart[0].name = name;

      }
      if (this.selectedService === "Instagram Followers" && this.slider === 7) {
        this.priceID = "price_1LynDQKp9Uk9dS5l7NKnc3cQ";
        const name = this.itemsService[1].title
        /*   const slider = this.slider; */
        /*    const totalPrice = this.slider * 0.01; */
        const totalPrice = 10.00
        const units = 50000
        this.units = units
        /*   this.cart[0].units = slider; */
        this.cart[0].totalPrice = totalPrice.toFixed(2);
        this.cart[0].price = this.priceID;
        this.cart[0].name = name;

      }

    },


  },

};
</script>
  
<style lang="css">
@media screen and (width > 960px) {
  .sticky {
  position: fixed;
  width: 35vh;
  }
}



</style>