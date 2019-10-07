import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import 'bulma'
import Notifications from 'vue-notification'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus)
library.add(faTimes)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Notifications)

Vue.config.productionTip = false

import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    tablet: 768,
    desktop: Infinity
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
