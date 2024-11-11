/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import classes from './button.module.css'

export default function Button({
  text = ' ',
  active,
  children,
  title = ' ',
  ...props
}) {
  return (
    <button
      {...props}
      className={
        active ? `${classes.button} ${classes.active}` : classes.button
      }
    >{`${children} ${text} ${title}`}</button>
  )
}
