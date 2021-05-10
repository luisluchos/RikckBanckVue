<template>
  <div class="m-3">
    <h2>Loan</h2>
    <b-form-input
      v-model.number="amount"
      type="number"
      placeholder="Enter amount"
    >
    </b-form-input>
    <b-btn block variant="primary" @click="loan"
      >Get a loan from the bank</b-btn
    >
  </div>
</template>
<script>
export default {
  data: () => ({
    amount: 0,
  }),
  methods: {
    loan() {
      this.$store.dispatch('accounts/loan', this.amount)
    },
  },
}
</script>
