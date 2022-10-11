import { styled } from "stitches.config"
import { TodosForm } from "../organisms/todos-form"
import { TodosList } from "../organisms/todos-list"

export const Todos = () => {
  return (
    <Container>
      <TodosForm />
      <TodosList />
    </Container>
  )
}

const Container = styled('div', {
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center'
})