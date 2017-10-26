import { testFn, args } from "effects-as-data/test";
import cmds from "../commands/cmds";
import createTodo from "./createTodo";

const testCreateTodo = testFn(createTodo)

describe('createTodo', () => {
  it('should create a todo', testCreateTodo(() => {
    const todoContent = 'I am a todo'
    const timestamp = 555
    const newTodo = {
      content: todoContent,
      timestamp,
      complete: false
    }
    return args()
      .yieldCmd(cmds.reduxGetState('create.content')).yieldReturns(todoContent)
      .yieldCmd(cmds.now()).yieldReturns(timestamp)
      .yieldCmd(cmds.addTodo(newTodo)).yieldReturns()
      .yieldCmd(cmds.setContent('')).yieldReturns()
      .returns()
  }))
})
