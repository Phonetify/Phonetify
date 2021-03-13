import Vue from 'vue'
import App from './App.vue'
import router from './router'
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(VueMeta)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
