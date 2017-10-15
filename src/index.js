import { h, app } from 'hyperapp'

import * as counter from './modules/counter'
import * as page from './modules/page'

app({
  state: {
    count: 0
  },
  init: () => console.log('Im app!'),
  view: (state, actions) => {
    const pageProps = getProps(state, actions, 'page')
    const counterProps = getProps(state, actions, 'counter')

    return (
      <main>
        <page.view
          {...pageProps}
          viewProps={counterProps}
          view={counter.view}
        />
      </main>
    )
  },
  modules: {
    counter,
    page
  }
})

function getProps(state, actions, moduleName) {
  state = state ? state[moduleName] || {} : {}
  actions = actions ? actions[moduleName] || {} : {}
  return Object.assign({}, state, actions)
}
