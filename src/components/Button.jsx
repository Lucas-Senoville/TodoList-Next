import classNames from "classnames"

const Button = (props) => (
  <button
    {...props}
    className={classNames(
      "bg-blue-600 active:bg-blue-700 text-white px-3 py-2 font-semibold",
      props.className
    )}
  />
)

export default Button
