import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import ToggleButton from './toggleButton';
import NewTodoInput from './newTodoInput';
// export default class Header extends Component {
//
//   render() {
//     const {
//       content,
//       createTodo,
//       setContent,
//       todos,
//       toggleAllComplete
//     } = this.props
//     return (
//       <header>
//         <h1>hello</h1>
//         <div className="header">
//         </div>
//       </header>
//     )
//   }
// }
export default function Header({
  content,
  createTodo,
  setContent,
  todos,
  toggleAllComplete
}) {
  console.log('setContent:', setContent)
  return (
    <header>
      <h1>Todos:</h1>
      <div className="header">
        <ToggleButton toggleAllComplete={toggleAllComplete} todos={todos} />
        <NewTodoInput
        content={content}
        createTodo={createTodo}
        setContent={setContent}
        />
      </div>
    </header>
  )
}
