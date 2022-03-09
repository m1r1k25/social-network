import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Navigate } from 'react-router-dom'

const Dialogs = (props) => {

  let state = props.messagePage;

  const dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
  const messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />)

  const newMessageBody = state.newMessageBody;
  const onSendMessageClick = () => {
    props.sendMessage();
  }
  const onNewMessageChange = (event) => {
    let body = event.target.value;
    props.updateNewMessageBody(body);
  }

  if (!props.isAuth) return <Navigate to={"/login"} />

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>
          {messagesElements}
        </div>
        <div>
          <div><textarea value={newMessageBody}
            onChange={onNewMessageChange}
            placeholder='Enter your message'></textarea></div>
          <div><button onClick={onSendMessageClick}>Send</button></div>
        </div>
      </div>
    </div >
  )
}

export default Dialogs;