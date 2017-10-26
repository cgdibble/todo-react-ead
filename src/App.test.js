import React, { Component } from 'react';
import { Provider } from "redux-zero/react"
import ReactDOM from 'react-dom';
import App from './App';
import store from './store'
it('renders without crashing', () => {
  const div = document.createElement('div');
  console.log('store:', store)
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , div);

});
