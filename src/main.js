import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

import VueCodeHighlight from 'vue-code-highlight'
Vue.use(VueCodeHighlight)

import VueHtml2Canvas from 'vue-html2canvas'
Vue.use(VueHtml2Canvas)

const requireComponent = require.context(
  './components/base',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})

Vue.config.productionTip = false

new Vue({
  name: 'Main',
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
