import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store'
import App from './App';
import { Provider } from "redux-zero/react"
import registerServiceWorker from './registerServiceWorker';
import regeneratorRuntime from 'regenerator-runtime'
import { buildFunctions } from "effects-as-data/es5";
/// my changes
global.regeneratorRuntime = regeneratorRuntime

const handlers = require('./handlers')
const functions = require('./functions')
// TODO: Handlers really need to be functions here as they are changing state
const functionsAndHandlers = {...handlers, ...functions}

const config = {};
const builtFunction = buildFunctions(config, handlers, functionsAndHandlers)

ReactDOM.render(
  <Provider store={store}>
    <App functions={builtFunction}/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
