import { getCharacters } from '~/plugins/apiRM'

export const state = () => ({
  characters: [],
})

export const mutations = {
  setCharacters(state, payload) {
    state.characters = [...payload]
  },
}

export const actions = {
  async getCharacters({ commit }) {
    try {
      const characters = await getCharacters()
      commit('setCharacters', characters.data.results)
    } catch (error) {
      alert(error)
    }
  },
}
