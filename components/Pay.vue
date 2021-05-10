<template>
  <div class="m-3">
    <h2>Return loan</h2>
    <b-form-input
      v-model.number="amount"
      type="number"
      placeholder="Enter amount"
    >
    </b-form-input>
    <b-btn block variant="primary" @click="pay">Pay to the bank</b-btn>
  </div>
</template>
<script>
export default {
  data: () => ({
    amount: 0,
  }),
  methods: {
    pay() {
      this.$store.dispatch('accounts/pay', parseInt(this.amount))
    },
  },
}
</script>
