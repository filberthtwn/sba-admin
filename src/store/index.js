import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import Cookies from 'js-cookie';

import authModules from './modules/auth/index.js'
import transactionsModules from './modules/transactions/index.js'
import withdrawsModules from './modules/withdraws/index.js'
import usersModules from './modules/users/index.js'
import agentsModules from './modules/agents/index.js'

export default createStore({
  namespaced: true,
  modules: {
    auth: authModules,
    transactions: transactionsModules,
    withdraws: withdrawsModules,
    users: usersModules,
    agents: agentsModules,
  },
  state: {
    baseUrl: 'https://vast-plains-04789.herokuapp.com',
    token: null,
    successMsg: null,
    errMsg: null,
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    }
  },
  getters: {
    baseUrl(state) {
      return state.baseUrl;
    },
    token(state) {
      return state.token;
    },
  },
  actions: {},
  
  plugins:[
    createPersistedState({
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
        removeItem: key => Cookies.remove(key)
      }
    })
  ]
})