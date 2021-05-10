import { wrapFunctional } from './utils'

export { default as Balance } from '../..\\components\\Balance.vue'
export { default as Deposit } from '../..\\components\\Deposit.vue'
export { default as Home } from '../..\\components\\Home.vue'
export { default as ListaCharacters } from '../..\\components\\ListaCharacters.vue'
export { default as Loan } from '../..\\components\\Loan.vue'
export { default as LoanBalance } from '../..\\components\\LoanBalance.vue'
export { default as Login } from '../..\\components\\Login.vue'
export { default as Pay } from '../..\\components\\Pay.vue'
export { default as Register } from '../..\\components\\Register.vue'
export { default as Transfer } from '../..\\components\\Transfer.vue'
export { default as TxTable } from '../..\\components\\TxTable.vue'

export const LazyBalance = import('../..\\components\\Balance.vue' /* webpackChunkName: "components/balance" */).then(c => wrapFunctional(c.default || c))
export const LazyDeposit = import('../..\\components\\Deposit.vue' /* webpackChunkName: "components/deposit" */).then(c => wrapFunctional(c.default || c))
export const LazyHome = import('../..\\components\\Home.vue' /* webpackChunkName: "components/home" */).then(c => wrapFunctional(c.default || c))
export const LazyListaCharacters = import('../..\\components\\ListaCharacters.vue' /* webpackChunkName: "components/lista-characters" */).then(c => wrapFunctional(c.default || c))
export const LazyLoan = import('../..\\components\\Loan.vue' /* webpackChunkName: "components/loan" */).then(c => wrapFunctional(c.default || c))
export const LazyLoanBalance = import('../..\\components\\LoanBalance.vue' /* webpackChunkName: "components/loan-balance" */).then(c => wrapFunctional(c.default || c))
export const LazyLogin = import('../..\\components\\Login.vue' /* webpackChunkName: "components/login" */).then(c => wrapFunctional(c.default || c))
export const LazyPay = import('../..\\components\\Pay.vue' /* webpackChunkName: "components/pay" */).then(c => wrapFunctional(c.default || c))
export const LazyRegister = import('../..\\components\\Register.vue' /* webpackChunkName: "components/register" */).then(c => wrapFunctional(c.default || c))
export const LazyTransfer = import('../..\\components\\Transfer.vue' /* webpackChunkName: "components/transfer" */).then(c => wrapFunctional(c.default || c))
export const LazyTxTable = import('../..\\components\\TxTable.vue' /* webpackChunkName: "components/tx-table" */).then(c => wrapFunctional(c.default || c))
