import Vue from "vue"
// import * as Sentry from '@sentry/vue'
// import { Integrations } from '@sentry/tracing'
import App from "./App.vue"
import router from "./router"
import store from "./store"
import vuetify from "./plugins/vuetify"
import chroma from "./plugins/chroma"

import "./registerServiceWorker"
import "roboto-fontface/css/roboto/roboto-fontface.css"
import "@fortawesome/fontawesome-free/css/all.css"
import "@babel/polyfill"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  chroma,
  render: (h) => h(App),
}).$mount("#app")

// Sentry.init({
//   Vue,
//   integrations: [new Integrations.BrowserTracing()],
//   tracesSampleRate: 1.0,
//   dsn: 'https://4f709c3461d340dcb812a7fdfca15831@o54f5146.ingest.sentry.io/5666600',
//   tracingOptions: {
//     trackComponents: true
//   }
// })
