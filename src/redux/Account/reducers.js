import {accountTypes} from './index'

const initialState = {
  loading: false,
  accountState: {
    idInstance: null,
    apiTokenInstance: null,
    isAuthorized: false,
    chatId: null
  },
  error: null
}

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case accountTypes.ACCOUNT_STATE_REQUEST:
      return {
        ...state,
        loading: true
      }
    case accountTypes.ACCOUNT_STATE_RECEIVE:
      return {
        ...state,
        accountState: action.payload,
        loading: false
      }
    case accountTypes.ACCOUNT_STATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case accountTypes.LOGOUT_REQUEST:
      return {
        ...state
      }
    case accountTypes.LOGOUT_SUCCESS:
      return {
        loading: false,
        accountState: {
          idInstance: null,
          apiTokenInstance: null,
          isAuthorized: false
        },
        error: null
      }
    case accountTypes.LOGOUT_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}