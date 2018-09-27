import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const baseUrl = 'http://localhost:3000'

export default new Vuex.Store({
  state: {
    token: '',
    questions: [],
    user: {},
    editStat: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    removeToken (state) {
      state.token = ''
    },
    setTweet (state, tweet) {
      state.tweet = tweet
    },
    setData (state, data) {
      state.user = data
      console.log(state.user)
    },
    removeUser (state) {
      state.user = ''
    },
    setEditStat (state) {
      state.editStat = true
    },
    removeEditStat (state) {
      state.editStat = false
    }
  },
  actions: {
    setToken (context, token) {
      context.commit('setToken', token)
    },
    removeToken (context) {
      context.commit('removeToken')
    },
    setTweet (context, question) {
      context.commit('setTweet', question)
    },
    checkToken (context, token) {
      axios({
        method: 'get',
        url: `${baseUrl}/users/auth`,
        headers: {
          token: token
        }
      })
        .then(response => {
          context.commit('setData', response.data)
        })
        .catch(err => {
          console.log(err.response.data.error)
        })
    },
    removeUser (context) {
      context.commit('removeUser')
    },
    setEditStat (context) {
      context.commit('setEditStat')
    },
    removeEditStat (context) {
      context.commit('removeEditStat')
    },
    getTweet (context) {
      let self = this

      axios({
        method: 'get',
        url: `${baseUrl}/tweet/all`
      })
        .then(response => {
          response.data.forEach(tweet => {
            if (tweet.user._id === self.state.user.id) {
              tweet['isHim'] = true
            } else {
              tweet['isHim'] = false
            }
          })

          self.commit('setTweet', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
