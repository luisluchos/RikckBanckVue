<template>
  <div class="m-3">
    <h2>Deposit</h2>
    <b-form-input
      v-model.number="amount"
      type="number"
      placeholder="Enter amount"
    >
    </b-form-input>
    <b-btn block variant="primary" @click="deposit">Deposit</b-btn>
  </div>
</template>
<script>
export default {
  data: () => ({
    amount: 0,
  }),
  methods: {
    deposit() {
      this.$store.dispatch('accounts/deposit', this.amount)
    },
  },
}
</script>
