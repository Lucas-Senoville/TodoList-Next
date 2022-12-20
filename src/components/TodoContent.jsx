import {
  HiOutlinePlus,
  HiTrash,
  HiPencilSquare,
  HiCheckCircle,
} from "react-icons/hi2"
import { context } from "../pages/TodoPage.js"
import { useContext, useState } from "react"

const TodoContent = (props) => {
  const { state, setState } = useContext(context)
  const [showModal, setShowModal] = useState(false)

  const handleDelete = (key) => {
    let currentState = Object.assign({}, state)
    delete currentState.todoLists[state.selectedTodoId].todos[key]
    setState(currentState)
  }

  return (
    <div className="flex-1">
      <div className="toolbar flex border-b justify-between">
        <div className="flex gap-4">
          <button className="py-2 ml-2">
            <HiOutlinePlus className="h-6 w-6" />
          </button>
          <button className="py-2">
            <HiPencilSquare className="h-6 w-6" />
          </button>
          <button className="py-2">
            <HiTrash className="h-6 w-6" />
          </button>
        </div>
        <button className="py-2 mr-2">
          <HiCheckCircle className="h-6 w-6" />
        </button>
      </div>

      {Object.entries(state.todoLists[state.selectedTodoId].todos).map(
        ([key, value]) => (
          <div key={key} className="group flex justify-between border-b">
            <div className="flex gap-2 content-center ml-4">
              <input type="checkbox" id={value.description} name="checkbox" />
              <p className="py-2">{value.description}</p>
            </div>
            <button
              className="invisible py-2 mr-2 group-hover:visible"
              onClick={() => handleDelete(key)}
            >
              <HiTrash className="h-6 w-6" />
            </button>
          </div>
        )
      )}
    </div>
  )
}

export default TodoContent
