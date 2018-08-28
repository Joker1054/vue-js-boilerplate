import Vue from 'vue'
import Axios from 'axios'
import assign from 'lodash/assign'
import toInteger from 'lodash/toInteger'

const ENDPOINTS = {
  LOGIN: '/auth/login',
  REGISTER: '/users/create'
}

export default {
  setLocalStorageAuthData (data) {
    localStorage.setItem('token', data.token)
    localStorage.setItem('user_id', data.user ? data.user.id : null)
    localStorage.setItem('user', JSON.stringify(data.user))
  },

  setAuthHeader () {
    Vue.config.activeUserId = toInteger(localStorage.getItem('user_id'))
    assign(Axios.defaults.headers, { Authorization: 'Bearer ' + localStorage.getItem('token') })
  },

  handleAuthChange (data = { token: null, user: null }) {
    this.setLocalStorageAuthData(data)
    this.setAuthHeader()
  },

  login (data) {
    return Axios.post(ENDPOINTS.LOGIN, data).then((response) => {
      this.handleAuthChange(response.data)
      return response
    })
  },

  register (data) {
    return Axios.post(ENDPOINTS.REGISTER, data).then((response) => {
      this.handleAuthChange(response.data)
      return response
    })
  }
}
