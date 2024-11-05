// /* eslint-disable no-unused-vars */
import logo from '/vite.svg'

function Header() {
  function schowTime() {
    const now = new Date()
    const nowStr = now.toLocaleTimeString()
    setTimeout(schowTime, 1000)
    return nowStr
  }

  return (
    <header>
      {/* <h3>Result University</h3> */}
      <img src={logo} alt="img"></img>
      <span>Время сейчас: {schowTime()} </span>
    </header>
  )
}

export default Header
