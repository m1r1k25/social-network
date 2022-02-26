const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
  posts: [
    { id: 1, message: 'This is my first post', likesCount: 3 },
    { id: 2, message: 'Hi, how are you?', likesCount: 10 }
  ],
  newPostText: 'give me a text'
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 0
      }
      state.posts.push(newPost);
      state.newPostText = '';
      return state;

    case UPDATE_NEW_POST:
      state.newPostText = action.newText;
      return state;

    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST,
    newText: text
  }
}

export default profileReducer;