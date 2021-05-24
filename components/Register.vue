<template>
  <div class="row justify-content-center">
    <div class="col-6 text-center">
      <h3 class="m-5">Crear Cuenta</h3>
      <form @submit.prevent="register">
        <div class="form-group">
          <input
            v-model="name"
            type="text"
            class="form-control"
            placeholder="Name"
          />
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
        <b-button block variant="primary" @click="register"> Save </b-button>
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
  name: 'Register',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      token: '',
      user: '',
      error: '',
    }
  },
  computed: {
    errors() {
      return this.$store.state.auth.error
    },
  },

  methods: {
    register() {
      this.$store.dispatch('auth/register', {
        name: this.name,
        email: this.email,
        password: this.password,
      })
    },
    loginGoogle() {
      this.$store.dispatch('auth/registroGoogle')
    },
  },
}
</script>
