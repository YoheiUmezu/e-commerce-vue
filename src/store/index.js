import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
// import * as mutations from './mutations'
import menu from './modules/menu'
import orders from './modules/orders'
import users from './modules/users'
import { vuexfireMutations } from 'vuexfire'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    menu,
    orders,
    users
  }
})
