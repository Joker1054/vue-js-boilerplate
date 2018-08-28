// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import Axios from 'axios'
import { LOCALES } from './i18n'
import { config } from './config'

Vue.config.productionTip = false

function configureHttp () {
  Axios.defaults.baseURL = config.getApiUrl()
  Axios.defaults.headers.Accept = 'application/json'
  Axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
}

function configureVueI18n () {
  Vue.use(VueI18n)
  Vue.config.lang = 'en'
  Object.keys(LOCALES).forEach((lang) => {
    Vue.locale(lang, LOCALES[lang])
  })
}

function configureVue () {
  configureVueI18n()
  configureHttp()
}

/* eslint-disable no-new */

configureVue()
new Vue({
  el: '#app',
  router,
  store,
  VueI18n,
  components: { App },
  template: '<App/>'
})
