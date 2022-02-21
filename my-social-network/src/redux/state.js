let state = {
  profilePage: {
    posts: [
      { message: 'This is my first post', likesCount: 3 },
      { message: 'Hi, how are you?', likesCount: 10 }
    ],
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

export default state