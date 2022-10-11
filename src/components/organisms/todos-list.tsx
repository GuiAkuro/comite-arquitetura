import { useTodosStore } from "src/stores/todos"
import { Button } from "../atoms/button"

export const TodosList = () => {
  const { todos, removeTodo } = useTodosStore()

  function handleRemoveTodo(todo: string) {
    removeTodo(todo)
  }

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <span>{todo}</span>
          <Button size="small" style="accent" onClick={() => handleRemoveTodo(todo)}>Remover</Button>
        </li>
      ))}
    </ul>
  )
}