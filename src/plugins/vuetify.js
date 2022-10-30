// Styles
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'


// Vuetify
import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components'
import { VFooter } from 'vuetify/components'
import { VLayout } from 'vuetify/components'
import {VTextField} from 'vuetify/components'
import {VSelect} from 'vuetify/components'
import {VCard} from 'vuetify/components'
import {VRow} from 'vuetify/components'






const vuetify =  createVuetify({
  aliases: {
    VBtnAlt: VBtn,
    VFooter:VFooter,
    VLayout:VLayout,
    VRow:VRow,
    VSelect:VSelect,
    VCard:VCard,
    VTextField:VTextField,
    
  },
  // https://next.vuetifyjs.com/features/global-configuration/
    icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
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
      borderColor: 'primary',

    },
    VSelect:{
      borderColor: 'primary',
      color: 'primary',

    },
    VCard:{
      border: '1px solid white',
      
    },
    

  },
  // https://next.vuetifyjs.com/features/theme/
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          primary: '#FFA500',
          secondary:"#FFD700"
        },

      }
    }
  },
})
  export default vuetify