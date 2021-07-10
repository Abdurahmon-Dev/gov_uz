import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VModal from 'vue-js-modal'
import 'vue-js-modal/dist/styles.css'

import router from "./router.js";

// // Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VModal)


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
