import cmds from '../commands/cmds'

const setContent = function * (newContent) {
  yield cmds.setContent(newContent)
}

const setFilter = function * (newFilter) {
  yield cmds.setFilter(newFilter)
}
/// Do this shit for all the reducer functions so they have a
//    corresponding EAD function.
