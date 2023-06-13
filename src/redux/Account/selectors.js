const getAccountState = (state) => ({
  loading: state.account.loading,
  data: state.account.accountState,
  error: state.account.error
})

export default {
  getAccountState
}