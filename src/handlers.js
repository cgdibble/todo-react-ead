import store from './store'
const { get } = require('object-path')
let localStore = store

export const setTestState = (desiredState) => {
  localStore = desiredState
}
export const getState = ({ path }) => {
  const state = localStore.getState()
  return get(state, path)
}

export const addTodo = ({ todo }) => {
  const { todos } = localStore.getState()
  localStore.setState({
    todos: [...todos, todo]
  })
}

export const setContent = ({ content }) => {
  localStore.setState({
    content
  })
}
