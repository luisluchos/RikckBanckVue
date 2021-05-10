import axios from 'axios'

const URL = 'https://rickandmortyapi.com/api'

export const getCharacters = async () => {
  try {
    const respuesta = await axios.get(`${URL}/character`)
    return respuesta
  } catch (error) {
    return error
  }
}
