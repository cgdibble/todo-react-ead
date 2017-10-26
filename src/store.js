/*
  It would be a better practice to isolate the different pieces of this todo (create, todos, etc.)
   and have them each define an initial state and export the aggregation
    -- see frankies todo example
*/

import createStore from 'redux-zero'
import createTodo from './functions'
// import { getState, addTodo, setContent } from './handlers'
const initialState = {
  createTodo,
  filter: null,
  content: '',
  todos: []
}

let store = createStore(initialState)
export default store
