import store from '../../store'
// make these functions that directly manipulate state.
// Reference this commit at Redux-zero
// https://github.com/concretesolutions/redux-zero/commit/c8d40c9c6cabf3082a7ba861c56ff602955e38e1
const setContent = (newContent) => {
  const state = store.getState()
  store.setState({
    ...state,
    content: newContent
  })
}

export default store => ({
  setContent
})
