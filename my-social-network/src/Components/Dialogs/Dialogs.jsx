import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={s.dialog}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name='Miroslav' id='1' />
        <DialogItem name='Anna' id='2' />
        <DialogItem name='John' id='3' />
        <DialogItem name='Scott' id='4' />
        <DialogItem name='Igor' id='5' />
      </div>
      <div className={s.messages}>
        <Message message='Hi' />
        <Message message='Hello' />
        <Message message='How are you?' />
      </div>
    </div >
  )
}

export default Dialogs;