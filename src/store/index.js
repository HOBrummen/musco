import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import shared from './shared'
import notices from './notices'

// TODO: Add below line in docs about istanbul
/* istanbul ignore next */
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    user,
    shared,
    notices
  }
})
