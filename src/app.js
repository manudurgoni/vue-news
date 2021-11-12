import Vue from 'vue'
import router from './core/router'

import App from './App.vue'

import './styles/main.css'

new Vue({
  router,
  render: (createElement) => {
    return createElement(App)
  }
}).$mount('#news')
