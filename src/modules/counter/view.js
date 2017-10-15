import { h } from 'hyperapp'

export default ({ click, num, incr, decr, sayHi, age }) => (
  <div>
    <h1>{num}</h1>
    <button onclick={incr}>Incr</button>
    <button onclick={decr}>Decr</button>
    <button onclick={click}>Click</button>
    <button onclick={sayHi}>Hi</button>
  </div>
)
