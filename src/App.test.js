import React, { Component } from 'react';
import { Provider } from "redux-zero/react"
import ReactDOM from 'react-dom';
import store from './store'
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , div);

});
