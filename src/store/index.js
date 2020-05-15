import Vue from 'vue'
import Vuex from 'vuex'
import UserSync from './modules/UserSync'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    UserSync
  }
})
