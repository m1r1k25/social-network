import React from 'react';
import s from './Post.module.css';

const MyPosts = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg"></img>
        {props.message}
        <div>
          <span>Like</span>
        </div>
      </div>
    </div>
  )
}

export default MyPosts;