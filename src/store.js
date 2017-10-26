/*
  It would be a better practice to isolate the different pieces of this todo (create, todos, etc.)
   and have them each define an initial state and export the aggregation
    -- see frankies todo example
*/

import createStore from 'redux-zero'

const initialState = {
  count: 1
  // filter: null,
  // content: '',
  // todos: []
}

const store = createStore(initialState)
export default store
