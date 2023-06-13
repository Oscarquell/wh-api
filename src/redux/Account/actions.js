import {accountTypes} from './index'

const requestAccountStateActionCreator = () => ({
  type: accountTypes.ACCOUNT_STATE_REQUEST
})

// data = initialState.accountState
const receiveAccountStateActionCreator = (data) => ({
  type: accountTypes.ACCOUNT_STATE_RECEIVE,
  payload: data
})

const failureAccountStateActionCreator = (err) => ({
  type: accountTypes.ACCOUNT_STATE_FAILURE,
  payload: err
})

const requestLogoutAccountActionCreator = () => ({
  type: accountTypes.LOGOUT_REQUEST
})

const successLogoutAccountActionCreator = () => ({
  type: accountTypes.LOGOUT_SUCCESS
})

const failureLogoutAccountActionCreator = () => ({
  type: accountTypes.LOGOUT_FAILURE
})

export default {
  requestAccountStateActionCreator,
  receiveAccountStateActionCreator,
  failureAccountStateActionCreator,

  requestLogoutAccountActionCreator,
  successLogoutAccountActionCreator,
  failureLogoutAccountActionCreator
}
