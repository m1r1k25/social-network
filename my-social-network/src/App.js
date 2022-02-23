import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import { Routes, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs/*' element={<Dialogs
            dialogs={props.state.messagePage.dialogs}
            messages={props.state.messagePage.messages}
          />} />
          <Route path='/profile' element={<Profile
            posts={props.state.profilePage.posts}
            newPostText={props.state.profilePage.newPostText}
            dispatch={props.dispatch}
          />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
