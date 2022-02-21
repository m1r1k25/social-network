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

  let dialogs = [
    { id: 1, name: 'Miroslav' },
    { id: 2, name: 'Anna' },
    { id: 3, name: 'John' },
    { id: 4, name: 'Scott' },
    { id: 5, name: 'Igor' },
  ]
  let messages = [
    { id: 1, message: 'Hi' },
    { id: 1, message: 'Hello' },
    { id: 1, message: 'HRU' },
    { id: 1, message: 'Good buy' },
    { id: 1, message: 'Bye' },
  ]

  let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
  let messagesElements = messages.map(m => <Message message={m.message} />)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div >
  )
}

export default Dialogs;