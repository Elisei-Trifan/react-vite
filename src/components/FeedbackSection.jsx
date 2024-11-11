/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Button from './Button/Button'

export default function FeedbackSection() {
  const [name, setName] = useState('')
  const [reason, setReason] = useState('help')
  const [hasError, setHasError] = useState(false)

  function handleNameChange(event) {
    setName(event.target.value)
    setHasError(event.target.value.trim().length === 0)
  }

  function handleReasonChange(e) {
    setReason(e.target.value)
  }

  function toggleError() {
    setHasError(!hasError)
  }

  return (
    <section>
      <h3>Обратная связь</h3>

      <Button onClick={toggleError}>Toggle Error</Button>

      <form>
        <label htmlFor="name">Ваше имя</label>
        <input
          style={{
            border: hasError ? '1px solid red ' : null,
          }}
          type="text"
          id="name"
          className="control"
          value={name}
          onChange={handleNameChange}
        ></input>

        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
          value={reason}
          onChange={handleReasonChange}
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        <pre>
          Name: {name}
          <br />
          Reason: {reason}
        </pre>

        <Button disabled={hasError} active={!hasError}>
          Отправить
        </Button>
      </form>
    </section>
  )
}
