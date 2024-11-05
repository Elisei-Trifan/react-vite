import logo from '/vite.svg'

function Header() {
  const now = new Date()

  return (
    <header>
      {/* <h3>Result University</h3> */}
      <img src={logo} alt="img"></img>
      <span>Время сейчас: {now.toLocaleTimeString()} </span>
    </header>
  )
}

export default Header
