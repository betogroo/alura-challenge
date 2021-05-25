import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import '@/assets/scss/app.scss'
import '@/scss/override.scss'

Vue.use(Vuetify)

const options = {
  theme: {
    themes: {
      light: {
        primary: '#051D3B'
      }
    }
  }
}

export default new Vuetify(options)
