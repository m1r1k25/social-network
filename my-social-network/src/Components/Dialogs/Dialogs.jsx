import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>
          John
        </div>
        <div className={s.dialog}>
          Anna
        </div>
        <div className={s.dialog}>
          Andy
        </div>
        <div className={s.dialog}>
          Scott
        </div>
        <div className={s.dialog}>
          Jessica
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>Hello</div>
        <div className={s.message}>What's up</div>
      </div>
    </div >
  )
}

export default Dialogs;