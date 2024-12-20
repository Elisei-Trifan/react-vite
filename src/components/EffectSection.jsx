/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import Button from './Button/Button'
import Modal from './Modal/Modal'
import useInput from './hooks/useInput.js'

export default function EffectSection() {
  const input = useInput()
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true)
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const usersServer = await response.json()
      setUsers(usersServer)
      setLoading(false)
    }

    fetchUsers()
  }, [])

  function openModel() {
    setModal(true)
  }

  return (
    <section>
      <h3>Effects</h3>

      <Button onClick={openModel}>Открыть информацию</Button>

      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          quidem quas, quisquam laudantium magni culpa quos nihil eum rem illo
          aut numquam blanditiis corporis quae delectus cupiditate architecto
          non error.
        </p>
        <Button onClick={() => setModal(false)}>Close Modal</Button>
      </Modal>

      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <input type="text" className="control" {...input}></input>
          <select className="control">
            {users
              .filter((item) =>
                item.name.toLowerCase().includes(input.value.toLowerCase())
              )
              .map((item) => (
                <option key={item.id}>{item.name}</option>
              ))}
          </select>
        </>
      )}
    </section>
  )
}

{
  /* <ul>
          {users.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul> */
}
