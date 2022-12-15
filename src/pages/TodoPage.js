import { useState, createContext } from "react"
import TodoHeaders from "../components/TodoHeaders.jsx"

const context = createContext()

const initialState = {
  selectedTodoId: 1,
  lastTodoListId: 2,
  todoLists: {
    1: {
      id: 1,
      name: "Homework",
      todos: {
        1: {
          description: "HTML / CSS",
          done: false,
        },
        2: {
          description: "React",
          done: true,
        },
      },
    },
    2: {
      id: 2,
      name: "Chore",
      todos: {
        1: {
          description: "Take a shower",
          done: false,
        },
      },
    },
  },
}

const TodoPage = () => {
  const [state, setState] = useState(initialState)

  return (
    <context.Provider value={{ state, setState }}>
      <TodoHeaders />
    </context.Provider>
  )
}

export default TodoPage
export { context }
