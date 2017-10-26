import React, { Component } from 'react';
import { connect } from "redux-zero/react";

const { createElement: create } = React
const h1 = create('h1', 'Charlie\'s Todo App!')
const divHeader = create('div#header')
const children = [h1, divHeader]


/*
necessary Props
({
  content,
  createTodo,
  setContent,
  todos,
  toggleAllComplete
})
// */
// const header = ({content, createTodo, setContent, todos, toggleAllComplete}) => {
//   return create(
//     'header',
//     {content, createTodo, setContent, todos, toggleAllComplete},
//     ...children
//   )
// }

// export default header
export default class Header extends Component {
  render() {
    console.log('this.props:', this.props)
    return create(
      'header',
      {content, createTodo, setContent, todos, toggleAllComplete},
      ...children
    )
  }
}
