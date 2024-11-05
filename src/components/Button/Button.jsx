/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './button.css'

export default function Button({
  text,
  active = '',
  children,
  title,
  onClick,
}) {
  return (
    <button
      className={`button ${active}`}
      onClick={onClick}
    >{`${children} ${text} ${title}`}</button>
  )
}
