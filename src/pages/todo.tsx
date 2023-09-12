import { useState, useEffect } from 'react'
import List from '../components/List'
interface Todo {
  id: number
  name: string
  status: boolean
}
export default function Todo() {
  // make a todo list
  const savedTodoList = localStorage.getItem('todoList')
  const initialTodoList = savedTodoList ? JSON.parse(savedTodoList) : []

  const [todoList, setTodoList] = useState(initialTodoList)

  const addTodo = () => {
    console.log('add todo')
    const input = document.querySelector<HTMLInputElement>('#todoInput')
    if (input) {
      setTodoList([
        ...todoList,
        { name: input.value, id: Date.now(), status: false },
      ])
      input.value = ''
      window.localStorage.setItem('todoList', JSON.stringify(todoList))
    }
  }
  const removeAllTodo = () => {
    setTodoList([])
  }
  const updateTodo = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement
    const id = target.dataset.id
    const newTodoList = todoList.map((todo: Todo) => {
      if (todo.id === Number(id)) {
        todo.status = !todo.status
      }
      return todo
    })
    setTodoList(newTodoList)
    window.localStorage.setItem('todoList', JSON.stringify(todoList))
  }

  useEffect(() => {
    window.localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList])

  return (
    <>
      <div className="h-screen bg-slate-400 p-5">
        <div className="m-auto max-w-[768px] bg-white p-5">
          <h1 className="mb-4 text-center text-2xl">React ToDoList</h1>
          <div className="flex">
            <input
              id="todoInput"
              type="text"
              className="w-full rounded-l-lg border-y-2 border-l-2 border-indigo-300 pl-4 focus:outline-none focus:outline-offset-0 focus:outline-indigo-500"
              placeholder="請輸入你的代辦事項"
            />
            <button
              onClick={addTodo}
              className="h-[50px] w-[50px] rounded-r-lg border-0 bg-sky-500 text-white transition duration-700 hover:bg-sky-600"
            >
              +
            </button>
          </div>
          <List todoList={todoList} updateTodo={updateTodo} />
          <div className="flex items-center justify-between">
            <p>
              目前有 <span className="font-medium">{todoList.length}</span>{' '}
              個事項待完成
            </p>

            <button
              onClick={removeAllTodo}
              type="button"
              className="rounded-md bg-red-300 p-2 transition duration-700 hover:bg-red-400"
            >
              Clear All Task
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
