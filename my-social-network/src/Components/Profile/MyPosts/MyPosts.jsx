import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();

  let onAddPost = (event) => {
    event.preventDefault()
    props.addPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPost(text)
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
            <button onClick={onAddPost}>Add post</button>
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