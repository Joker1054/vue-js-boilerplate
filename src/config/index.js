import {
  API_ROUTE,
  BACKEND_HOSTNAMES,
  ENVIRONMENTS
} from './../constants'

let config = {
  getApiUrl () {
    return this.getHostName() + API_ROUTE
  },

  getHostName () {
    return BACKEND_HOSTNAMES[this.getEnv()]
  },

  getEnv () {
    return ENVIRONMENTS[window.location.hostname]
  }
}

export { config }
