import { useEffect, useState } from "react"
import ReactDom from "react-dom"

const Modal = ({ show, onClose, children }) => {
  const closeOnEscapeKeyDown = (e) => {
    //close on esc
    if ((e.charCode || e.keyCode) === 27) {
      onClose()
    }
  }

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown)
  }, [])

  return (<div></div>)()
  // return ReactDom
  //   .createPortal
  // <div className="modal" onClick={props.onClose}>
  //   <div className="modal-content" onClick={(e) => e.stopPropagation()}>
  //     <div className="modal-header">
  //       <h4 className="modal-title">{props.title}</h4>
  //     </div>
  //     <div className="modal-body">{props.children}</div>
  //     <div className="modal-footer">
  //       <button onClick={props.onClose} className="button">
  //         Close
  //       </button>
  //     </div>
  //   </div>
  // </div>,
  // document.getElementById("root")
}

export default Modal
