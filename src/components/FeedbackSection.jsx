/* eslint-disable no-unused-vars */
import { useState, useRef } from 'react'
import Button from './Button/Button'

function StateVsRef() {
  const inputt = useRef()
  // const [input, setInput] = useState('')
  const [show, setShow] = useState(false)

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      setShow(true)
    }
  }

  // function handleChangeInput(e) {
  //   setInput(e.target.value)
  // }

  return (
    <div>
      <h3>Input value: {show && inputt.current.value}</h3>
      <input
        ref={inputt}
        type="text"
        className="control"
        // value={input}
        onKeyDown={handleKeyDown}
        // onChange={handleChangeInput}
      ></input>
    </div>
  )
}

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: '',
    reason: 'help',
    hasError: false,
  })
  // const [name, setName] = useState('')
  // const [reason, setReason] = useState('help')
  // const [hasError, setHasError] = useState(true)

  function handleNameChange(event) {
    // setName(event.target.value)
    // setHasError(event.target.value.trim().length === 0)
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }))
  }

  function handleReasonChange(e) {
    // setReason(e.target.value)
    setForm((prev) => ({
      ...prev,
      reason: e.target.value,
    }))
  }

  // function toggleError() {
  // /* Неправльно, т.к. компонент не был перерисован, и предыдущее состояние не взялось*/
  // setHasError(!hasError) //false
  // setHasError(!hasError) // true
  /* Правильно, передать нужно фукнцию, которая основывается на предыдущем состоянии*/
  //   setHasError((prev) => !prev) // false
  //   setHasError((prev) => !prev) // true
  // }

  return (
    <section>
      <h3>Обратная связь</h3>

      {/* <Button onClick={toggleError}>Toggle Error</Button> */}

      <form style={{ marginBottom: '1rem' }}>
        <label htmlFor="name">Ваше имя</label>
        <input
          style={{
            border: form.hasError ? '1px solid red ' : null,
          }}
          type="text"
          id="name"
          className="control"
          value={form.name}
          onChange={handleNameChange}
        ></input>

        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={handleReasonChange}
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        <pre>
          Name: {form.name}
          <br />
          Reason: {form.reason}
        </pre>

        <Button disabled={form.hasError} active={!form.hasError}>
          Отправить
        </Button>
      </form>
      <StateVsRef />
    </section>
  )
}
