import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "redux-zero/react";
import store from './store'
const { createElement: create } = React
// const Header = require('./view/Header/header')

const mapToProps = ({ count }) => ({ count })


const increment = () => store.setState({ count: store.getState().count + 1})
const decrement = () => store.setState({ count: store.getState().count - 1})

export default connect(mapToProps)(({ count }) => (
  <div>
    <h1> {count} </h1>
    <div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  </div>
))


// const mapStateToProps = (state) => {
//   console.log('state:', state)
//   return {
//     ...state,
//     filter: '',//state.app.filter,
//     content: ''//state.create.content
//   };
// };

// export default class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App1-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

/*
// Necessary Props
({
  content,
  createTodo,
  deleteTodo,
  filter,
  setContent,
  setFilter,
  todos,
  toggleAllComplete,
  toggleComplete
}) */
// class App extends Component {
//   render() {
//     console.log('this.props:', this.props)
//     const p = create('p#App-intro', {}, 'Well, hello')
//     const header = create(Header, { content, createTodo, setContent, todos, toggleAllComplete})
//     const children = [p, header]
//     const topDiv = create('div#todoapp', {}, ...children)
//     return topDiv
//   }
// }
//
// export default connect(mapStateToProps)(App)

// const App = ({
//   content,
//   createTodo,
//   deleteTodo,
//   filter,
//   setContent,
//   setFilter,
//   todos,
//   toggleAllComplete,
//   toggleComplete
// }) => {
//   const p = create('p#App-intro', {}, 'Well, hello')
//   const header = create(Header, { content, createTodo, setContent, todos, toggleAllComplete})
//   const children = [p, header]
//   const topDiv = create('div#todoapp', {}, ...children)
//   return topDiv
// }
//
// const connectedShit = connect(mapStateToProps)
// console.log('connectedShit:', connectedShit)
// export default connectedShit()
