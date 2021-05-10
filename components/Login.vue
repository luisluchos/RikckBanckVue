<template>
  <div class="row justify-content-center">
    <div class="col-6 text-center">
      <h3 class="m-5">Iniciar sesión</h3>
      <form @submit.prevent="login">
        <div class="form-group">
          <input
            v-model="email"
            type="text"
            class="form-control"
            placeholder="Email"
          />
          <input
            v-model="password"
            type="text"
            class="form-control"
            placeholder="Password"
          />
        </div>
        <b-button block variant="primary" @click.prevent="login"
          >Iniciar sesión</b-button
        >
      </form>
      <b-button block variant="success" class="mt-2" @click="loginGoogle">
        Login with google
      </b-button>
      <h4 class="text-danger m-5">{{ errors }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      error: '',
      token: '',
      user: '',
    }
  },
  computed: {
    errors() {
      return this.$store.state.auth.error
      // entro en store y busco de todos los state, el archivo characters que contenga el state characters
    },
  },
  methods: {
    login() {
      this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password,
      })
    },

    loginGoogle() {
      this.$store.dispatch('auth/loginGoogle')
    },
  },
}
</script>
