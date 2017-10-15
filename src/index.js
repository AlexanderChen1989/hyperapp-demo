import { h, app } from 'hyperapp'

import { CounterM, Counter } from './modules/counter'
import { Page, PageM } from './modules/page'

app({
  state: {
    count: 0
  },
  init: () => console.log('Im app!'),
  view: (state, actions) => {
    const pageProps = extract(state, actions, 'page')
    const counterProps = extract(state, actions, 'counter')

    return (
      <main>
        <Page {...pageProps} viewProps={counterProps} view={Counter} />
      </main>
    )
  },
  modules: {
    counter: CounterM,
    page: PageM
  }
})

function extract(state, actions, moduleName) {
  state = state ? state[moduleName] || {} : {}
  actions = actions ? actions[moduleName] || {} : {}
  return Object.assign({}, state, actions)
}
