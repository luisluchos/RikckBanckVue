<template>
  <div>
    <h2>Balance = {{ balance | currency }}</h2>
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
