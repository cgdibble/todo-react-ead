import cmds from '../commands/cmds'

export default function * saveLocal() {
  const todos = yield cmds.reduxGetState('todos')
  yield cmds.saveLocal('todos', todos)
}
