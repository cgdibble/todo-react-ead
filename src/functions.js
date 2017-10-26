const cmds = require('./commands')

const createTodo = function * () {
  const content = yield cmds.getState('create.content')
  if (!hasContent(content)) return
  const timestamp = yield cmds.now()
  const todo = {
    content,
    timestamp,
    complete: false
  }
  yield cmds.addTodo(todo)
  yield cmds.setContent('') // set content field back to empty
}

const hasContent = (s) => {
  return !!(s || "").trim();
}

export {
  createTodo
}
