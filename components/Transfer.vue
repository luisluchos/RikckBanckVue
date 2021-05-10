<template>
  <div class="m-3">
    <h2>Transfer</h2>
    <b-form-input
      v-model="email"
      type="email"
      placeholder="Enter email address"
    >
    </b-form-input>
    <b-form-input
      v-model.number="amount"
      type="number"
      placeholder="Enter amount"
    >
    </b-form-input>
    <b-btn block variant="primary" @click="transfer">Transfer to user</b-btn>
  </div>
</template>
<script>
export default {
  data: () => ({
    email: '',
    amount: 0,
  }),
  methods: {
    transfer() {
      this.$store.dispatch('accounts/transfer', {
        amount: this.amount,
        email: this.email,
      })
    },
  },
}
</script>
