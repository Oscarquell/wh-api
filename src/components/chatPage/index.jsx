import React from 'react';
import Message from "../message";
import SendMessage from "../sendMessage";
import {useDispatch, useSelector} from "react-redux";
import {messageSelectors, messageOperations} from "../../redux/Messages";
import {useInterval} from "../../hooks/useInterval";
import './style.css'

const ChatPage = () => {

  const messages = useSelector(messageSelectors.getMessages)
  const dispatch = useDispatch()

  useInterval(() => {
    dispatch(messageOperations.updateIncomingMessages())
  }, 5000)

  return (
    <div className='chat-page-wrap'>
      <div className='message-list'>
        {messages.map((item, idx) => (
          <Message
            key={idx}
            type={item.type}
            text={item.text}
            time={new Date(item.timestamp * 1000).toLocaleString()}
          />
        ))}
      </div>
      <SendMessage/>
    </div>
  );
};

export default ChatPage;