import {
  register,
  login,
  loginGoogle,
  registroGoogle,
  logOut,
} from '~/plugins/firebase'
// import { success } from '~/plugins/swal'

export const state = () => ({
  token: '',
  userId: null,
  user: {},
  isLoggedIn: false,
  error: '',
})

export const mutations = {
  setUser(state, payload) {
    state.user = payload.user
    state.token = payload.token
    state.userId = payload.userId
    state.isLoggedIn = true
  },
  setError(state, payload) {
    state.error = payload
  },
  resetUser(state) {
    state.isLoggedIn = false
    state.user = {}
    state.token = null
    state.userId = null
  },
}

export const actions = {
  async register({ commit }, credentials) {
    try {
      const data = await register(credentials)
      commit('setError', data.message)
      if (data.userCredentials.user.uid) {
        this.$router.push('/login')
      } else {
        commit('setError', data.message)
      }
    } catch (error) {
      return error
    }
  },

  async loginGoogle({ commit }) {
    try {
      const user = await loginGoogle()
      commit('setUser', user)
      this.$router.push('/dashboard')
    } catch (error) {
      alert(error)
    }
  },

  async login({ commit }, credentials) {
    try {
      const user = await login(credentials)

      if (user.token) {
        commit('setUser', user)
        this.$router.push('/dashboard')
      } else {
        commit('setError', user)
      }
    } catch (error) {
      return error
    }
  },

  async registroGoogle({ commit }) {
    try {
      const user = await registroGoogle()
      commit('setUser', user)
      this.$router.push('/dashboard')
    } catch (error) {
      // success.fire(`Deposited ${error} to your account!`)
      alert(error)
    }
  },

  async logout({ commit }) {
    try {
      await logOut()
      commit('resetUser')
      this.$router.push('/')
    } catch (error) {
      alert(error)
    }
  },
}
