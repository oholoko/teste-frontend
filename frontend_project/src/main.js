import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import users from '@/handlers/Users'

Vue.use(Vuex)
Vue.config.productionTip = false
console.log(users)

const app = new Vue({
  render: h => h(App),
})

app.$mount('#app')