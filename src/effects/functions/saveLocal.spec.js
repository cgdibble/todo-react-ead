import { testFn, args } from 'effects-as-data/test'
import cmds from '../commands/cmds'
import saveLocal from './saveLocal'

const testSaveLocal = testFn(saveLocal)

describe('saveLocal()', () => {
  it('should save todo locally', testSaveLocal(() => {
    const todos = []
    return args()
      .yieldCmd(cmds.reduxGetState('todos')).yieldReturns(todos)
      .yieldCmd(cmds.saveLocal('todos', todos))
      .returns()
  }))
})
