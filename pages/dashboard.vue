<template>
  <div>
    <b-row>
      <b-col>
        <Balance />
        <LoanBalance />
      </b-col>
      <hr />
    </b-row>
    <b-container class="bv-example-row">
      <b-row>
        <b-col><Deposit /></b-col>
        <b-col><Transfer /></b-col>
        <div class="w-100"></div>
        <b-col><Loan /></b-col>
        <b-col><Pay /></b-col>
      </b-row>
    </b-container>
    <b-row>
      <b-col>
        <TxTable />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Deposit from '@/components/Deposit'
import Balance from '@/components/Balance'
import TxTable from '@/components/TxTable'
import Loan from '@/components/Loan'
import Pay from '@/components/Pay'
import Transfer from '@/components/Transfer'
import LoanBalance from '@/components/LoanBalance'
export default {
  components: {
    TxTable,
    Deposit,
    Balance,
    LoanBalance,
    Transfer,
    Loan,
    Pay,
  },
  middleware: 'checkAuth',
  // con fetch lanzamos la acción setUserAccount,lo que actualiará la store de accounts, y podremos usar los datos en los componentes hijos
  // podemos lanzarla aquí con fecth o en el componente con create, como ejemplo txTable
  fetch() {
    this.$store.dispatch('accounts/setUserAccount')
    /* this.$store.dispatch('accounts/setUserTxs') */
  },
}
</script>
