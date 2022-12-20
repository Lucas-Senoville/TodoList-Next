import { context } from "../pages/TodoPage.js"
import { useCallback, useContext, useState } from "react"
import { Form, Formik } from "formik"
import FormField from "../components/FormField"
import * as yup from "yup"

const initialValues = {
  title: "",
}
const validationSchema = yup.object().shape({
  title: yup.string().min(2).max(40).required().label("Title"),
})

const TodoHeaders = () => {
  const { state, setState } = useContext(context)
  const [showModal, setShowModal] = useState(false)

  const handleAdd = () => {
    setShowModal(true)
  }
  const handleSelection = useCallback(
    (id) => {
      const selectedId = id
      setState((previousState) => ({
        ...previousState,
        selectedTodoId: selectedId,
      }))
    },
    [state, setState]
  )

  const handleSubmit = (values) => {
    const lastId = state.lastTodoListId + 1
    const todoName = values.title
    setState((previousState) => ({
      ...previousState,
      lastTodoListId: lastId,
      todoLists: {
        ...previousState.todoLists,
        [lastId]: {
          id: state.lastTodoListId + 1,
          name: todoName,
          todos: {},
        },
      },
    }))
    setShowModal(false)
  }

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
      {showModal ? (
        <div className="bg-white w-6/12    h-96 top-2/4 p-0 absolute z-10 border">
          <header className="border-b flex justify-between p-2">
            <h1 className="font-bold text-lg">Create todo list</h1>
            <button onClick={() => setShowModal(false)}>Close</button>
          </header>
          <div className="content">
            <h3>Enter a title</h3>
          </div>
          <footer>
            <div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form className="flex flex-col gap-4">
                  <FormField
                    label="Title"
                    name="title"
                    placeholder="Enter your todo title"
                  />
                  <button
                    className="mt-4 bg-slate-600 text-white"
                    onClick={() => setShowModal(false)}
                  >
                    CANCEL
                  </button>
                  <button className="mt-4 bg-blue-600 text-white" type="submit">
                    SUBMIT
                  </button>
                </Form>
              </Formik>
            </div>
          </footer>
        </div>
      ) : null}
    </div>
  )
}
export default TodoHeaders
