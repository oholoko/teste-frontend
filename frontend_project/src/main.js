import Vue from 'vue'
import Vuex from 'vuex'
import App from '@/App.vue'
import Users from '@/handlers/Users'

Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  store: Users,
  render: h => h(App),
})
