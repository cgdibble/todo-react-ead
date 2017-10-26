import { testFn, args } from 'effects-as-data/test'
import cmds from '../commands/cmds'
import toggleAllComplete from './toggleAllComplete'

const testToggleAllComplete = testFn(toggleAllComplete)

describe('toggleAllComplete()', () => {
  it('should toggle all todos complete', testToggleAllComplete(() => {
    const todos = [{ content: 'I am todo', complete: false, timestamp: 111}]
    return args()
      .yieldCmd(cmds.reduxGetState('todos')).yieldReturns(todos)
      .yieldCmd(cmds.saveLocal('todos', todos))
      .returns()
  }))
})
