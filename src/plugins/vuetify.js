import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import nl from 'vuetify/lib/locale/nl'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#3855A5',
        secondary: '#61AFCA',
        accent: '#995867',
        error: '#F44336',
        info: '#2196F3',
        success: '#46946A',
        warning: '#C38432',
        background: '#FAF9F9',
        text: '#181823'
      },
      dark: {
        primary: '#61AFCA',
        secondary: '#3855A5',
        accent: '#995867',
        error: '#F44336',
        info: '#2196F3',
        success: '#46946A',
        warning: '#C38432',
        background: '#181823',
        text: '#FAF9F9'
      }
    }
  },
  lang: {
    locales: { nl },
    current: 'nl'
  },
  icons: {
    iconfont: 'fa'
  }
})
