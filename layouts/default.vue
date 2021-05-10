<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand>RM Bank</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item><NuxtLink to="/">Home</NuxtLink></b-nav-item>
            <b-nav-item
              ><NuxtLink to="/characters">Characters</NuxtLink></b-nav-item
            >
            <b-nav-item
              ><NuxtLink to="/dashboard">Dashboard</NuxtLink></b-nav-item
            >
          </b-navbar-nav>

          <!-- Right aligned nav items -->

          <b-navbar-nav class="ml-auto">
            <template v-if="!user.name">
              <b-nav-item href="#"
                ><NuxtLink to="/login">Login</NuxtLink></b-nav-item
              >
              <b-nav-item href="#"
                ><NuxtLink to="/register">Register</NuxtLink></b-nav-item
              >
            </template>

            <template v-else>
              <b-navbar-brand>{{ user.name || user.email }}</b-navbar-brand>
              <button class="btn btn-danger" @click.prevent="logOut">
                Log Out
              </button>
            </template>

            <!--  <b-nav-item-dropdown right @click.prevent="togglemenu">
              <template #button-content>
                <em>{{ user.name || user.email }}</em>
              </template>
              <b-dropdown-item
                ><NuxtLink to="/dashboard">Dashboard</NuxtLink></b-dropdown-item
              >
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown> -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div class="container-fluid">
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    },
    characters() {
      return this.$store.state.characters.characters
      // entro en store y busco de todos los state, el archivo characters que contenga el state characters
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout', {})
    },
  },
}
</script>
