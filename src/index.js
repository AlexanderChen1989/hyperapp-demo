import { h, app } from 'hyperapp'

import * as counter from './modules/counter'
import * as page from './modules/page'
import getProps from './utils/getProps'

app({
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
