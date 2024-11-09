/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { act } from 'react'
import './button.css'

export default function Button({ text, active, children, title, onClick }) {
  return (
    <button
      className={active ? 'button active' : 'button'}
      onClick={onClick}
    >{`${children} ${text} ${title}`}</button>
  )
}
