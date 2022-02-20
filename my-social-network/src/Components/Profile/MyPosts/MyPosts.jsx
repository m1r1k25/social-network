import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <form>
          <input type='textarea'></input>
          <input type='submit'></input>
        </form>
      </div>
      <div>
        <Post message='Hi, how are you?' likesCount='3' />
        <Post message="It's my first post" likesCount='10' />
      </div>
    </div>
  )
}

export default MyPosts;