// Commands are synonymous with what Redux-zero is calling actions
const { cmds: universalCommands } = require('effects-as-data-universal')
////////////////////////////////
//       Imported Commands
////////////////////////////////
const { now } = universalCommands

const getState = (path) => ({ type: 'getState', path })
const addTodo = (todo) => ({ type: 'addTodo', todo })
const setContent = (content) => ({ type: 'setContent', content })

module.exports = {
  getState,
  addTodo,
  setContent,
  now
}
