import 'bootstrap/dist/css/bootstrap.css'

import { h, app } from 'hyperapp'

import counter from './modules/counter'
import hello from './modules/hello'
import page from './modules/page'
import router from './modules/router'
import getProps from './utils/getProps'
import merge from './utils/merge'

app({
  view: (
    { counter: cState, page: { loadStatus }, router: { path } },
    { counter: cActions, router, page }
  ) => {
    return (
      <main>
        <h1>{path}</h1>
        <h1>{loadStatus}</h1>
        <router.match
          path="/counter"
          view={page.wrap(counter)}
          viewProps={merge(cState, cActions)}
        />
        <button class="btn btn-success" onclick={() => router.go('/counter')}>
          Hello
        </button>
      </main>
    )
  },
  modules: {
    counter,
    page,
    router
  }
})
