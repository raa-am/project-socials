// Styles
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

// Vuetify
import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components'
import { VFooter } from 'vuetify/components'
import { VLayout } from 'vuetify/components'
import {VTextField} from 'vuetify/components'



const vuetify =  createVuetify({
  aliases: {
    VBtnAlt: VBtn,
    VFooter:VFooter,
    VLayout:VLayout,
    VTextField:VTextField,
  },
  // https://next.vuetifyjs.com/features/global-configuration/
  defaults: {
    global: {
      rounded: 'sm',
    },
    VTextField :{
      color: 'primary',
      borderColor: 'primary',
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
      color: 'primary',
    },
    VLayout: {
      color: 'primary',
    },
    

  },
  // https://next.vuetifyjs.com/features/theme/
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          primary: '#F44764',
          secondary:"#F44764"
        }
      }
    }
  },
})
  export default vuetify