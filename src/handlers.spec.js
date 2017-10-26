const equal = require('assert').deepEqual
const { get } = require('object-path')
const { getState, setTestState, addTodo, setContent } = require('./handlers')
const cmds = require('./commands')
const createStore = require('redux-zero')

describe('handlers.js', () => {
  describe('getState()', () => {
    it('should return the state', () => {
      const name = 'Bill'
      const desiredPath = 'user.name'
      const store = {
        getState: () => ({ user: { name }})
      }
      setTestState(store)
      const command = cmds.getState(desiredPath)
      const result = getState(command)
      equal(result, name)
    })
  })

  describe('addTodo()', () => {
    const store = createStore({ todos: []})

    it('should update state with new todo', () => {
      setTestState(store)
      const newTodo = 'I am a todo'
      const addCommand = cmds.addTodo(newTodo)
      const addResult = addTodo(addCommand)
      const stateCommand = cmds.getState('todos')
      const stateResult = getState(stateCommand)
      equal(stateResult, [newTodo])
    })
  })

  describe('setContent()', () => {
    const store = createStore({ content: '' })
    it('should update content field with empty string', () => {
      setTestState(store)
      const newContent = ''
      const setContentCommand = cmds.setContent(newContent)
      const setContentResult = setContent(setContentCommand)
      const stateCommand = cmds.getState('content')
      const stateResult = getState(stateCommand)
      equal(stateResult, newContent)
    })
  })
})
