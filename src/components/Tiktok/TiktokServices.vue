<template>

    <v-row class="d-flex justify-center mb-4">
  

  <v-card 
    min-width="300"
    v-for="item in items" :key="item"
        class="ma-4 pa-4"
  >
    <v-img
      :src="item.image"
      height="200px"
      cover
    ></v-img>

    <v-card-title >
    {{item.title}}
    </v-card-title>

    <v-card-subtitle>
      {{item.price}}
</v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="#F44764"
        to="/services/tiktok"
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
{{item.description}}
</v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </v-row>


</template>

<script>
import TiktokAddServices from '../Tiktok/TiktokAddServices.vue'

export default {
  components:{
    'add-service' : TiktokAddServices,
  },
       data: () => ({
      show: false,
       dialog: false,
    items: [
      { title: 'Tiktok views', description:'get tiktok views', price:'+2$', image:'https://cdn.shopify.com/s/files/1/0620/1966/6165/products/TikTokViews.png?v=1642523252' },
      { title: 'Tiktok likes', description:'get tiktok likes', price:'+5$' ,image:'https://cdn.shopify.com/s/files/1/0620/1966/6165/products/TikTokViews.png?v=1642523252' },
      { title: 'Tiktok followers', description:'get tiktok followers', price:'+8$' ,image:'https://cdn.shopify.com/s/files/1/0620/1966/6165/products/TikTokViews.png?v=1642523252' },


    ]
    }),


}
</script>