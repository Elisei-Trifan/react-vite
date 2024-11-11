/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createPortal } from 'react-dom'
import { useEffect, useRef } from 'react'
import './modal.module.css'

export default function Modal({ children, open }) {
  const dialog = useRef()

  useEffect(() => {
    if (open) {
      dialog.current.showModal()
    } else {
      dialog.current.close()
    }
  }, [open])

  return createPortal(
    <dialog ref={dialog}>{children}</dialog>,
    document.getElementById('modal')
  )
}
