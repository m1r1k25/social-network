import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

  let state = props.store.getState().messagePage;

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }
  const onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }

  return (
    <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} messagePage={state} />
  )
}

export default DialogsContainer;