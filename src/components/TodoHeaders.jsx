import { context } from "../pages/TodoPage.js"
import { useContext, useState } from "react"
import Modal from "./Modal.jsx"

const TodoHeaders = () => {
  const { state, setState } = useContext(context)
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true)
    const lastId = state.lastTodoListId + 1
    setState((previousState) => ({
      selectedTodoId: lastId,
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

  return (
    <div className="overflow-x-auto flex border-b pt-2 sticky">
      {Object.values(state.todoLists).map((data) => (
        <button key={data.id} className="border border-b-0 p-2 rounded-t-md	">
          {data.name}
        </button>
      ))}
      <button
        className="mx-8 border border-b-0 p-2 rounded-t-md	"
        onClick={handleClick}
      >
        +
      </button>
      <Modal />
    </div>
  )
}

export default TodoHeaders
