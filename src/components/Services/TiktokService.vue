<template>
  <!-- <v-img
          height="200"
          width="600"
          src="https://upload.wikimedia.org/wikipedia/fr/thumb/7/7f/TikTok_Logo.svg/2560px-TikTok_Logo.svg.png"
        >
        </v-img> -->
  <v-row class="d-flex justify-center ">
    
          <v-card id="borderDemo" rounded  elevation="0" outlined class="respPayOut"  >
            <v-sheet class="d-flex flex-wrap justify-center " ><h1>Plans:</h1> </v-sheet>
        <v-list v-for="plan in plans" >
                      <v-btn min-width="200px" >  {{plan.title}}    
    </v-btn>
        </v-list>


        
          </v-card>

        <v-col class="d-flex justify-center flex-nowrap" >
          <v-layout class="d-flex justify-center flex-wrap" >

     <router-link  v-for="item in items" :to="item.link">
   <div class="parallax-card-wrapper">
 <v-card  rounded class="card" >
   <v-img  class="card-bg"
   :src="item.image"
   height="220px"
   cover
 ></v-img>
 </v-card>
</div>
</router-link>
 
</v-layout>
        </v-col>




        
      </v-row>

</template>

<script>
import store from '../../store'
export default {

  name:"ServicePage",
    props: ['foo'],
  data() {
    return {
      show: false,
    dialog: false,
    items: [
      { title: 'Tiktok', description: 'get tiktok views', link:'/services/tiktok'  , image: 'https://icones.pro/wp-content/uploads/2021/03/logo-icone-tiktok-simbolo.png' },
      { title: 'Instagram', description: 'get tiktok likes',link:'/services/instagram'  , image: 'https://icones.pro/wp-content/uploads/2021/03/logo-icone-tiktok-simbolo.png'},
      { title: 'Twitter', description: 'get tiktok followers', link:'/services/youtube', image: 'https://icones.pro/wp-content/uploads/2021/03/logo-icone-tiktok-simbolo.png' },
      { title: 'Tiktok', description: 'get tiktok views', link:'/services/tiktok'  , image: 'https://icones.pro/wp-content/uploads/2021/03/logo-icone-tiktok-simbolo.png' },
      { title: 'Instagram', description: 'get tiktok likes',link:'/services/instagram'  , image: 'https://icones.pro/wp-content/uploads/2021/03/logo-icone-tiktok-simbolo.png'},
      { title: 'Twitter', description: 'get tiktok followers', link:'/services/youtube', image: 'https://icones.pro/wp-content/uploads/2021/03/logo-icone-tiktok-simbolo.png' },
      { title: 'Instagram', description: 'get tiktok likes',link:'/services/instagram'  , image: 'https://icones.pro/wp-content/uploads/2021/03/logo-icone-tiktok-simbolo.png'},
      { title: 'Twitter', description: 'get tiktok followers', link:'/services/youtube', image: 'https://icones.pro/wp-content/uploads/2021/03/logo-icone-tiktok-simbolo.png' },
      
    ],
      valid:true,
      selected: '0.05$ per unit',
      slider: 200,
      minAmount:200,
      loading: false,
      tab: null,
      plans: [ { title: 'Views'},
      { title: 'Likes', },
      { title: 'Followers', }],
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
      ],
    };
  },
  computed:{
    getPlans(){
      return store.getters.Plans
    }
  },
  methods: {
    getPlan(){
          store.dispatch('getPlans')
        }
  },
  mounted(){

this.getPlan()

const items = store.getters.Plans


console.log(this.plans)

this.plans.push(items)

  }

};
</script>

<style lang="css">

@media screen and (width > 900px) {
  .respLayout {

    min-width:100vh;
  }
  }


  

</style>