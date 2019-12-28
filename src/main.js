// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import iView from 'iview'
import store from './store'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import { kStringMaxLength } from 'buffer'
import { request } from './netword/request';

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  Vuex,
  // render: h => (App),
  components: { App },
  template: '<App/>'
})


request({
  url: '/home/multidata'
}, res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})


axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000;

axios({
  url: 'http://123.207.32:8000/home/multidta'
}).then(res => {
  console.log(res);
})

axios.all([axios({
  url: '/home/data',
  params: {
    type: 'sell',
    page: 5
  }
}), axios({
  url: '',
  params: {
    type: 'sell',
    page: 5
  }
})]).then(axios.spread((res1, res2) => {
  console.log(res1)
  console.log(res2);
}))



