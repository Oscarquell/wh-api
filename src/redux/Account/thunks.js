import {accountActions} from "./index";
import {CHAT_ID_POSTFIX, mainApi} from "../../constants/api";

const getAccountState = (idInstance, apiTokenInstance, chatId) => async (dispatch) => {
  dispatch(accountActions.requestAccountStateActionCreator())
  try {
    const res = await fetch(`${mainApi(idInstance, apiTokenInstance, 'getStateInstance')}`)
    if (!res.ok) {
      dispatch(accountActions.failureAccountStateActionCreator(res.statusText))
      return
    }

    const parsedData = await res.json()
    dispatch(accountActions.receiveAccountStateActionCreator({
      isAuthorized: parsedData.stateInstance === 'authorized',
      idInstance,
      apiTokenInstance,
      chatId: `${chatId}${CHAT_ID_POSTFIX}`
    }))
  } catch (err) {
    dispatch(accountActions.failureAccountStateActionCreator(err))
  }
}

const logout = () => async (dispatch, getState) => {
  const rootState = getState()
  const accountState = rootState.account.accountState
  const {idInstance, apiTokenInstance} = accountState

  dispatch(accountActions.requestLogoutAccountActionCreator())
  try {
    await fetch(`${mainApi(idInstance, apiTokenInstance, 'logout')}`)
    dispatch(accountActions.successLogoutAccountActionCreator() )
  } catch (err) {
    dispatch(accountActions.failureLogoutAccountActionCreator(err))
  }
}

export default {
  getAccountState,
  logout
}