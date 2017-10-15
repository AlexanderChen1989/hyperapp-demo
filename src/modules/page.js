import { h } from 'hyperapp'

const initState = { loadStatus: 'ready', error: null }

export const PageM = {
  state: initState,
  init: () => console.log('Im page!'),
  actions: {
    load: (_s, _a, viewProps) => async update => {
      try {
        update({ loadStatus: 'started' })
        if (!viewProps.loadData) return
        await viewProps.loadData()
      } catch (e) {
        console.log(e)
        update({ error: '加载失败' })
      } finally {
        update({ loadStatus: 'finished' })
      }
    },
    reset: () => initState
  }
}

export const Page = ({ loadStatus, error, load, reset, viewProps, view }) => (
  <div oncreate={() => load(viewProps)} onremove={reset}>
    {loadStatus === 'started' && <h1>Loading...</h1>}
    {loadStatus === 'finished' && !error && view(viewProps)}
    {error && <h1>{error}</h1>}
  </div>
)
