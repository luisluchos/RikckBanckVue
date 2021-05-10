<template>
  <div>
    <b-button variant="success" @click="getCharacters">Get Characters</b-button>
    <b-table striped hover :items="characters"></b-table>
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

<style></style>
