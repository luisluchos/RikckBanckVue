<template>
  <div>
    <b-button variant="success" @click="getCharacters">Get Characters</b-button>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Status</th>
          <th scope="col">Species</th>
          <th scope="col">Species</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="character in characters" :key="character.id">
          <td><img :src="character.image" alt="" /></td>
          <th scope="row">{{ character.name }}</th>
          <td>{{ character.status }}</td>
          <td>{{ character.species }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    characters() {
      return this.$store.state.characters.characters
      // entro en store y busco de todos los state, el archivo characters que contenga el state characters
    },
  },
  methods: {
    getCharacters() {
      this.$store.dispatch('characters/getCharacters')
    },
  },
}
</script>

<style>
img {
  width: 10%;
}
</style>
