import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import { findIndex } from 'lodash'

import { objectToArray } from './utils';

Vue.use(Vuex)

axios.defaults.baseURL = 'https://vue-brown-bag.firebaseio.com/'

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    USERS_SET(state, users) {
      state.users = users
    },
    USER_ADD(state, user) {
      state.users.push(user)
    },
    USER_REMOVE(state, user) {
      const index = findIndex(state.users, { id: user.id })
      state.users.splice(index, 1)
    }
  },
  actions: {
    async USERS_GET (context) {
      try {
        const response = await axios.get('/users.json')
        const normalized = objectToArray(response.data)
        context.commit('USERS_SET', normalized)
        return response.data
      } catch(e) {
        throw e
      }
    },
    async USER_CREATE (context, user) {
      try {
        const response = await axios.post('/users.json', user)
        const id = response.data.name
        const newUser = {
          id,
          ...user
        }
        context.commit('USER_ADD', newUser)
        return newUser
      } catch(e) {
        throw e
      }
    }
  },
  getters: {
    users (state) {
      return state.users
    }
  }
})
