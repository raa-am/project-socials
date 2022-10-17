import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
import mitt from 'mitt';
const emitter = mitt();
import { loadFonts } from './plugins/webfontloader'

loadFonts()
const app = createApp(App);
app.provide('emitter', emitter);          // ✅ Provide as `emitter`

  createApp(App)
  .use(router)
  .use(vuetify)
  .use(store)
  .use(emitter)
  .mount('#app')

  createApp(App).config.globalProperties.emitter = emitter;

  export default emitter