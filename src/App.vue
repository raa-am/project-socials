<template>

  <v-app>
    <v-app-bar v-if="hide==false">
      <TopNav />
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main style="min-height:100vh">
      <!-- Provides the application the proper gutter -->
      <v-container fluid >
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

<FooterNav />    
  </v-app>
</template>
<script>

import TopNav from "./components/TopNav.vue";
import FooterNav from "./components/FooterNav.vue"
import { watch } from 'vue';
import { useRoute } from 'vue-router';
export default {
  components: {
    TopNav,
    FooterNav,
  },
  name: "App",
    data: () => ({
      hide: false,
    }),
 mounted() {
    const route = useRoute();
    
    console.debug(`current route name on component setup init: ${route.name}`);

    // You could use computed property which re-evaluates on route name updates
    // const routeName = computed(() => route.name);

    // You can watch the property for triggering some other action on change
    watch(() => route.name, () => {
      console.debug(`MyCoolComponent - watch route.name changed to ${route.name}`);
    if(route.name == "checkout"){
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
