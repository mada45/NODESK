import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bulma'
import Notifications from 'vue-notification'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './registerServiceWorker'

import VueLazyload from 'vue-lazyload'
 
Vue.use(VueLazyload)
 

library.add(faPlus)
library.add(faTimes)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Notifications)



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
