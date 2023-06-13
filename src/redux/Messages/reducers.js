import {messageTypes} from './index'

const initialState = {
  loading: false,
  messages: [],
  error: null
}

export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case messageTypes.SEND_MESSAGE_REQUEST:
      return {
        ...state,
        loading: true
      }
    case messageTypes.SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: [...state.messages, action.payload]
      }
    case messageTypes.SEND_MESSAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case messageTypes.GET_NOTIFICATION_REQUEST:
      return {
        ...state
      }
    case messageTypes.GET_NOTIFICATION_EMPTY:
      return {
        ...state
      }
    case messageTypes.GET_NOTIFICATION_SUCCESS:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      }
    case messageTypes.GET_NOTIFICATION_FAILURE:
      return {
        ...state,
        error: action.payload
      }

    case messageTypes.DELETE_NOTIFICATION_REQUEST:
      return {
        ...state
      }
    case messageTypes.DELETE_NOTIFICATION_SUCCESS:
      return {
        ...state
      }
    case messageTypes.DELETE_NOTIFICATION_FAILURE:
      return {
        ...state,
        error: action.payload
      }

    case messageTypes.CLEAR_MESSAGES:
      return {
        loading: false,
        messages: [],
        error: null
      }

    default:
      return state
  }
}