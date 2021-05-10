<template>
  <div>
    <h2>Balance = {{ balance }}</h2>
  </div>
</template>

<script>
export default {
  computed: {
    balance() {
      return this.$store.state.accounts.account.balance
    },
  },
}
</script>
