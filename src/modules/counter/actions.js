const fakeDelayResolve = () =>
  new Promise(resolve => setTimeout(() => resolve({ num: 100 }), 1000))

const fakeDelayReject = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('error')), 1000)
  )

export const loadData = () => async update => {
  const state = await fakeDelayResolve()
  update(state)
}

export const click = (_s, _a, e) => console.log(e)

export const incr = ({ num }) => {
  return { num: num + 1 }
}

export const sayHi = () => console.log('H!....')

export const decr = ({ num }) => {
  return { num: num - 1 }
}
