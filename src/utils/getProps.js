export default (state, actions, moduleName) => {
  state = state ? state[moduleName] || {} : {}
  actions = actions ? actions[moduleName] || {} : {}
  return Object.assign({}, state, actions)
}
