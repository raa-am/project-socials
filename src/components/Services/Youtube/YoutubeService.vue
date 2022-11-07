<template>
    <!-- <v-img
            height="200"
            width="600"
            src="https://upload.wikimedia.org/wikipedia/fr/thumb/7/7f/Youtube_Logo.svg/2560px-Youtube_Logo.svg.png"
          >
          </v-img> -->
    <v-row align-center>
  <v-col  sm="12" md="8" lg="8" xl="10" >

        <v-card  id="borderDemo" >
          <v-carousel hide-delimiters >
            <v-carousel-item 
            
              v-for="(item, index) in images"
              :key="index"
              :src="item.src"
              cover
          
            >  </v-carousel-item>
          </v-carousel>
  
          <v-card-title class="d-flex justify-center align-center mb-2" 
                >Youtube Service</v-card-title
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
  
          
        </v-col>
        <v-col sm="12" md="4" lg="4" xl="2">

            <v-card  rounded  id="borderDemo" outlined  >
              <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
  
          <v-card-text>
            <br>
  
            <v-select variant="outlined"
              :on-change="Selected()" :items="itemsService" v-model="selectedService" label="SERVICES:"
              :item-value="'title'">
            </v-select>

<!--             <v-select variant="outlined"
             :items="itemsPackage" v-model="selectedPackage" label="Quantity:"
              :item-value="'quantity'">
            </v-select>
       -->
           
            <v-chip
            class="d-flex justify-center"
      color="#FFA500"
      label
      text-color="white"
    >
      <v-icon start icon="mdi-account-group"></v-icon>
      <h2 class="d-flex justify-center"> {{units}} units</h2>    </v-chip>
            <v-slider       
            color="#FFA500"
            label="Service:"
            :max="7"
            step="1"
            show-ticks="always"
            tick-size="4"
            v-model="slider" 
            ></v-slider>
  
            <v-divider></v-divider>
  
            <br>
  
  
            <v-text-field prepend-icon="mdi-at" variant="outlined" type="text" v-model="client.email" label=" EMAIL " :rules="emailRules" required>
            </v-text-field>
            <v-text-field prepend-icon="mdi-link-variant" variant="outlined"  type="text"  v-model="client.url" label=" URL"  hint="Enter the url of your profile/post"
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
  
  </v-col>
          
        </v-row>
  
  </template>
  
  <script>
  import store from '../../../store'
  export default {
  
    name:"ServicePage",
    data() {
      return {
        valid:true,
        selectedService: 'Youtube Viewers',
        selectedPackage:'250',
        slider: 0,
        units:0,
        loading: false,
        tab: null,
        itemsService: [
          { title: "Youtube Viewers"},
          { title: "Youtube Likes"},
          { title: "Youtube Followers"},
        ],
        itemsPackage: [
          { title:'250', quantity: "250"},
          { title:'500' , quantity: "500"},
          { title:'1000' , quantity: "1000"},
          { title:'2500' , quantity: "2500"},
          { title:'5000' , quantity: "5000"},
          { title:'10000' , quantity: "10000"},
          { title:'25000' , quantity: "25000"},

        ],
        publishableKey:
          "pk_test_51LjZHQKp9Uk9dS5lUK6gZ29C1v169gcxs4ocD7mhO3bzTUpoAdA9R7Gv4KlIkfQn2QTRCbmwQL4J4O4wjSZZH3OM00KB3Uq5So",
   
        cart: [{ quantity: "", price: "" , totalPrice: "", name:"" }],
        client : {email:"", url:""},
        images: [
          {
            src: "https://www.meilleure-innovation.com/wp-content/uploads/2021/07/logo-youtube-une-788x444.png",
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
        if (this.selectedService === "Youtube Viewers" && this.slider === 0) {
          this.priceID = "price_1LynSZKp9Uk9dS5lO2j8LScl";
          const name = this.itemsService[0].title
     /*      const slider = this.slider; */
       /*    const totalPrice = this.slider * 0.01; */

          const totalPrice = 2
          const units = 250

          this.units = units
        /*   this.cart[0].quantity = slider; */
          this.cart[0].totalPrice = totalPrice.toFixed(2);
          this.cart[0].name = name;
          this.cart[0].price = this.priceID;
        }
  
        if (this.selectedService === "Youtube Viewers" && this.slider === 1) {
          this.priceID = "price_1LynDQKp9Uk9dS5l7NKnc3cQ";
          const name = this.itemsService[1].title
        /*   const slider = this.slider; */
       /*    const totalPrice = this.slider * 0.01; */
            const totalPrice = 3.50
            const units = 500
            this.units = units
        /*   this.cart[0].quantity = slider; */
          this.cart[0].totalPrice = totalPrice.toFixed(2);
          this.cart[0].price = this.priceID;
          this.cart[0].name = name;
  
        }
        if (this.selectedService === "Youtube Viewers" && this.slider === 2) {
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
        if (this.selectedService === "Youtube Viewers" && this.slider === 3) {
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
        if (this.selectedService === "Youtube Viewers" && this.slider === 4) {
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
        if (this.selectedService === "Youtube Viewers" && this.slider === 5) {
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
        if (this.selectedService === "Youtube Viewers" && this.slider === 6) {
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
        if (this.selectedService === "Youtube Viewers" && this.slider === 7) {
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

        if (this.selectedService === "Youtube Likes" && this.slider === 0) {
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
        if (this.selectedService === "Youtube Likes" && this.slider === 1) {
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
        if (this.selectedService === "Youtube Likes" && this.slider === 2) {
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
        if (this.selectedService === "Youtube Likes" && this.slider === 3) {
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
         if (this.selectedService === "Youtube Likes" && this.slider === 4) {
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
         if (this.selectedService === "Youtube Likes" && this.slider === 5) {
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
        
        if (this.selectedService === "Youtube Likes" && this.slider === 6) {
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
        if (this.selectedService === "Youtube Likes" && this.slider === 7) {
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

        if (this.selectedService === "Youtube Followers" && this.slider === 0) {
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

        if (this.selectedService === "Youtube Followers" && this.slider === 1) {
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
        if (this.selectedService === "Youtube Followers" && this.slider === 2) {
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
        if (this.selectedService === "Youtube Followers" && this.slider === 3) {
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
        if (this.selectedService === "Youtube Followers" && this.slider === 4) {
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
        if (this.selectedService === "Youtube Followers" && this.slider === 5) {
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
        if (this.selectedService === "Youtube Followers" && this.slider === 6) {
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
        if (this.selectedService === "Youtube Followers" && this.slider === 7) {
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
  
  @media screen and (width > 900px) {
    .respLayout {

      min-width:100vh;
    }
    }
  
  
    
  
  </style>