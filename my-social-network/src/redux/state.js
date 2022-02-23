let store = {
  _state: {
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
  },
  _callSubscriber() {
    console.log('State changed')
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export default store;

window.store = store;