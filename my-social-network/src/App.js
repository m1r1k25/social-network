import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs/*' element={<Dialogs dialogs={props.state.messagePage.dialogs} messages={props.state.messagePage.messages} />} />
            <Route path='/profile' element={<Profile posts={props.state.profilePage.posts} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
