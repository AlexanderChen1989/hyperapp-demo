import { h } from 'hyperapp'

const fakeDelayResolve = () =>
  new Promise(resolve => setTimeout(() => resolve({ num: 100 }), 1000))

const fakeDelayReject = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('error')), 1000)
  )

export const CounterM = {
  state: { num: 0 },
  init: () => console.log('Im counter!'),
  actions: {
    loadData: () => async update => {
      const state = await fakeDelayResolve()
      update(state)
    },
    incr: ({ num }) => {
      return { num: num + 1 }
    },
    decr: ({ num }) => {
      return { num: num - 1 }
    }
  }
}

export const Counter = ({ num, incr, decr }) => (
  <div>
    <h1>{num}</h1>
    <button onclick={incr}>Incr</button>
    <button onclick={decr}>Decr</button>
  </div>
)
