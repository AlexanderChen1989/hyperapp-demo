import { h } from 'hyperapp'

const location = window.location
const history = window.history
const addEventListener = window.addEventListener

const getCurrentPath = () => location.pathname + location.search

const state = { path: getCurrentPath() }
const init = (state, actions) => {
  addEventListener('popstate', () => {
    actions.setPath(getCurrentPath())
  })
}

const actions = {
  match: (state, actions, { path, view, viewProps }) => update => {
    if (view && state.path === path)
      return typeof viewProps === 'function'
        ? view(viewProps(Object.assign({}, state, actions)))
        : view(viewProps)
    else return <div />
  },
  setPath: (state, actions, path) => ({ path }),
  go: (state, actions, path) => update => {
    if (location.pathname + location.search !== path) {
      history.pushState({}, '', path)
      update({ path })
    }
  }
}

export default { init, state, actions }
