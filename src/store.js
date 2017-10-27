/*
  It would be a better practice to isolate the different pieces of this todo (create, todos, etc.)
   and have them each define an initial state and export the aggregation
    -- see frankies todo example
*/

import createStore from 'redux-zero'
import createTodo from './functions'
import commands from './effects/commands/cmds'
import handlers from './effects/handlers/fnsFromReducers'
const theHandlers = handlers()
const initialState = {
  createTodo,
  filter: null,
  content: '',
  todos: [],
  ...theHandlers
  // ...commands
}

let store = createStore(initialState)
export default store
