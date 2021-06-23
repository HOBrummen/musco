import Vue from 'vue'
import * as Sentry from '@sentry/vue'
import { Integrations } from '@sentry/tracing'

Sentry.init({
    Vue,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
    dsn: 'https://07e718e065dd4007b0a165fff2126b3a@o545146.ingest.sentry.io/5823440',
    logErrors: true,
    tracingOptions: {
        trackComponents: true
    }
})

Vue.use({
    install (vue) {
        vue.Sentry = Sentry
        vue.prototype.$sentry = Sentry
    }
})

export default Sentry
