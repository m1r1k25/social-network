import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/state';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} dispatch={store.dispatch.bind(store)} />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)
