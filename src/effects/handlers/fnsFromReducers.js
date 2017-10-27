import store from '../../store'
import { map, filter } from 'ramda'
/*
  These functions need to be relying on Command paylods
  To do this, there need to be EAD Functions that call these
  using commands.

  --- see below
*/
// const setContent = function *(newContent) {
//   const state = yield cmds.getState()
//   console.log('state:', state)
//   const newState = {
//     ...state,
//     content: newContent
//   }
//   yield cmds.setState(newState)
// }


const setContent = (newContent) => {
  const state = store.getState()
  store.setState({
    ...state,
    content: newContent
  })
}

const setFilter = (newFilter) => {
  const state = store.getState()
  store.setState({
    ...state,
    filter: newFilter
  })
}

const markAllActive = () => {
  const state = store.getState()
  const { todos } = state
  const nowActiveTodos = map(t => t.complete = false)
  store.setState({
    ...state,
    todos: nowActiveTodos
  })
}

const markAllComplete = () => {
  const state = store.getState()
  const { todos } = state
  const nowCompleteTodos = map(t => ({
    ...t,
    complete: true
  }))
  store.setState({
    ...state,
    todos: nowCompleteTodos
  })
}

const deleteTodo = (todo) => {
  const state = store.getState()
  const { todos } = state
  const filteredTodos = filter(t => t.timestamp !== todo.timestamp)
  store.setState({
    ...state,
    todos: filteredTodos
  })
}

const updateTodo = (todo) => {
  const state = store.getState()
  const { todos } = state
  const updatedTodos = todos.map(t => {
    if (t.timestamp === todo.timestamp) return todo
    return t
  })
  store.setState({
    ...state,
    todos: updatedTodos
  })
}

const addTodo = (todo) => {
  const state = store.getState()
  const { todos } = state
  todos.push(todo)
  store.setState({
    ...state,
    todos
  })
}

const setTodos = (todos) => {
  return todos
}

export default store => ({
  setContent,
  setFilter,
  markAllActive,
  markAllComplete
})
