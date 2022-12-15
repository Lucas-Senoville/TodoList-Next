import classNames from "classnames"
import { useField } from "formik"
import Input from "./Input"

const FormField = (props) => {
  const { name, label, className, ...otherProps } = props
  const [field, meta] = useField({ name })

  return (
    <label className={classNames("flex flex-col gap-2", className)}>
      <span>{label}</span>
      <Input {...field} {...otherProps} className="border-2" />
      {meta.touched && meta.error ? (
        <span className="text-sm text-red-500 font-semibold">{meta.error}</span>
      ) : null}
    </label>
  )
}

export default FormField