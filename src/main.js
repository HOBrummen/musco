import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import chroma from './plugins/chroma'
import sentry from './plugins/sentry'
import firebase from './plugins/firebase'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faLockOpen, faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(faLockOpen, faEnvelope, faSpinner)

const AlertCmp = () => import('./components/shared/Alert.vue')

Vue.config.productionTip = false

Vue.component('fa-icon', FontAwesomeIcon)
Vue.component('app-alert', AlertCmp)

new Vue({
  router,
  store,
  vuetify,
  chroma,
  sentry,
  firebase,
  render: (h) => h(App)
}).$mount('#app')
