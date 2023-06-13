const HOST = "https://api.green-api.com"

export const mainApi = (idInstance, apiTokenInstance, url) => {
  return `${HOST}/waInstance${idInstance}/${url}/${apiTokenInstance}`
}

export const CHAT_ID_POSTFIX = '@c.us'