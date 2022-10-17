<template>
      <stripe-checkout
                  ref="checkoutRef"
                  mode="payment"
                  :pk="publishableKey"
                  :line-items="lineItems"
                  :success-url="successURL"
                  :cancel-url="cancelURL"
                  @loading="v => loading = v"
                />
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
<br>
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

            <v-card-text class="">
              <v-select
                :items="items"
                label="Choose service"
                variant="underlined"
                v-model="selected"
                required
              ></v-select>
              <br />
              <v-text-field
                variant="underlined"
                type="email"
                label="Your email*"
                required
              >
              </v-text-field>
                <v-text-field
                variant="underlined"
                type="text"
                label="Your Tiktok username*"
                required
              >
              </v-text-field>
              <br />

              <div class="pricing">
                <div class="pricing-slider center-content">
                  <label class="form-slider">
                    <span>How much do you want ?</span>
                    <input
                      type="range"
                      ref="slider"
                      v-model="priceInputValue"
                      @input="handleSliderValuePosition($event.target)"
                    />
                  </label>
                  <div ref="sliderValue" class="pricing-slider-value">
                    {{ getPricingData(priceInput) }}
                  </div>
                </div>
    
    
                <span class="pricing-item-price-currency">{{
                  getPricingData(this.priceOutput.plan1, 1)
                }}</span>


                    <span class="pricing-item-price-currency">{{
                  getPricingData(this.priceOutput.plan1, 0)
                }}</span>

                <span v-if="TiktokViews" class="pricing-item-price-amount"
                  >{{ getPricingData(this.priceOutput.plan1, 2) }}
                </span>
                <span v-if="TiktokLikes" class="pricing-item-price-amount"
                  >{{ getPricingData(this.priceOutput.plan2, 1) }}
                </span>
                <span v-if="TiktokFollowers" class="pricing-item-price-amount"
                  >{{ getPricingData(this.priceOutput.plan3, 1) }}
                </span>
              </div>
            </v-card-text>
      
            <v-card-actions class="pricing-item-cta d-flex justify-center">
           
    <!-- <button class="pricing-item-cta" @click="submit">Order Now</button> -->
              <!-- <v-btn size="100"> Order </v-btn> -->
              <div class="pricing-item-cta">
                <a @click="submit" class="button">Order Now</a>
              </div>
            </v-card-actions>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';

export default {
  components:{
    'stripe-checkout': StripeCheckout,
  },

  data: () => ({

      publishableKey :"pk_test_51LjZHQKp9Uk9dS5lUK6gZ29C1v169gcxs4ocD7mhO3bzTUpoAdA9R7Gv4KlIkfQn2QTRCbmwQL4J4O4wjSZZH3OM00KB3Uq5So",
      loading: false,
      prices: [],
      lineItems: [
        {
         price:  '',
           // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: 'http://localhost:5173/success',
      cancelURL: 'http://localhost:5173/error',
    tab: null,
    items: ["Tiktok Views", "Tiktok Likes", "Tiktok Followers"],
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
    priceInputValue: "0",
    selected: null,
    priceInput: {
      0: "1,000",
      1: "1,250",
      2: "1,500",
      3: "2,000",
      4: "2,500",
      5: "3,500",
      6: "6,000",
      7: "15,000",
      8: "50,000",
      9: "50,000+",
    },
    priceOutput: {
      plan1: {
        0: ["price_1LjmZgKp9Uk9dS5l9XuFQ03v", "2", "$"],
        1: ["price_1Ljpd0Kp9Uk9dS5lzJ6GYlup", "4", "$"],
        2: ["$", "8"],
        3: ["$", "12"],
        4: ["$", "25"],
        5: ["$", "42"],
        6: ["$", "58"],
        7: ["$", "117"],
        8: ["$", "208"],
        9: ["$", "350"],
      },
      plan2: {
        0: ["$", "8", "/m"],
        1: ["$", "13", "/m"],
        2: ["$", "18", "/m"],
        3: ["$", "22", "/m"],
        4: ["$", "26", "/m"],
        5: ["$", "58", "/m"],
        6: ["$", "117", "/m"],
        7: ["$", "208", "/m"],
        8: ["$", "333", "/m"],
        9: ["", "Contact Us", ""],
      },
      plan3: {
        0: ["$", "13", "/m"],
        1: ["$", "17", "/m"],
        2: ["$", "21", "/m"],
        3: ["$", "30", "/m"],
        4: ["$", "42", "/m"],
        5: ["$", "58", "/m"],
        6: ["$", "117", "/m"],
        7: ["$", "208", "/m"],
        8: ["$", "333", "/m"],
        9: ["", "Contact Us", ""],
      },
    },
  }),
  
  computed: {
   



    TiktokViews() {
      if (this.selected == "Tiktok Views") {
        return this.selected;
      } else {
        return console.log("select");
      }
    },
    TiktokLikes() {
      if (this.selected == "Tiktok Likes") {
        return true;
      } else {
        return console.log("select");
      }
    },
    TiktokFollowers() {
      if (this.selected == "Tiktok Followers") {
        return true;
      } else {
        return console.log("select");
      }
    },
  },
  methods: {
   
    submit () {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
    handleSliderValuePosition(input) {
      const multiplier = input.value / input.max;
      const thumbOffset = this.thumbSize * multiplier;
      const priceInputOffset =
        (this.thumbSize - this.$refs.sliderValue.clientWidth) / 2;
      this.$refs.sliderValue.style.left =
        input.clientWidth * multiplier - thumbOffset + priceInputOffset + "px";
    },
    getPricingData(obj, pos) {
      return pos !== undefined
        ? obj[this.priceInputValue][pos]
        : obj[this.priceInputValue];         
    },
  },
  mounted() {
    // const price

    this.$refs.slider.setAttribute("min", 0);
    this.$refs.slider.setAttribute(
      "max",
      Object.keys(this.priceInput).length - 1
    );
    this.thumbSize = parseInt(
      window
        .getComputedStyle(this.$refs.sliderValue)
        .getPropertyValue("--thumb-size"),
      10
    );
    this.handleSliderValuePosition(this.$refs.slider);
  },

};
</script>

<style>
.background {
  background-image: url("https://assets.stickpng.com/images/5cb78678a7c7755bf004c14c.png");
  background-size: 600px;
}

.button {
  display: flex;
  width: 100%;
  font-size: 14px;
  line-height: 22px;
  font-weight: 700;
  padding: 12px 29px;
  text-decoration: none !important;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #5f48ff;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  border-radius: 2px;
  cursor: pointer;
  justify-content: center;
  text-align: center;
  letter-spacing: inherit;
  white-space: nowrap;
  transition: background 0.15s ease;
}
input[type="range"] {
  -moz-appearance: none;
  -webkit-appearance: none;
  background: #eef1f6;
  border-radius: 3px;
  height: 6px;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
  outline: none;
}
input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  -webkit-appearance: none;
  background-color: #5f48ff;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2212%22%20height%3D%228%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8%20.5v7L12%204zM0%204l4%203.5v-7z%22%20fill%3D%22%23FFFFFF%22%20fill-rule%3D%22nonzero%22%2F%3E%3C%2Fsvg%3E");
  background-position: center;
  background-repeat: no-repeat;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  height: 36px;
  width: 36px;
}
input[type="range"]::-moz-range-thumb {
  background-color: #5f48ff;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2212%22%20height%3D%228%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8%20.5v7L12%204zM0%204l4%203.5v-7z%22%20fill%3D%22%23FFFFFF%22%20fill-rule%3D%22nonzero%22%2F%3E%3C%2Fsvg%3E");
  background-position: center;
  background-repeat: no-repeat;
  border: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  height: 36px;
  width: 36px;
}
input[type="range"]::-ms-thumb {
  background-color: #5f48ff;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2212%22%20height%3D%228%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8%20.5v7L12%204zM0%204l4%203.5v-7z%22%20fill%3D%22%23FFFFFF%22%20fill-rule%3D%22nonzero%22%2F%3E%3C%2Fsvg%3E");
  background-position: center;
  background-repeat: no-repeat;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  height: 36px;
  width: 36px;
}
input[type="range"]::-moz-focus-outer {
  border: 0;
}

.pricing-slider {
  max-width: 280px;
  margin: 0 auto;
}

.form-slider span {
  display: block;
  font-weight: 500;
  text-align: center;
  margin-bottom: 16px;
}

.pricing-slider {
  margin-bottom: 48px;
}

.pricing-slider {
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}
.pricing-slider input {
  width: 100%;
}
.pricing-slider .pricing-slider-value {
  position: absolute;
  font-size: 14px;
  line-height: 22px;
  font-weight: 500;
  color: #909cb5;
  margin-top: 8px;
  --thumb-size: 36px;
}
.pricing-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: -12px;
  margin-left: -12px;
  margin-top: -12px;
}
.pricing-item {
  flex-basis: 280px;
  max-width: 280px;
  box-sizing: content-box;
  padding: 12px;
}
.pricing-item-inner {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 100%;
  padding: 24px;
  /* box-shadow: 0 8px 16px rgba(46, 52, 88, 0.16); */
}
.pricing-item-title {
  font-weight: 500;
}
.pricing-item-price {
  display: inline-flex;
  align-items: baseline;
  font-size: 20px;
}
.pricing-item-price-amount {
  font-size: 36px;
  line-height: 48px;
  font-weight: 500;
  color: #191e2a;
}
.pricing-item-features-list {
  list-style: none;
  padding: 0;
}
.pricing-item-features-list li {
  margin-bottom: 0;
  padding: 14px 0;
  position: relative;
  display: flex;
  align-items: center;
}
.pricing-item-features-list li::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: block;
  height: 1px;
  background: #e9ecf8;
}
.pricing-item-features-list li::after {
  content: "";
  display: block;
  width: 24px;
  height: 24px;
  margin-right: 12px;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%2011h14v2H5z%22%20fill%3D%22%239298B8%22%20fill-rule%3D%22nonzero%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  -webkit-box-ordinal-group: 0;
  order: -1;
}
.pricing-item-features-list li.is-checked::after {
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill-rule%3D%22nonzero%22%20fill%3D%22none%22%3E%3Ccircle%20fill%3D%22%2300C2A9%22%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%2212%22%2F%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M10.5%2012.267l-2.5-1.6-1%201.066L10.5%2016%2017%209.067%2016%208z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}
</style>
