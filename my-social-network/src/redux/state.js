import { rerenderEntireTree } from './../render';

let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'This is my first post', likesCount: 3 },
      { id: 2, message: 'Hi, how are you?', likesCount: 10 }
    ],
    newPostText: 'give me a text'
  },
  messagePage: {
    dialogs: [
      { id: 1, name: 'Miroslav' },
      { id: 2, name: 'Anna' },
      { id: 3, name: 'John' },
      { id: 4, name: 'Scott' },
      { id: 5, name: 'Igor' },
    ],
    messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'Hello' },
      { id: 3, message: 'HRU' },
      { id: 4, message: 'Good buy' },
      { id: 5, message: 'Bye' },
    ],
  }
}

export let addPost = () => {
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost);
}

export let updateNewPost = (newText) => {
  state.profilePage.newPostText = newText;
  console.log(state)
  rerenderEntireTree(state);
}

export default state;