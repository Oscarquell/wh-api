import {messageTypes} from './index'

const requestSendMessageActionCreator = () => ({
  type: messageTypes.SEND_MESSAGE_REQUEST
})

const successSendMessageActionCreator = (data) => ({
  type: messageTypes.SEND_MESSAGE_SUCCESS,
  payload: data
})

const failureSendMessageActionCreator = (err) => ({
  type: messageTypes.SEND_MESSAGE_SUCCESS,
  payload: err
})

const requestGetNotificationsActionCreator = () => ({
  type: messageTypes.GET_NOTIFICATION_REQUEST
})

const successGetNotificationsActionCreator = (data) => ({
  type: messageTypes.GET_NOTIFICATION_SUCCESS,
  payload: data
})

const emptyGetNotificationsActionCreator = () => ({
  type: messageTypes.GET_NOTIFICATION_EMPTY
})

const failureGetNotificationsActionCreator = (err) => ({
  type: messageTypes.GET_NOTIFICATION_FAILURE,
  payload: err
})

const requestDeleteNotificationActionCreator = () => ({
  type: messageTypes.DELETE_NOTIFICATION_REQUEST
})

const successDeleteNotificationActionCreator = () => ({
  type: messageTypes.DELETE_NOTIFICATION_SUCCESS
})

const failureDeleteNotificationActionCreator = (err) => ({
  type: messageTypes.DELETE_NOTIFICATION_FAILURE,
  payload: err
})

const clearMessagesActionCreator = () => ({
  type: messageTypes.CLEAR_MESSAGES
})

export default {
  requestSendMessageActionCreator,
  successSendMessageActionCreator,
  failureSendMessageActionCreator,

  requestGetNotificationsActionCreator,
  emptyGetNotificationsActionCreator,
  successGetNotificationsActionCreator,
  failureGetNotificationsActionCreator,

  requestDeleteNotificationActionCreator,
  successDeleteNotificationActionCreator,
  failureDeleteNotificationActionCreator,

  clearMessagesActionCreator
}