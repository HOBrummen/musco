import Vue from "vue"
import Chroma from "chroma-js"

Vue.use({
  install(vue) {
    vue.Chroma = Chroma
    vue.prototype.$chroma = Chroma
  },
})

export default Chroma
