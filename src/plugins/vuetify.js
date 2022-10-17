// Styles
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// Vuetify
import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components'
import { VFooter } from 'vuetify/components'


const vuetify =  createVuetify({
  aliases: {
    VBtnAlt: VBtn,
    VFooter:VFooter
  },
  // https://next.vuetifyjs.com/features/global-configuration/
  defaults: {
    global: {
      rounded: 'sm',
    },
    VAppBar: {
      flat: true,
    },
    VBtn: {
      color: 'primary',
      height: 44,
    },
    VBtnAlt: {
      color: 'primary',
      height: 48,
      variant: 'text',
    },
    VSheet: {
      color: '#212121',
    },

  },
  // https://next.vuetifyjs.com/features/theme/
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          primary: '#1697f6',
        }
      }
    }
  },
})
  export default vuetify