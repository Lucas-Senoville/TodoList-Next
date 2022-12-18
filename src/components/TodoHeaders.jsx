import { context } from "../pages/TodoPage.js"
import { useCallback, useContext, useState } from "react"

const TodoHeaders = () => {
  const { state, setState } = useContext(context)
  const [showModal, setShowModal] = useState(false)

  const handleAdd = () => {
    setShowModal(true)
    const lastId = state.lastTodoListId + 1
    setState((previousState) => ({
      ...previousState,
      lastTodoListId: lastId,
      todoLists: {
        ...previousState.todoLists,
        [lastId]: {
          id: state.lastTodoListId + 1,
          name: "Hello",
          todos: {},
        },
      },
    }))
  }

  const handleSelection = useCallback(
    (id) => {
      console.log(id)
      const selectedId = id
      setState((previousState) => ({
        ...previousState,
        selectedTodoId: selectedId,
      }))
      console.log(state)
    },
    [state, setState]
  )

  return (
    <div className="overflow-x-auto flex border-b pt-2">
      {Object.values(state.todoLists).map((data) => (
        <button
          key={data.id}
          onClick={() => handleSelection(data.id)}
          className="border border-b-0 p-2 rounded-t-md"
        >
          {data.name}
          <span className="ml-2 bg-blue-400 rounded">
            {Object.values(data.todos).length}
          </span>
        </button>
      ))}
      <button
        className="mx-8 border border-b-0 p-2 rounded-t-md"
        onClick={handleAdd}
      >
        +
      </button>
      <div className="bg-white w-6/12	h-96 top-2/4 p-0 absolute z-10 border">
        <header className="border-b flex justify-between p-2">
          <h1 className="font-bold text-lg">Create todo list</h1>
        </header>
      </div>
    </div>
  )
}

export default TodoHeaders
