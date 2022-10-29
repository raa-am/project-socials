<template>
  <v-parallax 
    src=""
    >
  <v-app>
    <v-app-bar v-if="hide==false">
      <TopNav   />
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main style="min-height:100%" class="d-flex justify-center align-center" >
      <!-- Provides the application the proper gutter -->
      <v-container fluid >
        <!-- If using vue-router -->

        <router-view  v-cloak>

        </router-view> 
       

      </v-container>

      
    </v-main>
    <v-footer>

      <FooterNav />    

    </v-footer>
  </v-app>
</v-parallax>
</template>
<script>

import TopNav from "./components/MainLayout/Main/TopNav.vue";
import FooterNav from "./components/MainLayout/Main/FooterNav.vue"
import { watch } from 'vue';
import { useRoute } from 'vue-router';

import store from "./store";
export default {
  components: {
    TopNav,
    FooterNav,
  },
  name: "App",
    data: () => ({
      hide: false,
    }),
    props:['Component'],
 mounted() {
  const route = useRoute();


  const id = store.state.orderId
  route.params.id = id


    
    console.debug(`current route name on component setup init: ${route.name}`);

    // You could use computed property which re-evaluates on route name updates
    // const routeName = computed(() => route.name);

    // You can watch the property for triggering some other action on change
    watch(() => route.name, () => {
      console.debug(`MyCoolComponent - watch route.name changed to ${route.name}`);
    if(route.name == "checkout" ){
        this.hide = true
        console.log(this.hide)
     
    } else{
          this.hide = false
          console.log(this.hide)
        }

      // Do something here...

    // Optionally you can set immediate: true config for the watcher to run on init
    //}, { immediate: true });
    });
    
    return { route };


 

  },




  
};
</script>

<style lang="css">

.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;

}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
[v-cloak] > * { display:none }
[v-cloak]::before { content: "loading…" }

</style>
