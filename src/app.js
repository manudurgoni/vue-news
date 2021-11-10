import Vue from 'vue'
import router from './router'

import App from './App.vue'

new Vue({
  router,
  render: (createElement) => {
    return createElement(App)
  }
}).$mount('#news')

console.log('APP: init')
