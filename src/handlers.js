const { get } = require('object-path')
let store = require('./store')

const setTestState = (desiredState) => store = desiredState
const getState = ({ path }) => {
  const state = store.getState()
  return get(state, path)
}

const addTodo = ({ todo }) => {
  const { todos } = store.getState()
  store.setState({
    todos: [...todos, todo]
  })
}

const setContent = ({ content }) => {
  store.setState({
    content
  })
}

module.exports = {
  getState,
  setTestState,
  addTodo,
  setContent
}
