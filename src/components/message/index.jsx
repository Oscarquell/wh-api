import React from 'react';
import './style.css'

const Message = (props) => {
  const {
    type,
    text,
    time
  } = props

  return (
    <div>
        <div className='chat-box'>
            <div className={ type === 'Incoming' ? 'msg-text-left' : 'msg-text-right' }>
                <div style={{display: 'inline'}}>
                    {text}
                </div>
                <span className='time'>{time}</span>
            </div>
        </div>
    </div>
  );
};

export default Message;
