import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import musicReducer from './reducers/musicReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(musicReducer, composeWithDevTools(applyMiddleware(thunk)));
// Use the Redux DevTools

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);