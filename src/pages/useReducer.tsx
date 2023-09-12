import { useReducer } from 'react'

// 定義 action 類型
const ADD = 'add'
const MINUS = 'minus'

// 定義 action 的型別
interface Action {
  type: typeof ADD | typeof MINUS
}

interface State {
  count: number
}

export default function UseReducer() {
  const reducer = (state: State, action: Action) => {
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
        className="ml-3 border-2 border-sky-700 p-3"
        onClick={() => dispatch({ type: 'minus' })}
      >
        -
      </button>
    </div>
  )
}
