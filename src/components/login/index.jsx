import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {accountOperations} from './../../redux/Account'
import './style.css'

const LogIn = () => {
  const [token, setToken] = useState('')
  const [id, setId] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const dispatch = useDispatch()

  const handleSave = (event) => {
    event.preventDefault();
    dispatch(accountOperations.getAccountState(id, token, phoneNumber))
  };

  return (
    <div>
      <form className='login-forms' onSubmit={handleSave}>
        <span>Токен *</span>
        <input
          value={token}
          className='login-form'
          type="text"
          name='token'
          onChange={(event) => setToken(event.target.value)}/>

        <span>ID *</span>
        <input
          value={id}
          className='login-form'
          type="text"
          name='id'
          onChange={(event) => setId(event.target.value)}
        />

        <span>Номер телефона собеседника *</span>
        <input
          value={phoneNumber}
          className='login-form'
          type="text"
          name='phone'
          onChange={(event) => setPhoneNumber(event.target.value)}
        />

        <input className='login-form login-button' type="submit" value='Войти'/>
      </form>
    </div>
  );
};

export default LogIn;