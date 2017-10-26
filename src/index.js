import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "redux-zero/react"
import registerServiceWorker from './registerServiceWorker';
import regeneratorRuntime from 'regenerator-runtime'
/// my changes
import store from './store'
global.regeneratorRuntime = regeneratorRuntime
const { buildFunctions } = require("effects-as-data/es5")

const handlers = require('./handlers')
const functions = require('./functions')

const config = { };
const builtFunction = buildFunctions(config, handlers, functions)

ReactDOM.render(
  <Provider store={store}>
    <App functions={builtFunction}/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
