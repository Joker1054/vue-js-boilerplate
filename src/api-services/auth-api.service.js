import Vue from 'vue'
import Axios from 'axios'
import assign from 'lodash/assign'
import toInteger from 'lodash/toInteger'
import { CLIENT_ID } from './../constants'

const ENDPOINTS = {
  LOGIN: '/auth/login',
  REGISTER: '/users/create',
  LOGGED_IN_USER: 'users/show'
}

export default {
  setLocalStorageAuthData (data) {
    localStorage.setItem('token', data.access_token)
  },

  setAuthHeader () {
    Vue.config.activeUserId = toInteger(localStorage.getItem('user_id'))
    assign(Axios.defaults.headers, {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      clientId: CLIENT_ID
    })
  },

  handleAuthChange (data = { token: null }) {
    this.setLocalStorageAuthData(data)
    this.setAuthHeader()
    this.getLoggedInUser().then((data) => {
      localStorage.setItem('user_id', data.data ? data.data.id : null)
      localStorage.setItem('user', JSON.stringify(data.data))
    })
  },

  getLoggedInUser (token) {
    return Axios.get(ENDPOINTS.LOGGED_IN_USER).then((response) => {
      return response
    })
  },

  login (email, password) {
    return Axios.post(ENDPOINTS.LOGIN, { email, password }, { headers: { clientId: CLIENT_ID } }).then((response) => {
      this.handleAuthChange(response.data)
      return response
    })
  },

  register (data) {
    return Axios.post(ENDPOINTS.REGISTER, data, { headers: { clientId: CLIENT_ID } }).then((response) => {
      this.handleAuthChange(response.data, name)
      return response
    })
  }
}
