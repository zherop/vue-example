import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './view/app.vue'
import router from './router/routes.js'
import axios from 'axios'
window.axios = axios

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App)
})
