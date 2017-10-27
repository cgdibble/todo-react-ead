const setTodos = (payload) => ({ type: 'setTodos', payload })
const addTodo = (payload) => ({ type: 'addTodo', payload })
const updateTodo = (payload) => ({ type: 'updateTodo', payload })
const deleteTodo = (payload) => ({ type: 'deleteTodo', payload })
const markAllComplete = (payload) => ({ type: 'markAllComplete', payload })
const markAllActive = (payload) => ({ type: 'markAllActive', payload })

const setFilter = (payload) => ({ type: 'setFilter', payload })
const setContent = (payload) => ({ type: 'setContent', payload })

export {
  setTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  markAllComplete,
  markAllActive,
  setFilter,
  setContent
}
