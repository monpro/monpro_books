import Vue from 'vue'
import Vuex from 'vuex'
import book from './module/book'
import getters from './getter'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    book
  },
  getters
})
