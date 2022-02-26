import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostActionCreator } from './../../../redux/profile-reducer'

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = (event) => {
    event.preventDefault()
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostActionCreator(text);
    props.dispatch(action);
  }

  return (
    <div className={s.postsBlock}>
      <h3>
        My posts
      </h3>
      <div>
        <form>
          <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
          </div>
          <div>
            <button onClick={addPost}>Add post</button>
          </div>
        </form>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;