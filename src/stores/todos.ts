import create from 'zustand'

interface TodosState {
  todos: string[],
  addTodo: (todo: string) => void,
  removeTodo: (todo: string) => void
}

export const useTodosStore = create<TodosState>((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [todo, ...state.todos] })),
  removeTodo: (todo) => set((state) => ({ todos: state.todos.filter((cur) => cur !== todo) }))
}))