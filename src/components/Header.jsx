// /* eslint-disable no-unused-vars */
import { useState } from 'react'
import logo from '/vite.svg'

function Header() {
  const [now, setNow] = useState(new Date())

  setInterval(() => setNow(new Date()), 1000)

  return (
    <header>
      {/* <h3>Result University</h3> */}
      <img src={logo} alt="img"></img>
      <span>Время сейчас: {now.toLocaleTimeString()} </span>
    </header>
  )
}

export default Header
