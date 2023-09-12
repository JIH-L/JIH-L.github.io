import { useReducer } from 'react'

export default function UseReducer() {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'add':
        return { count: state.count + 1 }
      case 'minus':
        return { count: state.count - 1 }
      default:
        return state
    }
  }
  const initialState = { count: 0 }
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>useReducer</h1>
      <h2>count: {state.count}</h2>
      <button
        className="border-2 border-sky-700 p-3"
        onClick={() => dispatch({ type: 'add' })}
      >
        +
      </button>
      <button
        className="border-2 border-sky-700 p-3 ml-3"
        onClick={() => dispatch({ type: 'minus' })}
      >
        -
      </button>
    </div>
  )
}
