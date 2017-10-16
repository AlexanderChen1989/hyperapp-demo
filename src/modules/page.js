import { h } from 'hyperapp'

const initState = { loadStatus: 'ready', error: null }
const state = initState
const init = () => console.log('Im page!')

const actions = {
  load: (_state, _actions, viewProps) => async update => {
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
  wrap: (state, actions, module) => update => viewProps => {
    if (!module.view) return
    return (
      <div>
        <div oncreate={() => actions.load(viewProps)} />
        <div onremove={() => update(initState)} />
        {state.loadStatus === 'started' && <h1>Loading...</h1>}
        {state.loadStatus === 'finished' &&
          !state.error && <module.view {...viewProps} />}
        {state.error && <h1>{state.error}</h1>}
      </div>
    )
  }
}

export default { init, state, actions }
