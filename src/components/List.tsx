interface Todo {
  id: number
  name: string
  status: boolean
}

interface ListProps {
  todoList: Todo[]
  updateTodo: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function List({ todoList, updateTodo }: ListProps) {
  return (
    <ul>
      {todoList.map((todo) => (
        <li
          className={todo.status ? 'line-through' : ''}
          key={todo.id}
          data-id={todo.id}
        >
          <label>
            <input
              onChange={updateTodo}
              type="checkbox"
              className="mr-2"
              data-id={todo.id}
              checked={todo.status}
            />
            {todo.name}
          </label>
        </li>
      ))}
    </ul>
  )
}
