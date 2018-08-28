import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
import { account } from './modules/account.module'

Vue.use(Vuex)
const state = {
  count: 0
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    account
  }
})

export default store
