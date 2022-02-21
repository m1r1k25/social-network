import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postData = [
    { message: 'This is my first post', likesCount: 3 },
    { message: 'Hi, how are you?', likesCount: 10 }
  ]

  return (
    <div className={s.postsBlock}>
      <h3>
        My posts
      </h3>
      <div>
        <form>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
        </form>
      </div>
      <div className={s.posts}>
        <Post message={postData[0].message} likesCount={postData[0].likesCount} />
        <Post message={postData[1].message} likesCount={postData[1].likesCount} />
      </div>
    </div>
  )
}

export default MyPosts;