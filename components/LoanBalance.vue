<template>
  <div>
    <h2>Loan Balance = {{ loanBalance || 0 }}</h2>
  </div>
</template>

<script>
export default {
  computed: {
    loanBalance() {
      return this.$store.state.accounts.account.loanBalance
    },
  },
}
</script>
