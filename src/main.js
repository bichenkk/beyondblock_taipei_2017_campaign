// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueAgile from 'vue-agile'
import VueI18n from 'vue-i18n'

import zh from './i18n/zh-TW'
import en from './i18n/en'

Vue.use(VueI18n)
Vue.use(VueAgile)

Vue.config.productionTip = false

let userLang = navigator.language || navigator.userLanguage
let locale = 'en'
if (userLang === 'zh-TW') {
  locale = 'zh'
}

console.log(locale)

const i18n = new VueI18n({
  locale: locale,
  messages: {
    'zh': zh,
    'en': en
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  i18n
})
