import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {messageOperations} from './../../redux/Messages'
import {accountOperations} from "../../redux/Account";
import './style.css'

const SendMessage = () => {

  const [msg, setMsg] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(messageOperations.sendMessage(msg))
    setMsg('')
  };

  const logout = () => {
    dispatch(accountOperations.logout())
    dispatch(messageOperations.clearMessages())
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='send-field'>
          <textarea
              onChange={(e) => setMsg(e.target.value)}
              placeholder='Введите сообщение'
              name="message"
              cols="50"
              rows="3"
              value={msg}
              className='field-to-write'/>

              <input
                  type="submit"
                  className='send-and-end send'
                  value=''
              />
        </div>
        <Link to='/login'>
          <input
              onClick={logout}
              type="button"
              value='Выйти'
              className='send-and-end logout'
          />
        </Link>
      </form>
    </div>
  );
};

export default SendMessage;