import 'bootstrap/dist/css/bootstrap.css'

import { h, app } from 'hyperapp'

import counter from './modules/counter'
import hello from './modules/hello'
import page from './modules/page'
import getProps from './utils/getProps'
import merge from './utils/merge'

app({
  view: (state, actions) => {
    const Counter = actions.page.wrap(counter)

    return (
      <main>
        <Counter {...merge(state.counter, actions.counter)} />
      </main>
    )
  },
  modules: {
    counter,
    page
  }
})
