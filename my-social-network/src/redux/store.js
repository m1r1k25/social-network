import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
      newMessageBody: '',
    },
    sidebar: {

    },
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

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagePage = dialogsReducer(this._state.messagePage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

export default store;