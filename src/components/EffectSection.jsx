/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Button from './Button/Button'
import Modal from './Modal/Modal'

export default function EffectSection() {
  const [modal, setModal] = useState(false)
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
    </section>
  )
}
