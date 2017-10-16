import 'bootstrap/dist/css/bootstrap.css'

import { h, app } from 'hyperapp'

import counter from './modules/counter'
import hello from './modules/hello'
import page from './modules/page'
import getProps from './utils/getProps'
import merge from './utils/merge'

app({
  view: ({ counter: cState }, { counter: cActions, page: { wrap } }) => {
    const Counter = wrap(counter)

    return (
      <main>
        <Counter {...merge(cState, cActions)} />
      </main>
    )
  },
  modules: {
    counter,
    page
  }
})
