import authApiService from './../../api-services/auth-api.service'

const user = JSON.parse(localStorage.getItem('user'))
const state = user
  ? { status: { loggedIn: true }, user }
  : { status: {}, user: null }

const actions = {
  login ({ commit }, { email, password }) {
    commit('LOGIN_REQUEST', { email })

    authApiService.login(email, password)
      .then(
        user => {
          commit('LOGIN_SUCCESS', user)
        },
        error => {
          commit('LOGIN_FAILURE', error)
        }
      )
  },

  register ({ commit }, user) {
    commit('REGISTER_REQUEST', user)

    authApiService.register(user)
      .then(
        user => {
          commit('REGISTER_SUCCESS', user)
        },
        error => {
          commit('REGISTER_FAILURE', error)
        }
      )
  }
}

const mutations = {
  LOGIN_REQUEST (state, user) {
    state.status = { loggingIn: true }
    state.user = user
  },

  LOGIN_SUCCESS (state, user) {
    state.status = { loggedIn: true }
    state.user = user
  },

  LOGIN_FAILURE (state, error) {
    state.status = {}
    state.user = null
  },

  REGISTER_REQUEST (state, user) {
    state.status = { registering: true }
  },

  REGISTER_SUCCESS (state, user) {
    state.status = {}
  },

  REGISTER_FAILURE (state, error) {
    state.status = {}
  }
}

export const account = {
  namespaced: true,
  state,
  actions,
  mutations
}
