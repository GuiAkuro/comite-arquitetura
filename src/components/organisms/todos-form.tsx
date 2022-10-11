import { useForm } from "react-hook-form"
import { useTodosStore } from "src/stores/todos"
import { Button } from "../atoms/button"

export const TodosForm = () => {
  const { register, handleSubmit } = useForm()
  const { addTodo } = useTodosStore()

  function handleAddTodo(data: any) {
    addTodo(data.todo)
  }

  return (
    <form onSubmit={handleSubmit(handleAddTodo)}>
      <input defaultValue="" {...register('todo')} />
      <Button type="submit">Adicionar</Button>
    </form>
  )
}