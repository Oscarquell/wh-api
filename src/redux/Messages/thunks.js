import {messageActions} from './index'
import {mainApi} from "../../constants/api";

const sendMessage = (message) => async (dispatch, getState) => {
  const rootState = getState()
  const accountState = rootState.account.accountState
  const {idInstance, apiTokenInstance, chatId} = accountState

  dispatch(messageActions.requestSendMessageActionCreator())
  try {
    await fetch(`${mainApi(idInstance, apiTokenInstance, 'sendMessage')}`, {
      method: 'POST',
      body: JSON.stringify({
        chatId,
        message
      })
    })
    dispatch(messageActions.successSendMessageActionCreator({
      type: 'Outgoing',
      text: message,
      timestamp: new Date().getTime()
    }))
  } catch (err) {
    dispatch(messageActions.failureSendMessageActionCreator(err))
  }
}

const updateIncomingMessages = () => async (dispatch, getState) => {
  const rootState = getState()
  const accountState = rootState.account.accountState
  const {idInstance, apiTokenInstance} = accountState

  dispatch(messageActions.requestGetNotificationsActionCreator())
  try {
    const res = await fetch(`${mainApi(idInstance, apiTokenInstance, 'receiveNotification')}`)
    const parsedData = await res.json()
    if (!parsedData) {
      dispatch(messageActions.emptyGetNotificationsActionCreator())
      return
    }
    if (parsedData && parsedData.body && parsedData.body.typeWebhook === 'incomingMessageReceived') {
      dispatch(messageActions.successGetNotificationsActionCreator({
        type: 'Incoming',
        text: parsedData.body.messageData.textMessageData.textMessage,
        timestamp: parsedData.body.timestamp
      }))
      dispatch(messageActions.requestDeleteNotificationActionCreator())
      try {
        await fetch(`${mainApi(idInstance, apiTokenInstance, 'deleteNotification')}/${parsedData.receiptId}`, {
          method: 'DELETE'
        })
        dispatch(messageActions.successDeleteNotificationActionCreator())
      } catch (err) {
        dispatch(messageActions.failureSendMessageActionCreator(err))
      }
    }
  } catch (err) {
    dispatch(messageActions.failureSendMessageActionCreator(err))
  }
}

const clearMessages = () => (dispatch) => {
  dispatch(messageActions.clearMessagesActionCreator())
}

export default {
  sendMessage,
  updateIncomingMessages,
  clearMessages
}