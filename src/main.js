import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import moment from 'vue-moment'

Vue.config.productionTip = false

Vue.use(moment);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
