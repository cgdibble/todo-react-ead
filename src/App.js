import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "redux-zero/react";
import Header from './view/Header/header'
const { createElement: create } = React

const mapStateToProps = (state, second) => { //state here seems to be just the store
  const {
    content,
    createTodo,
    // deleteTodo,
    filter,
    setContent,
    // setFilter,
    todos,
    toggleAllComplete,
    // toggleComplete
  } = state
  return {
    ...state,
    setContent,
    content,
    createTodo,
    filter,
    todos,
  };
};

export default connect(mapStateToProps)(({
  setContent,
  content,
  createTodo,
  todos,
  toggleAllComplete
}) => {
  console.log('APP: setContent:', setContent)
  return (
  <div>
    <section className="todoapp">
      <Header
        setContent={setContent}
        content={content}
        createTodo={createTodo}
        todos={todos}
        toggleAllComplete={toggleAllComplete}
      />
    </section>
  </div>)
})
///// REDUX ZERO EXAMPLE
// const mapToProps = ({ count }) => ({ count })
// const increment = () => store.setState({ count: store.getState().count + 1})
// const decrement = () => store.setState({ count: store.getState().count - 1})
// export default connect(mapToProps)(({ count }) => (
//   <div>
//     <h1> {count} </h1>
//     <div>
//       <button onClick={increment}>increment</button>
//       <button onClick={decrement}>decrement</button>
//     </div>
//   </div>
// ))
