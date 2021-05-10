import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Balance: () => import('../..\\components\\Balance.vue' /* webpackChunkName: "components/balance" */).then(c => wrapFunctional(c.default || c)),
  Deposit: () => import('../..\\components\\Deposit.vue' /* webpackChunkName: "components/deposit" */).then(c => wrapFunctional(c.default || c)),
  Home: () => import('../..\\components\\Home.vue' /* webpackChunkName: "components/home" */).then(c => wrapFunctional(c.default || c)),
  ListaCharacters: () => import('../..\\components\\ListaCharacters.vue' /* webpackChunkName: "components/lista-characters" */).then(c => wrapFunctional(c.default || c)),
  Loan: () => import('../..\\components\\Loan.vue' /* webpackChunkName: "components/loan" */).then(c => wrapFunctional(c.default || c)),
  LoanBalance: () => import('../..\\components\\LoanBalance.vue' /* webpackChunkName: "components/loan-balance" */).then(c => wrapFunctional(c.default || c)),
  Login: () => import('../..\\components\\Login.vue' /* webpackChunkName: "components/login" */).then(c => wrapFunctional(c.default || c)),
  Pay: () => import('../..\\components\\Pay.vue' /* webpackChunkName: "components/pay" */).then(c => wrapFunctional(c.default || c)),
  Register: () => import('../..\\components\\Register.vue' /* webpackChunkName: "components/register" */).then(c => wrapFunctional(c.default || c)),
  Transfer: () => import('../..\\components\\Transfer.vue' /* webpackChunkName: "components/transfer" */).then(c => wrapFunctional(c.default || c)),
  TxTable: () => import('../..\\components\\TxTable.vue' /* webpackChunkName: "components/tx-table" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
