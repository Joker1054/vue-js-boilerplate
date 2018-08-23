// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import { LOCALES } from './i18n'

Vue.config.productionTip = false

function configureVueI18n () {
  Vue.use(VueI18n)
  Vue.config.lang = 'en'
  Object.keys(LOCALES).forEach((lang) => {
    Vue.locale(lang, LOCALES[lang])
  })
}

function configureVue () {
  configureVueI18n()
}

/* eslint-disable no-new */

configureVue()
new Vue({
  el: '#app',
  router,
  VueI18n,
  components: { App },
  template: '<App/>'
})
