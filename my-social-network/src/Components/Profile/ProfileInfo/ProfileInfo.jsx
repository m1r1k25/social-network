import React from 'react';
import s from './ProfileInfo.module.css';
import { useSelector } from 'react-redux';
import Preloader from './../../../Components/Common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import { updateNewMessageBodyCreator } from '../../../redux/dialogs-reducer';
import { useDispatch } from 'react-redux';

const ProfileInfo = (props) => {
/*   const {newMessageBody}= useSelector((state) => state.messagePage)
  console.log(newMessageBody);
  const dispatch = useDispatch();
  <button onClick={() => dispatch(updateNewMessageBodyCreator("hjkhjhjkhjk"))}>click</button> */
  if(!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt='img'/>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>
      
    </div>
  )
}

export default ProfileInfo;