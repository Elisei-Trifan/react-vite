/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import classes from './button.module.css'

export default function Button({
  text = ' ',
  active,
  children,
  title = ' ',
  onClick,
}) {
  return (
    <button
      className={
        active ? `${classes.button} ${classes.active}` : classes.button
      }
      onClick={onClick}
    >{`${children} ${text} ${title}`}</button>
  )
}
