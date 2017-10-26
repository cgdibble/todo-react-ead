const { testFn, args } = require('effects-as-data/test')
const cmds = require('./commands')
import createTodo from './functions'
const { setTestState } = require('./handlers')
const store = require('./store')

describe('handlers.js', () => {
  describe('createTodo()', () => {
    const testCreateTodo = testFn(createTodo)
    it('should create a todo', testCreateTodo(() => {
      setTestState(store)
      const content = 'I am a todo'
      const timestamp = 457
      const todo = {
        content,
        timestamp,
        complete: false
      }
      return args()
        .yieldCmd(cmds.getState('create.content')).yieldReturns(content)
        .yieldCmd(cmds.now()).yieldReturns(timestamp)
        .yieldCmd(cmds.addTodo(todo)).yieldReturns()
        .yieldCmd(cmds.setContent('')).yieldReturns()
        .returns()
    }))
  })
})
