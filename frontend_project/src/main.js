import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import Home from '@/Home.vue'
import UserList from '@/UserList.vue'
import User from '@/User.vue'
import Registration from '@/Registration.vue'

import Users from '@/handlers/Users'


Vue.use(Vuex)
Vue.use(VueRouter)

Vue.config.productionTip = false


const routes = [
  { path: '/', component: {template: '<div>hello</div>'} },
  { path: '/UserList', component: UserList },
  { path: '/User/:id?', component: User },
  { path: '/Registration', component: Registration }]

const router = new VueRouter({
  routes: routes,
})

new Vue({
  store: Users,
  router: router,
  render: h => h(Home)
}).$mount('#app')

