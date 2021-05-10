import _ from 'lodash'
import { error, success } from '~/plugins/swal'
import {
  getAccount,
  getUserId,
  createTransaction,
  getTxFrom,
  getTxTo,
  editAccountBalance,
  editAccountLoan,
} from '~/plugins/firebase'

export const state = () => ({
  account: {
    balance: 0,
    loanBalance: 0,
  },
  txs: [],
})

export const mutations = {
  setUserAccount(state, account) {
    state.account = account
  },
  setUserTxs(state, txs) {
    state.txs = txs
  },
}

export const actions = {
  async setUserAccount(ctx) {
    try {
      const account = await getAccount(ctx.rootState.auth.userId)
      ctx.commit('setUserAccount', account)
    } catch (err) {
      error.fire(err)
    }
  },

  async setUserTxs({ commit, rootState }) {
    try {
      const from = await getTxFrom(rootState.auth.userId)
      const to = await getTxTo(rootState.auth.userId)
      const allTxs = [...to, ...from]
      const sortedTxs = _.orderBy(
        allTxs,
        (tx) => {
          return tx.timestamp
        },
        ['desc']
      )
      commit('setUserTxs', sortedTxs)
    } catch (err) {
      error.fire(err)
    }
  },

  async getAccount({ commit }, id) {
    try {
      const account = await getAccount(id)
      commit('setAccount', account)
    } catch (err) {
      error.fire(err)
    }
  },

  async deposit({ rootState, state, dispatch }, amount) {
    const accountA = await getAccount('ROOT')
    const balanceA = accountA.balance || 0
    const balanceB = state.account.balance || 0

    const totalA = balanceA - amount
    const totalB = balanceB + amount
    await createTransaction({
      amount,
      concept: 'Bank Deposit',
      from: 'Bank',
      to: rootState.auth.userId,
    })
    await editAccountBalance({
      id: 'ROOT',
      balance: totalA,
    })
    await editAccountBalance({
      id: rootState.auth.userId,
      balance: totalB,
    })
    dispatch('setUserAccount')
    dispatch('setUserTxs')
    success.fire(`Deposited ${amount} to your account!`)
  },

  async loan({ rootState, state, dispatch }, amount) {
    const accountA = await getAccount('ROOT')
    const balanceA = accountA.balance || 0
    const balanceB = state.account.balance || 0
    const totalLoanBalance = state.account.loanBalance + amount || 0
    const totalA = balanceA - amount
    const totalB = balanceB + amount
    await createTransaction({
      amount,
      concept: 'Bank Loan',
      from: 'Bank',
      to: rootState.auth.userId,
    })
    await editAccountLoan({
      id: 'ROOT',
      balance: totalA,
      loanBalance: false,
    })
    await editAccountLoan({
      id: rootState.auth.userId,
      balance: totalB,
      loanBalance: totalLoanBalance,
    })
    dispatch('setUserAccount')
    dispatch('setUserTxs')
    success.fire(`Deposited ${amount} to your account!`)
  },

  async transfer({ rootState, state, dispatch }, { email, amount }) {
    const userBId = await getUserId(email)
    const balanceA = state.account.balance || 0
    const accountB = (await getAccount(userBId)) || 0
    const balanceB = accountB.balance || 0
    const totalA = balanceA - amount
    const totalB = balanceB + amount
    await createTransaction({
      amount,
      concept: 'Bank Transfer',
      from: rootState.auth.userId,
      to: userBId,
    })
    await editAccountBalance({
      id: rootState.auth.userId,
      balance: totalA,
    })
    await editAccountBalance({
      id: userBId,
      balance: totalB,
    })
    dispatch('setUserAccount')
    dispatch('setUserTxs')
    success.fire(`Transfered ${amount} to ${email}!`)
  },

  async pay({ rootState, state, dispatch }, amount) {
    const balanceA = state.account.balance

    const accountB = await getAccount('ROOT')
    const balanceB = accountB.balance || 0
    const totalLoanBalance = state.account.loanBalance - amount || 0
    const totalA = balanceA - amount
    const totalB = balanceB + amount

    await createTransaction({
      amount,
      concept: 'Loan Payment',
      from: rootState.auth.userId,
      to: 'Bank',
    })
    await editAccountLoan({
      id: rootState.auth.userId,
      balance: totalA,
      loanBalance: totalLoanBalance,
    })
    await editAccountLoan({
      id: 'ROOT',
      balance: totalB,
      loanBalance: false,
    })
    dispatch('setUserAccount')
    dispatch('setUserTxs')
    success.fire(`Payed ${amount} to the bank!`)
  },
}
