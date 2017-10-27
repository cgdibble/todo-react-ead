import { generateCmdsFromActions, redux } from 'effects-as-data-redux'
import { cmds } from 'effects-as-data-universal/es5'
import * as actions from './actionsTurnedCmds'

const getLocal = (key) => {
  return {
    type: "getLocal",
    key
  };
}

const saveLocal = (key, value) => {
  return {
    type: "saveLocal",
    key,
    value
  };
}

export default {
  ...redux,
  ...actions,
  ...cmds,
  getLocal,
  saveLocal
}
