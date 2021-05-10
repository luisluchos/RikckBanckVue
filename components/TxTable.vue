<template>
  <div>
    <b-table striped hover :items="txs" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    fields: [
      {
        key: 'timestamp',
        sortable: true,
      },
      {
        key: 'from',
        sortable: false,
      },
      {
        key: 'to',
        sortable: true,
      },
      {
        key: 'amount',
        sortable: true,
      },
    ],
  }),
  computed: {
    txs() {
      return this.$store.state.accounts.txs
    },
  },
  created() {
    this.$store.dispatch('accounts/setUserTxs')
  },
}
</script>

<style></style>
